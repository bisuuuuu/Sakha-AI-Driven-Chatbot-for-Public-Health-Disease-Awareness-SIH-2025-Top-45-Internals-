// backend/server.js  (DB/HISTORY removed - minimal, fixed for base64 + latest model + robust JSON parsing)
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const OpenAI = require('openai');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Init OpenAI client
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ensure uploads folder exists
if (!fs.existsSync(path.join(__dirname, 'uploads'))) {
  fs.mkdirSync(path.join(__dirname, 'uploads'));
}

// multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) =>
    cb(null, path.join(__dirname, 'uploads')),
  filename: (req, file, cb) =>
    cb(
      null,
      Date.now() +
        '-' +
        Math.round(Math.random() * 1e9) +
        path.extname(file.originalname)
    ),
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) =>
    file.mimetype.startsWith('image/')
      ? cb(null, true)
      : cb(new Error('Only images allowed!')),
  limits: { fileSize: 10 * 1024 * 1024 },
});

// health check
app.get('/api/health', (req, res) =>
  res.json({ status: 'OK' })
);

// upload endpoint
app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file)
    return res.status(400).json({ error: 'No file uploaded' });

  const filePath = path.join(__dirname, 'uploads', req.file.filename);
  const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

  res.json({ file_url: fileUrl, file_path: filePath });
});

// analyze endpoint
app.post('/api/analyze', async (req, res) => {
  try {
    const { image_url } = req.body;
    if (!image_url)
      return res.status(400).json({ error: 'image_url required' });

    // resolve local file path
    const localPath = path.join(
      __dirname,
      'uploads',
      path.basename(image_url)
    );

    if (!fs.existsSync(localPath)) {
      return res.status(404).json({ error: 'Image not found on server' });
    }

    // convert to base64
    const imageBuffer = fs.readFileSync(localPath);
    const base64Image = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`;

    // Prompt
    const prompt = `You are a medical image analyzer. 
Analyze the given wound/blood image and return ONLY valid JSON with keys:
{
  "blood_detected": boolean,
  "severity_level": string,
  "confidence_percentage": number,
  "affected_area": string,
  "immediate_precautions": string,
  "treatment_recommendation": string
}`;

    // call OpenAI with vision model
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",   // lightweight vision-capable model
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: prompt },
            { type: "image_url", image_url: { url: base64Image } }
          ]
        }
      ],
      max_tokens: 500
    });

    const analysisText = response.choices?.[0]?.message?.content || "";
    let analysis = {};

    try {
      // direct parse first
      analysis = JSON.parse(analysisText);
    } catch (e) {
      // fallback: extract { ... } JSON substring
      const jsonMatch = analysisText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          analysis = JSON.parse(jsonMatch[0]);
        } catch (innerErr) {
          console.error("JSON parse error:", analysisText);
          return res.status(500).json({
            error: "OpenAI returned invalid JSON",
            raw: analysisText,
          });
        }
      } else {
        console.error("No JSON object found:", analysisText);
        return res.status(500).json({
          error: "OpenAI returned no JSON object",
          raw: analysisText,
        });
      }
    }

    res.json({ ...analysis, image_url });
  } catch (err) {
    console.error('analyze error', err);
    res
      .status(500)
      .json({ error: 'Failed to analyze image', details: err.message });
  }
});

app.listen(PORT, () =>
  console.log(`Backend running: http://localhost:${PORT}`)
);

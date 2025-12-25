const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const twilio = require("twilio");
const cors = require("cors");
const { sendWhatsAppMessage, getGeminiReply } = require("./whatsapp");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// --- Twilio Config (NO HARD-CODED SECRETS) ---
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

const fromNumber = "whatsapp:+14155238886"; // Twilio Sandbox number
const toNumber = "whatsapp:+918328876865";  // Your WhatsApp number
const MessagingResponse = twilio.twiml.MessagingResponse;

// --- Gemini API Key (ENV ONLY) ---
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// --- Alerts Storage ---
let alerts = [];

// --- Endpoint to Add Alert ---
app.post("/add-alert", (req, res) => {
  const { name, time, type } = req.body;

  if (!name || !time || !type) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  const alertObj = { name, time, type };
  alerts.push(alertObj);

  // Send WhatsApp immediately
  client.messages
    .create({
      from: fromNumber,
      to: toNumber,
      body: `✅ Your schedule is set for ${type}: ${name} at ${new Date(
        time
      ).toLocaleString()}`,
    })
    .then((msg) => console.log("Immediate WhatsApp sent:", msg.sid))
    .catch((err) => console.error("Error sending WhatsApp:", err));

  // Schedule WhatsApp for future
  const delay = new Date(time) - new Date();
  if (delay > 0) {
    setTimeout(() => {
      client.messages
        .create({
          from: fromNumber,
          to: toNumber,
          body: `⏰ Reminder: Time for ${type} - Take ${name}`,
        })
        .then((msg) => console.log("Scheduled WhatsApp sent:", msg.sid))
        .catch((err) =>
          console.error("Error sending scheduled WhatsApp:", err)
        );
    }, delay);
  }

  res.json({ success: true, alert: alertObj });
});

// --- Disease Alert Endpoint ---
app.post("/send-alert", (req, res) => {
  const { district, disease, severity, cases } = req.body;

  if (!district || !disease || !severity || !cases) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  const alertObj = { district, disease, severity, cases };
  alerts.push(alertObj);

  client.messages
    .create({
      from: fromNumber,
      to: toNumber,
      body: `🚨 Health Alert 🚨
District: ${district}
Disease: ${disease}
Severity: ${severity.toUpperCase()}
Cases Reported: ${cases}`,
    })
    .then((msg) => console.log("Immediate WhatsApp sent:", msg.sid))
    .catch((err) => console.error("Error sending WhatsApp:", err));

  res.json({ success: true, alert: alertObj });
});

// --- WhatsApp Webhook for Chatbot ---
const fetch = require("node-fetch");

app.post("/whatsapp-webhook", async (req, res) => {
  console.log("📩 Incoming webhook:", req.body);

  const incomingMsg = req.body.Body || "";
  const from = req.body.From;
  const to = req.body.To;

  try {
    const reply = await getGeminiReply(incomingMsg);
    await sendWhatsAppMessage(to, from, reply);
    res.sendStatus(200);
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).send("⚠️ Error processing the message.");
  }
});

// --- Status Callback ---
app.post("/status", (req, res) => {
  console.log("📊 Status callback:", req.body);
  res.sendStatus(200);
});

// --- Server Start ---
const PORT = process.env.PORT || 5503;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

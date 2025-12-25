const fetch = require("node-fetch");
const twilio = require("twilio");

// --- Environment Variables (NO HARDCODED SECRETS) ---
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// ✅ Call Gemini API
async function getGeminiReply(userMsg) {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userMsg }] }],
        }),
      }
    );

    const data = await response.json();
    console.log("🤖 Gemini API response:", data);

    return (
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't understand that."
    );
  } catch (err) {
    console.error("❌ Gemini API Error:", err);
    return "⚠️ Error: Couldn’t get a response right now.";
  }
}

// ✅ Send WhatsApp reply using Twilio
async function sendWhatsAppMessage(from, to, message) {
  try {
    const chunks = message.match(/[\s\S]{1,1600}/g) || [];

    for (const chunk of chunks) {
      await client.messages.create({
        body: chunk,
        from,
        to,
      });
      console.log(`✅ Sent chunk to ${to}: ${chunk.substring(0, 50)}...`);
    }
  } catch (err) {
    console.error("❌ Twilio Send Error:", err);
  }
}

module.exports = { sendWhatsAppMessage, getGeminiReply };

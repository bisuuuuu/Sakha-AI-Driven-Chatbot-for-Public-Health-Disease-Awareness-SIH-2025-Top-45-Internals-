// --- TRANSLATION LOGIC ---

const translations = {
  en: {
    page_title: "🩺 Sakha - Help Desk",
    animated_text: "How are you feeling today?",
    placeholder_msg: "Start chatting...",
    input_placeholder: "Ask anything",
    send_button: "Send",
    footer_text: "© 2025 🩺 Sakha. All Rights Reserved.",
    user_prefix: "You",
    bot_prefix: "Sakha",
    mic_unsupported: "Your browser does not support speech recognition.",
    gemini_no_response: "⚠ No response from Gemini.",
    error_prefix: "⚠ Error:",
  },
  or: {
    page_title: "🩺 ସଖା - ସହାୟତା କେନ୍ଦ୍ର",
    animated_text: "ଆଜି ଆପଣ କେମିତି ଅନୁଭବ କରୁଛନ୍ତି?",
    placeholder_msg: "ଚାଟିଂ ଆରମ୍ଭ କରନ୍ତୁ...",
    input_placeholder: "କିଛି ବି ପଚାରନ୍ତୁ",
    send_button: "ପଠାନ୍ତୁ",
    footer_text: "© ୨୦୨୫ 🩺 ସଖା. ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ.",
    user_prefix: "ଆପଣ",
    bot_prefix: "ସଖା",
    mic_unsupported: "ଆପଣଙ୍କ ବ୍ରାଉଜର୍ ସ୍ପିଚ୍ ରେକଗନିସନ ସମର୍ଥନ କରେ ନାହିଁ।",
    gemini_no_response: "⚠ ଜେମିନିରୁ କୌଣସି ପ୍ରତିକ୍ରିୟା ନାହିଁ।",
    error_prefix: "⚠ ତ୍ରୁଟି:",
  },
  hi: {
    page_title: "🩺 सखा - सहायता केंद्र",
    animated_text: "आज आप कैसा महसूस कर रहे हैं?",
    placeholder_msg: "चैटिंग शुरू करें...",
    input_placeholder: "कुछ भी पूछें",
    send_button: "भेजें",
    footer_text: "© २०२५ 🩺 सखा। सर्वाधिकार सुरक्षित।",
    user_prefix: "आप",
    bot_prefix: "सखा",
    mic_unsupported: "आपका ब्राउज़र वाक् पहचान का समर्थन नहीं करता है।",
    gemini_no_response: "⚠ जेमिनी से कोई प्रतिक्रिया नहीं मिली।",
    error_prefix: "⚠ त्रुटि:",
  },
};

let currentLanguage = "en"; // Default language

function translatePage(language) {
  currentLanguage = language;
  const langData = translations[language];

  // Update page title
  document.title = langData.page_title;

  // Update elements with data-translate attribute
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (langData[key]) {
      el.textContent = langData[key];
    }
  });

  // Update placeholder attributes
  document.querySelectorAll("[data-translate-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-translate-placeholder");
    if (langData[key]) {
      el.placeholder = langData[key];
    }
  });

  // Restart typing animation with translated text
  restartTypeEffect(langData.animated_text);

  // Update active button style
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.id === `lang-${language}`) {
      btn.classList.add("active");
    }
  });
}

document
  .getElementById("lang-en")
  .addEventListener("click", () => translatePage("en"));
document
  .getElementById("lang-or")
  .addEventListener("click", () => translatePage("or"));
document
  .getElementById("lang-hi")
  .addEventListener("click", () => translatePage("hi"));

// --- ANIMATION LOGIC ---
const animatedTextEl = document.getElementById("animated-text");
const speed = 80; // typing speed in ms
let i = 0;
let currentText = "";
let typeTimeout;

function typeEffect() {
  if (i < currentText.length) {
    animatedTextEl.innerHTML += currentText.charAt(i);
    i++;
    typeTimeout = setTimeout(typeEffect, speed);
  }
}

function restartTypeEffect(text) {
  clearTimeout(typeTimeout);
  currentText = text;
  animatedTextEl.innerHTML = "";
  i = 0;
  typeEffect();
}
const API_KEY = "AIzaSyD9n6UXpU1IWa-AVdVqnfeU7QOQVNHyo5o";
async function correctSpelling(text) {
  try {
    if (typeof text !== "string") text = String(text);

    // Strict prompt for health-related corrections
    const prompt = `Check the spelling and grammar of the following text.
Only consider health-related words (medical, wellness, anatomy, symptoms, diseases, treatments, healthcare, medicine, hospitals, etc.).
Return a JSON object with exactly these keys:
- "corrected": the corrected text
- "suggestion": a "Did you mean ..." string for misspelled health words, empty string if no mistakes
Do NOT add any explanations or extra text. Return ONLY valid JSON.

Text: "${text}"`;

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" +
        API_KEY,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (data.candidates && data.candidates.length > 0) {
      const raw = data.candidates[0].content.parts[0].text;
      try {
        const parsed = JSON.parse(raw);
        return {
          corrected: parsed.corrected || text,
          suggestion: parsed.suggestion || "",
        };
      } catch {
        return { corrected: text, suggestion: "" };
      }
    }

    return { corrected: text, suggestion: "" };
  } catch (err) {
    console.error("Gemini API error:", err);
    return { corrected: text, suggestion: "" };
  }
}

async function sendMessage() {
  const input = document.getElementById("chatInput");
  const sendBtn = document.getElementById("sendBtn");
  const chatWindow = document.getElementById("chat-window");

  let text = input.value.trim();
  if (!text) return;

  // ✅ Correct spelling with health-related suggestions
  const { corrected, suggestion } = await correctSpelling(text);
  text = corrected;

  // Remove placeholder if present
  const placeholder = chatWindow.querySelector(".placeholder-msg");
  if (placeholder) placeholder.remove();

  // Disable send button
  sendBtn.disabled = true;
  sendBtn.classList.add("opacity-50", "cursor-not-allowed");

  // Show user message
  const msg = document.createElement("p");
  msg.textContent = translations[currentLanguage].user_prefix + ": " + text;
  msg.className = "text-black";
  chatWindow.appendChild(msg);
  input.value = "";
  chatWindow.scrollTop = chatWindow.scrollHeight;

  // Show suggestion if available
  if (suggestion) {
    const sugMsg = document.createElement("p");
    sugMsg.textContent = suggestion;
    sugMsg.className = "text-orange-600 italic";
    chatWindow.appendChild(sugMsg);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  // ✅ Health-focused bot response
  const botPrompt = `You are a medical/health assistant.
Always assume the user’s input is health-related.
Do not give general dictionary definitions.
Respond concisely and helpfully.

User said: "${text}"`;

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" +
        API_KEY,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: botPrompt }] }],
        }),
      }
    );

    const data = await response.json();

    let botReply = translations[currentLanguage].gemini_no_response;
    if (data.candidates && data.candidates.length > 0) {
      botReply = data.candidates[0].content.parts[0].text;
    } else if (data.error) {
      botReply =
        translations[currentLanguage].error_prefix + " " + data.error.message;
    }

    const botMsg = document.createElement("p");
    botMsg.textContent =
      translations[currentLanguage].bot_prefix + ": " + botReply;
    botMsg.className = "text-purple-700";
    chatWindow.appendChild(botMsg);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  } catch (error) {
    console.error("Gemini API error:", error);
    const errMsg = document.createElement("p");
    errMsg.textContent =
      translations[currentLanguage].error_prefix + " " + error.message;
    errMsg.className = "text-red-500";
    chatWindow.appendChild(errMsg);
  } finally {
    sendBtn.disabled = false;
    sendBtn.classList.remove("opacity-50", "cursor-not-allowed");
  }
}

function startMic() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert(translations[currentLanguage].mic_unsupported); // Translated alert
    return;
  }

  const recognition = new SpeechRecognition();
  // Set recognition language based on current selection
  recognition.lang = { en: "en-US", or: "or-IN", hi: "hi-IN" }[currentLanguage];
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onstart = () => console.log("🎤 Voice recognition started...");
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById("chatInput").value += transcript;
  };
  recognition.onerror = (event) =>
    console.error("Speech recognition error:", event.error);
  recognition.onend = () => console.log("🎤 Voice recognition ended.");
}

document
  .getElementById("chatInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  });

// Start with default language on page load
window.onload = () => {
  translatePage("en");
};

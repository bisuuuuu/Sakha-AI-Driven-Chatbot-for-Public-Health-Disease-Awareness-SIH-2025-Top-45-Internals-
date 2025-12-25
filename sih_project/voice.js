// DOM Elements
  const micButton = document.querySelector("#micBtn");
  const chatBox = document.getElementById("chatBox");
  const muteButton = document.getElementById("muteBtn");

  let isMuted = false;
  let currentSpeech = null; // track the current utterance

  // Gemini API Config
  const GEMINI_API_KEY = "AIzaSyD9n6UXpU1IWa-AVdVqnfeU7QOQVNHyo5o"; // replace with your Gemini API key
  const GEMINI_API_URL =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";

  // 🔇 Mute/Unmute Toggle
  muteButton.addEventListener("click", () => {
    isMuted = !isMuted;
    muteButton.textContent = isMuted ? "🔇" : "🔊";
    if (isMuted) {
      window.speechSynthesis.cancel(); // stop ongoing speech
      currentSpeech = null; // clear reference
    }
  });

  // 🎤 Speech Recognition Setup
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  let recognition;
  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    micButton.addEventListener("click", () => {
      recognition.start();
    });

    recognition.onresult = async (event) => {
      const transcript = event.results[0][0].transcript;
      addMessage("user", transcript);

      const reply = await getGeminiResponse(transcript);
      addMessage("bot", reply);

      if (!isMuted) {
        speakText(reply);
      }
    };
  }

  // 🤖 Call Gemini API
  async function getGeminiResponse(text) {
    try {
      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text }] }] }),
      });

      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
    } catch (error) {
      console.error("Error fetching Gemini response:", error);
      return "Sorry, I couldn't process that.";
    }
  }

  // ✅ Function to append messages
  function addMessage(sender, text) {
    const msg = document.createElement("div");
    msg.classList.add("mb-2", "p-2", "rounded-lg", "max-w-[80%]");

    if (sender === "user") {
      msg.classList.add("bg-purple-600", "ml-auto", "text-white");
      msg.innerText = "🧑 " + text;
    } else if (sender === "bot") {
      msg.classList.add("bg-gray-700", "text-gray-100");
      msg.innerText = "🤖 " + text;
    } else {
      msg.classList.add("text-gray-400", "text-sm", "italic");
      msg.innerText = text;
    }

    // Insert above mute button so it stays at top-right
    chatBox.insertBefore(msg, muteButton);
    chatBox.scrollTop = chatBox.scrollHeight; // auto scroll
  }

  // 🔊 Speak text
  let availableVoices = [];
  window.speechSynthesis.onvoiceschanged = () => {
    availableVoices = window.speechSynthesis.getVoices();
  };

  function speakText(text) {
    if (isMuted) return; // don’t start speaking if muted

    currentSpeech = new SpeechSynthesisUtterance(text);
    currentSpeech.lang = "en-US";
    currentSpeech.rate = 1;
    currentSpeech.pitch = 1;

    // choose female voice if available
    const femaleVoice = availableVoices.find((v) =>
      v.name.toLowerCase().includes("female") ||
      v.name.toLowerCase().includes("woman") ||
      v.name.toLowerCase().includes("zira") || // Windows
      v.name.toLowerCase().includes("samantha") || // macOS
      v.name.toLowerCase().includes("google us english")
    );

    if (femaleVoice) {
      currentSpeech.voice = femaleVoice;
    } else if (availableVoices.length > 0) {
      currentSpeech.voice = availableVoices[0];
    }

    window.speechSynthesis.speak(currentSpeech);
  }
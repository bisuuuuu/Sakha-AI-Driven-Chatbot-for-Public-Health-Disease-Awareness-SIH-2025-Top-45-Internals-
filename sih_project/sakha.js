// sakha.js
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("close-modal");

  // Close modal
  if (closeModal && modal) {
    closeModal.addEventListener("click", () => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    });

    // Also close when clicking outside modal content
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }
    });
  }

  // --------------------------
  // VOICE SEARCH FEATURE
  // --------------------------
  const chatCircle = document.querySelector(".chat-circle"); // sphere div
  const conversationBox = document.querySelector(".chatbot-conversation"); // box to display text

  if (chatCircle && conversationBox) {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = "en-IN"; // default, can switch dynamically if needed

      chatCircle.addEventListener("click", () => {
        recognition.start();
      });
    }
  }

  // Apply stored language on page load
  applyTranslations(getLanguage());
});

// --------------------------
// LANGUAGE HANDLING
// --------------------------
function getLanguage() {
  return localStorage.getItem("lang") || "en";
}

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  applyTranslations(lang);
}

// Helper function: capitalize first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Apply translations dynamically
function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  // Main navigation and chat
  const navIds = [
    ["chat-text", "textchat"],
    ["outbreak-text", "outbreak"],
    ["vaccine-text", "vaccine"],
    ["imgdet-text", "imgdet"],
    ["myth-text", "myth"],
    ["nearby-text", "nearbyHospitals"],
    ["doctorlive-text", "doctorlive"],
    ["quiz-text", "quiz"],
    ["weather-text", "weather"],
    ["dailyNews-text", "dailyNews"],
    ["emergency-text", "emergency"],
    ["title", "title"],
    ["chatTitle", "chatTitle"],
    ["chatDescription", "chatDescription"],
    ["chatPlaceholder", "chatPlaceholder"],
    ["commonDiseases", "commonDiseases"],
    ["logout", "logout"],
  ];

  navIds.forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) {
      if (id === "inputPlaceholder") {
        el.placeholder = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Disease cards
  document.querySelectorAll(".disease-card").forEach((card) => {
    const diseaseName = card.dataset.disease; // e.g., 'fever'
    const diseaseKey = `disease${capitalize(diseaseName)}`;
    const descKey = `desc${capitalize(diseaseName)}`;
    const youtubeKey = `youtube${capitalize(diseaseName)}`;

    // Update normal content
    const titleEl = card.querySelector(".text-xl");
    if (titleEl) titleEl.textContent = t[diseaseKey];

    const knowMoreEl = card.querySelector(".text-sm.mt-3");
    if (knowMoreEl) knowMoreEl.textContent = t.knowMore;

    const linkEl = card.querySelector("a");
    if (linkEl) {
      linkEl.textContent = t.watchOnYouTube;
      linkEl.href = t[youtubeKey]; // LANGUAGE-SPECIFIC YouTube LINK
      linkEl.target = "_blank";
    }

    // Update hover content
    const hoverTitle = card.querySelector(".absolute.inset-0 h3");
    const hoverDesc = card.querySelector(".absolute.inset-0 p");
    if (hoverTitle && hoverDesc) {
      hoverTitle.textContent = t[diseaseKey];
      hoverDesc.textContent = t[descKey];
    }
  });

  // Top Right and Footer
  const topFooterIds = [
    ["welcome-text", "welcome"],
    ["logout-text", "logout"],
    ["footer-text", "footer"],
  ];
  topFooterIds.forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = t[key];
  });
}

// --------------------------
// LANGUAGE BUTTONS
// --------------------------
["en", "or", "hi"].forEach((lang) => {
  const btn = document.getElementById(`lang-${lang}`);
  if (btn) {
    btn.addEventListener("click", () => setLanguage(lang));
  }
});

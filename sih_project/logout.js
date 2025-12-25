// Import Firebase SDK (from CDN)
import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// ✅ Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCC1EZ1IxtEmsMsCSPh8oQZ0MiGF04_UdY",
  authDomain: "sakha-56ff5.firebaseapp.com",
  projectId: "sakha-56ff5",
  storageBucket: "sakha-56ff5.appspot.com",
  messagingSenderId: "748197365569",
  appId: "1:748197365569:web:8c11fde9474b179602c3c0",
  measurementId: "G-MBGX60H94S"
};

// ✅ Initialize Firebase only once
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");
  if (!logoutBtn) {
    console.error("❌ Logout button not found in DOM");
    return;
  }

  logoutBtn.addEventListener("click", () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("username"); 
        window.location.href = "login.html";
      })
      .catch((err) => alert("Logout failed: " + err.message));
  });
});

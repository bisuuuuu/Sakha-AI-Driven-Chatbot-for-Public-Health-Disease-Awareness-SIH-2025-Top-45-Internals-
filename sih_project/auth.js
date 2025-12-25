// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { 
  getAuth, GoogleAuthProvider, signInWithPopup, signOut,
  setPersistence, browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Config
const firebaseConfig = {
  apiKey: "AIzaSyCC1EZ1IxtEmsMsCSPh8oQZ0MiGF04_UdY",
  authDomain: "sakha-56ff5.firebaseapp.com",
  projectId: "sakha-56ff5",
  storageBucket: "sakha-56ff5.appspot.com",
  messagingSenderId: "748197365569",
  appId: "1:748197365569:web:8c11fde9474b179602c3c0",
  measurementId: "G-MBGX60H94S"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence);

// Always sign out to force fresh login
if (window.location.pathname.includes("login.html")) {
  signOut(auth).catch(console.error);
}

// Google login
const googleProvider = new GoogleAuthProvider();
document.getElementById("googleLogin").addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    localStorage.setItem("username", result.user.displayName || result.user.email);
    window.location.href = "main.html";
  } catch (err) {
    alert("Google login failed: " + err.message);
  }
});

// Bypass normal login
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.querySelector("input[type='email']").value;
  localStorage.setItem("username", email || "GuestUser");
  window.location.href = "main.html";
});

// Bypass register
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.querySelector("input[type='email']").value;
  localStorage.setItem("username", email || "NewUser");
  window.location.href = "main.html";
});

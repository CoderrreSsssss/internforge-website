import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAoMQBHlO5KwJvGzeHUY5niB2BPQ6S51J0",
  authDomain: "internforge-414f4.firebaseapp.com",
  projectId: "internforge-414f4",
  storageBucket: "internforge-414f4.firebasestorage.app",
  messagingSenderId: "331442554127",
  appId: "1:331442554127:web:413a1813a6bc9b60c0aa7a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

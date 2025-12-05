import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase config tumhara hi hai
const firebaseConfig = {
  apiKey: "AIzaSyD2eH3fkKP4tA1BbOsLykisPljnQnvMgEc",
  authDomain: "coderhub-98e34.firebaseapp.com",
  projectId: "coderhub-98e34",
  storageBucket: "coderhub-98e34.firebasestorage.app",
  messagingSenderId: "231382163167",
  appId: "1:231382163167:web:372019099a7715ef9c936a",
  measurementId: "G-W7BREX8HP7"
};

const app = initializeApp(firebaseConfig);

// ✅ Realtime Database connect
export const db = getDatabase(app);

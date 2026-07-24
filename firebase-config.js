// استدعاء مكتبات فايربيس الخاصة بالويب
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// إعدادات مشروعك الحقيقية (اللي نسختها أنت)
const firebaseConfig = {
  apiKey: "AIzaSyAK2yXStkDdOLHpsjhbk10HfVj3O2wvMvE",
  authDomain: "xc-f6b4d.firebaseapp.com",
  projectId: "xc-f6b4d",
  storageBucket: "xc-f6b4d.firebasestorage.app",
  messagingSenderId: "263052117008",
  appId: "1:263052117008:web:5550fee290a53943be7695",
  measurementId: "G-5DDJFDDTQY"
};

// تشغيل فايربيس وقاعدة البيانات ومخزن الصور
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

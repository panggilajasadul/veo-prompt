// Ganti dengan config milikmu dari Firebase Console
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg7-tRgskx_fU3E21sMsddVW3yG5Gf_gw",
  authDomain: "veo-prompt-firebase.firebaseapp.com",
  projectId: "veo-prompt-firebase",
  storageBucket: "veo-prompt-firebase.firebasestorage.app",
  messagingSenderId: "12777694035",
  appId: "1:12777694035:web:a041c16502822f9f7a37a6",
  measurementId: "G-NHCLXE5ZBH"
};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

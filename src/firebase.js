import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQX8NN9GaWaGNMoGVo_vxlYf5c8-JCaFA",
  authDomain: "auth-react-b4849.firebaseapp.com",
  projectId: "auth-react-b4849",
  storageBucket: "auth-react-b4849.appspot.com",
  messagingSenderId: "976956585014",
  appId: "1:976956585014:web:ad51277dd8495984e8d497",
  measurementId: "G-64MGF5X74M",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

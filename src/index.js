import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAp-ZQc1SDt8RgvoxHxD1j-FhdMqMRlxvU",
  authDomain: "autoestimeitor.firebaseapp.com",
  projectId: "autoestimeitor",
  storageBucket: "autoestimeitor.appspot.com",
  messagingSenderId: "330285980683",
  appId: "1:330285980683:web:ce1ed8ccf5079d63017b0e",
  measurementId: "G-34X9H9QCNQ",
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

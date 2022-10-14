import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.12.0/firebase-auth.js";
import { firebaseConfig } from "./http.js";

firebaseConfig;
// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
// login user logic
const loginEmail = document.querySelector("#form2Example17");
const loginpasssword = document.querySelector("#form2Example27");
const login = document.querySelector(".login");
console.log(login);
const loginHandler = (e) => {
  e.preventDefault();
  const loginDetails = {
    email: loginEmail.value,
    password: loginpasssword.value,
  };
  signInWithEmailAndPassword(auth, loginDetails.email, loginDetails.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user.email);
      window.location.href="landing.html";  
    })
    .catch((error) => {
      alert("something went wrong please try again");
    });
};
login.addEventListener("click", loginHandler);

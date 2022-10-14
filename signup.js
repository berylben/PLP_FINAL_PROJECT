import {
    getDatabase,
    set,
    ref,
  } from "https://www.gstatic.com/firebasejs/9.12.0/firebase-database.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.0/firebase-app.js";
  
  import {
    getAuth,
    createUserWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/9.12.0/firebase-auth.js";
  import { firebaseConfig } from "./http.js";
  
  firebaseConfig;
  
  // Initialize Firebase
  initializeApp(firebaseConfig);
  
  const db = getDatabase();
  const auth = getAuth();
  
  const username = document.querySelector("#username");
  const password = document.querySelector("#password");
  const email = document.querySelector("#email");
  const phoneNumber = document.querySelector("#phone-number");
  const birthDate = document.querySelector("#birth-date");
  
  const modal = document.querySelector(".modal");
  const okayBtn = document.querySelector(".okay-btn");
  const submit = document.querySelector(".submit");
  console.log('test data')
  
  const validation = () => {
    const userNameIsValid = username.value.length > 0 && isNaN(username.value);
    const passwordIsValid = password.value.length > 8;
    const emailIsValid = email.value.length > 0 && isNaN(username.value);
    const phoneNumberIsValid =
      phoneNumber.value.length > 0 && !isNaN(phoneNumber.value);
    const birthDateIsValid = birthDate.value.length > 0 && isNaN(birthDate.value);
  
    if (!userNameIsValid) {
      username.style.borderColor = "#dc3545";
      return false;
    } else {
      username.style.borderColor = "#ced4da";
    }
    if (!passwordIsValid) {
      password.style.borderColor = "#dc3545";
      return false;
    } else {
      password.style.borderColor = "#ced4da";
    }
    if (!emailIsValid) {
      email.style.borderColor = "#dc3545";
      return false;
    } else {
      email.style.borderColor = "#ced4da";
    }
    if (!phoneNumberIsValid) {
      phoneNumber.style.borderColor = "#dc3545";
      return false;
    } else {
      phoneNumber.style.borderColor = "#ced4da";
    }
    if (!birthDateIsValid) {
      birthDate.style.borderColor = "#dc3545";
      return false;
    } else {
      birthDate.style.borderColor = "#ced4da";
    }
    return true;
  };
  
  const submitHandler = (e) => {
    e.preventDefault();
    // Persons Object
    const person = {
      userName: username.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
      birthDate: birthDate.value,
    };
    console.log(person)
    if (validation()) {
      // Enter user in the database
      set(ref(db, "personsData/" + `${new Date()} `), person)
        .then(() => {
          modal.classList.remove("hidden");
        })
        .catch((error) => console.log(error));
      // create user
      createUserWithEmailAndPassword(auth, person.email, person.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user.email);
        })
        .catch((error) => {
          if (error.code === 400) {
            alert("something went wrong please try again");
          }
        });
    }
  };
  
  const okayBtnHandler = () => {
    modal.classList.add("hidden");
    username.value = email.value = phoneNumber.value = birthDate.value = "";
  };
  
  submit.addEventListener("submit", submitHandler);
  okayBtn.addEventListener("click", okayBtnHandler);
  
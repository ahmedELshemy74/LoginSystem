// All Variables
let loginForm = document.getElementById("loginForm");
let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassword");
let loginAlert = document.getElementById("loginAlert");
let loginSuccessAlert = document.getElementById("loginSuccessAlert");

let allUsers = [];
// All Variables

if (localStorage.getItem("allUsers"))
  allUsers = JSON.parse(localStorage.getItem("allUsers"));

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  login();
});

function login() {
  let userData = {
    email: loginEmail.value,
    password: loginPassword.value,
  };

  if (isLoginValid(userData) == true) {
    loginSuccessAlert.classList.replace("d-none", "d-block");
    loginAlert.classList.replace("d-block", "d-none");
    setTimeout(function () {
      window.location.href = "../welcome/welcome.html";
    }, 1500);
  } else {
    loginAlert.classList.replace("d-none", "d-block");
    loginSuccessAlert.classList.replace("d-block", "d-none");
  }
}

function isLoginValid(userData) {
  for (let i = 0; i < allUsers.length; i++) {
    if (
      allUsers[i].email.toLowerCase() == userData.email.toLowerCase() &&
      allUsers[i].password.toLowerCase() == userData.password.toLowerCase()
    ) {
      localStorage.setItem("userName", allUsers[i].name);
      return true;
    }
  }
}

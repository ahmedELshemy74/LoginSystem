// All variables
let registerForm = document.getElementById("registerForm");
let signupName = document.getElementById("signupName");
let signupEmail = document.getElementById("signupEmail");
let signupPassword = document.getElementById("signupPassword");
let nameAlert = document.getElementById("nameAlert");
let emailAlert = document.getElementById("emailAlert");
let passwordAlert = document.getElementById("passwordAlert");
let existAlert = document.getElementById("existAlert");
let successAlert = document.getElementById("successAlert");
let allUsers = [];
// All variables

if (localStorage.getItem("allUsers"))
  allUsers = JSON.parse(localStorage.getItem("allUsers"));

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (checkAllInputsAreValid()) {
    addUser();
  }
});

function addUser() {
  let newUser = {
    name: signupName.value,
    email: signupEmail.value,
    password: signupPassword.value,
  };
  if (isExist(newUser) == true) {
    successAlert.classList.replace("d-block", "d-none");
    existAlert.classList.replace("d-none", "d-block");
  } else {
    existAlert.classList.replace("d-block", "d-none");
    successAlert.classList.replace("d-none", "d-block");
    allUsers.push(newUser);
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
    setTimeout(function () {
      window.location.href = "sign in/signIn.html";
    }, 1500);
  }
}

function isExist(newUser) {
  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].email.toLowerCase() == newUser.email.toLowerCase()) {
      return true;
    }
  }
}

function validateAllInputs(regex, element, alertMsg) {
  let pattern = regex;
  if (pattern.test(element.value) == true) {
    alertMsg.classList.replace("d-block", "d-none");
    return true;
  } else {
    alertMsg.classList.replace("d-none", "d-block");
    return false;
  }
}

function checkAllInputsAreValid() {
  if (
    validateAllInputs(/^[a-zA-Z]{2,}$/, signupName, nameAlert) &&
    validateAllInputs(
      /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/,
      signupEmail,
      emailAlert
    ) &&
    validateAllInputs(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.{8,}).*$/,
      signupPassword,
      passwordAlert
    )
  ) {
    return true;
  } else {
    return false;
  }
}

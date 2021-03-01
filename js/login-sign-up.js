const signUpButton = document.getElementById("signUp");

const signInButton = document.getElementById("signIn");

const container = document.getElementById("container");

signUpButton.addEventListener("click", () =>
  container.classList.add("right-panel-active")
);

signInButton.addEventListener("click", () =>
  container.classList.remove("right-panel-active")
);

//FORM VALIDATION

//*sign-up form*
const signInForm = document.querySelector("#sign-up-form");
const nameInput = document.querySelector("#sign-up-name");
const emailInput = document.querySelector("#sign-up-email");
const passInput = document.querySelector("#sign-up-password");
let msg = document.querySelector(".msg");

signInForm.addEventListener("submit", onSignUp);

function onSignUp(e) {
  e.preventDefault();

  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    passInput.value === ""
  ) {
    msg.classList.add("error");
    msg.innerHTML = "Please fill in all the fields.";

    setTimeout(() => msg.remove(), 3000);
  } else {
    nameInput = "";
    emailInput = "";
    passInput = "";
  }
}
//*sign-in form
const signUpForm = document.querySelector("#sign-in-form");
const sIemail = document.querySelector("#sign-in-email");
const sIpassword = document.querySelector("#sign-in-password");
let msG = document.querySelector(".msG");

signUpForm.addEventListener("submit", onSignIn);

function onSignIn(e) {
  e.preventDefault();

  if (sIemail.value === "" || sIpassword.value === "") {
    msG.classList.add("error");
    msG.innerHTML = "Please fill in all the fields.";

    setTimeout(() => msG.remove(), 3000);
  } else if (
    sIemail.value === "admin@onlinechama.com" &&
    sIpassword.value === "Admin1000"
  ) {
    return (window.location.href = "admin_views/index.html");
  }
}

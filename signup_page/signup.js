function validateForm() {
  var username = document.getElementById("username").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value.trim();
  var confirmPass = document.getElementById("confirmPass").value.trim();

  var usernameError = document.getElementById("usernameError");
  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("passwordError");
  var confirmPassError = document.getElementById("confirmPassError");

  usernameError.innerHTML = "";
  emailError.innerHTML = "";
  passwordError.innerHTML = "";
  confirmPassError.innerHTML = "";

  var isValid = true;

  if (username === "") {
    usernameError.innerHTML = "Username is required";
    isValid = false;
  }

  if (email === "") {
    emailError.innerHTML = "Email is required";
    isValid = false;
  } else if (!isValidEmail(email)) {
    emailError.innerHTML = "Invalid email address";
    isValid = false;
  }

  if (password === "") {
    passwordError.innerHTML = "Password is required";
    isValid = false;
  }

  if (confirmPass === "") {
    confirmPassError.innerHTML = "Please confirm password";
    isValid = false;
  } else if (confirmPass !== password) {
    confirmPassError.innerHTML = "Passwords do not match";
    isValid = false;
  }

  return isValid;
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

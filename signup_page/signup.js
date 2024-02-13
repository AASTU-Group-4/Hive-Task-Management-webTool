function validateForm() {
  // Retrieve form elements
  var username = document.getElementById("username");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var confirmPass = document.getElementById("confirmPass");

  // Retrieve error message elements
  var usernameError = document.getElementById("usernameError");
  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("passwordError");
  var confirmPassError = document.getElementById("confirmPassError");

  // Reset error messages
  usernameError.innerHTML = "";
  emailError.innerHTML = "";
  passwordError.innerHTML = "";
  confirmPassError.innerHTML = "";

  // Validate username
  if (username.value.trim() === "") {
    usernameError.innerHTML = "Username is required";
    return false;
  }

  // Validate email
  if (email.value.trim() === "") {
    emailError.innerHTML = "Email is required";
    return false;
  }

  // Validate password
  if (password.value.trim() === "") {
    passwordError.innerHTML = "Password is required";
    return false;
  }

  // Validate confirm password
  if (confirmPass.value.trim() === "") {
    confirmPassError.innerHTML = "Confirm password is required";
    return false;
  }

  // Check if password matches confirm password
  if (password.value.trim() !== confirmPass.value.trim()) {
    confirmPassError.innerHTML = "Passwords do not match";
    return false;
  }

  // If form is valid, navigate to the next page
  window.location.href = "signup2.html";
  return false; // Prevent form submission
}
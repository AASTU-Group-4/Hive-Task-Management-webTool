function validateForm() {
  document.getElementById("phoneError").textContent = "";
  document.getElementById("birthDateError").textContent = "";
  document.getElementById("genderError").textContent = "";

  var phoneInput = document.getElementById("phone").value;
  var birthDateInput = document.getElementById("birth-date").value;
  var genderInputs = document.querySelectorAll('input[name="gender"]');

  if (!phoneInput.match(/^\d{10}$/)) {
    document.getElementById("phoneError").textContent =
      "Please enter a valid phone number (10 digits).";
    return false;
  }

  if (!birthDateInput) {
    document.getElementById("birthDateError").textContent =
      "Please enter your birth date.";
    return false;
  }

  var genderSelected = false;
  genderInputs.forEach(function (input) {
    if (input.checked) {
      genderSelected = true;
    }
  });
  if (!genderSelected) {
    document.getElementById("genderError").textContent =
      "Please select your gender.";
    return false;
  }


  window.location.href = "signup3.html";
  return false;
}
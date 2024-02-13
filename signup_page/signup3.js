function validateForm() {
  document.getElementById("universityError").textContent = "";
  document.getElementById("fieldError").textContent = "";

  var universityInput = document.getElementById("university").value;
  var fieldInput = document.getElementById("field").value;

  if (!universityInput) {
    document.getElementById("universityError").textContent =
      "Please enter your university.";
    return false;
  }

  if (fieldInput === " ") {
    document.getElementById("fieldError").textContent =
      "Please select your field.";
    return false;
  }

  alert("Sign up successful! Click OK to continue to the main page");
  window.location.href = "../Main_Page/main_page.html";
  return false;
}
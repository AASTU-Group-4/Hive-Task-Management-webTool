function validateForm() {
    var university = document.getElementById("university").value.trim();
    var field = document.getElementById("field").value;
  
    var universityError = document.getElementById("universityError");
    var fieldError = document.getElementById("fieldError");
  
    universityError.innerHTML = "";
    fieldError.innerHTML = "";
  
    var isValid = true;
  
    if (university === "") {
      universityError.innerHTML = "University is required";
      isValid = false;
    }
  
    if (field === " ") {
      fieldError.innerHTML = "Please select your field";
      isValid = false;
    }
  
    return isValid;
  }
  
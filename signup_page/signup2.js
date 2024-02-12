function validateForm() {
    var phone = document.getElementById("phone").value.trim();
    var birthDate = document.getElementById("birth-date").value.trim();
    var gender1 = document.getElementById("gender1");
    var gender2 = document.getElementById("gender2");
    var gender3 = document.getElementById("gender3");
  
    var phoneError = document.getElementById("phoneError");
    var birthDateError = document.getElementById("birthDateError");
    var genderError = document.getElementById("genderError");
  
    phoneError.innerHTML = "";
    birthDateError.innerHTML = "";
    genderError.innerHTML = "";
  
    var isValid = true;
  
    if (phone === "") {
      phoneError.innerHTML = "Phone number is required";
      isValid = false;
    }
  
    if (birthDate === "") {
      birthDateError.innerHTML = "Birth date is required";
      isValid = false;
    }
  
    if (!gender1.checked && !gender2.checked && !gender3.checked) {
      genderError.innerHTML = "Please select your gender";
      isValid = false;
    }
  
    return isValid;
  }
  
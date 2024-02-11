window.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("form");
    form.addEventListener("submit", resetPassword);
  });
  
  function resetPassword(event) {
    event.preventDefault(); 
  
    var email = document.getElementById("email").value;
  
    if (email === "") {
      document.getElementById("text").style.color="red"
      document.getElementById("text").innerHTML="Please enter your email"
      return false;
    }
    window.location.href="reset.html"
    return true;
  }
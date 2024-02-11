
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "" || password === "") {
      
      enter();
      return false;
    }
    
    // Demo username and password for validation
    var demousername = "demo123";
    var demoPassword = "password123";
  
    if (username === demousername && password === demoPassword) {
      turnblack();
      return true;
    }
     else {
       turnred();
       return false;
    }
  }
  
  document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault(); 
    validateForm();
  });

  function enter(){
    document.getElementById("text").style.color="red"
    document.getElementById("text").innerHTML="Please enter both username and password"
    document.getElementById("userlabel").style.color="black"
    document.getElementById("passwordlabel").style.color="black"
   
  }
  function turnred(){
    document.getElementById("text").style.color="red"
    document.getElementById("text").innerHTML="Invalid username or password!"
    document.getElementById("userlabel").style.color="red"
    document.getElementById("passwordlabel").style.color="red"
  }
  function turnblack(){
    document.getElementById("text").style.color="green"
    document.getElementById("text").innerHTML="Login successful!"
    document.getElementById("userlabel").style.color="black"
    document.getElementById("passwordlabel").style.color="black"

  }
  
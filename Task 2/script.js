let username = document.querySelector("#uname");
let email = document.querySelector("#email");
let password = document.querySelector("#psw");
let fileUpload = document.querySelector("#fileUpload");



function signUp() {
  validateForm();
}
function validateForm() {
  var eError = document.getElementById("eError");
  var uError = document.getElementById("uError");
  var pError = document.getElementById("pError");
  var fError = document.getElementById("fError");
  var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (email.value == "" || email.value == null) {
    eError.innerHTML = "email is required";
    eError.style.color = "#FF0000"
  }
  else if (email.value.match(mailformat)) {
    eError.innerHTML = "Email is valid";
    eError.style.color = "#008000"
  }
  else{
    eError.innerHTML = "*Email is not valid";
    eError.style.color = "#FF0000"
  }

  if (username.value == "" || username.value == null) {
    uError.innerHTML = "*Username is required";
    uError.style.color = "#FF0000"
  }
  else{
    uError.innerHTML = "";
    uError.style.color = "#008000"
  }
  
  if (password.value == "" || password.value == null) {
    pError.innerHTML = "*Password is required";
    pError.style.color = "#FF0000"
  }
  else{
    pError.innerHTML = "";
    pError.style.color = "#008000"
  }  

  if (fileUpload.value == "") {
    fError.innerHTML = "*Image is not selected";
    fError.style.color = "#FF0000"
  }
  else{
    fError.innerHTML = "";
    fError.style.color = "#008000"
  }


  
}




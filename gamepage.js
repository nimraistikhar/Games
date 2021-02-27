/* **************  LOGIN   **************** */

var modal = document.getElementById("loginModal");
var btnlogin = document.getElementById("login");

btnlogin.onclick = function() {
  modal.style.display = "block";
}

/* **************  SIGNUP   **************** */

var modalsign = document.getElementById("signupModal");
var btnsignup = document.getElementById("signup");

btnsignup.onclick = function() {
    modalsign.style.display = "block";
}

/* **************  CONDITION   **************** */

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }else 
  if (event.target == modalsign) {
    modalsign.style.display = "none";
  }
}  
/* **************  LOGIN   **************** */

var modal = document.getElementById("loginModal");
var btnlogin = document.getElementById("login");

btnlogin.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

/* **************  TOGGLE   **************** */

function myFunction1() {
  var x = document.getElementById("toggle1");
  var y = document.getElementById("btn1");
  if ( y.innerHTML === "hide" || x.style.display === "none") {
    y.innerHTML = "show";
    x.style.display = "block";
  } else {
    y.innerHTML = "hide";
    x.style.display = "none";
  }
}

function myFunction2() {
  var x = document.getElementById("toggle2");
  var z = document.getElementById("btn2");
  if ( z.innerHTML === "hide" || x.style.display === "none") {
    z.innerHTML = "show";
    x.style.display = "block";
  } else {
    z.innerHTML = "hide";
    x.style.display = "none";
  }
}


function myFunction3() {
  var a = document.getElementById("flag__popup")
  if (a.style.display === "none") {
    a.style.display = "block"
  } else {
    a.style.display = "none"
  }
}
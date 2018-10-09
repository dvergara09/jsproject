
/**funcion modal login**/
var modal = document.getElementById('login');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/**Funcion login**/
var intentos = 3;
// Cantidad de intentoss.
// Funcion que hace la validacion del formulario
function validarlogin(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if ( username == "Dvergara9" && password == "web2018"){
    alert ("Login successfully");
      window.location = "home.html"; // Me envia a otra pestaña
      return false;
  }else{
    intentos --; //intentos disminuyen
    alert("Le quedan "+intentos+" intentos;");
    // Se bloquea formulario
    if( intentos == 0){
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}

/**Funcion navbar**/
function menuResponsive() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
/**Funcion imagenes aleatorias**/
function imagenesAleatorias() {
  var vecIma = new Array("img/1.png","img/2.png","img/3.png","img/4.png","img/5.png","img/6.png","img/7.png","img/8.png","img/9.png","img/10.png");
  var vec = [];

  document.write("<h2 align='center'> Ejercicio 2 </h2>")
  document.write("<p align='center'> Vector con valores imagenes aleatorios </p>")
  document.write("<table border='1px' align='center'><tr>");
  for(i = 0; i < 4; i++) {
      var vi = Math.floor(Math.random() * 9 + 1);
      if(vec.indexOf(vi) >= 0){
          i--;
      }else {
          vec[i] = vi;
      document.write("<td><img src='" + vecIma[vi] + "' width='200px' heigth='200px'></td>");
      }
  }
  document.write("</tr></table>");
  document.write("<br><center><a href='javascript:history.go(-1)' >Atras</a> </center>");;
}


window.onscroll = function() {barraProgreso()};

function barraProgreso() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progreso").style.width = scrolled + "%";
}

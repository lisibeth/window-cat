let cuadro1 = document.getElementById("cuadro1");
let cuadro2 = document.getElementById("cuadro2");
let cuadro3 = document.getElementById("cuadro3");
let cuadro4 = document.getElementById("cuadro4");
let pared = document.getElementById("fondo");
let estrella1 = document.getElementById("estrella1");
let estrella2 = document.getElementById("estrella2");
let estrella3 = document.getElementById("estrella3");
let estrella4 = document.getElementById("estrella4");
let estrella5 = document.getElementById("estrella5");
let estrella6 = document.getElementById("estrella6");
let estrella7 = document.getElementById("estrella7");
let estrella8 = document.getElementById("estrella8");
let estrella9 = document.getElementById("estrella9");
let estrella10 = document.getElementById("estrella10");
let estrella11 = document.getElementById("estrella11");
let estrella12 = document.getElementById("estrella12");
let estrella13 = document.getElementById("estrella13");




let button_noche = document.getElementById("boton_noche");

let luna1 = document.getElementById("luna1");
let luna2 = document.getElementById("luna2");

let button_luna = document.getElementById("boton_luna");


let estrellafugaz = document.getElementById("estrellafugaz");

let button_fugaz = document.getElementById("boton_deseo");

let button_estrellas = document.getElementById("boton_estrellas");

let sol = document.getElementById("sol");
let sol2 = document.getElementById("sol2");

let cuerpo_de_gato = document.getElementById("cuerpo-gato1");

let cabeza_de_gato = document.getElementById("cabeza-gato1");

let luz = document.getElementById("luz");
let lampara2 = document.getElementById("lampara2");


window.onload = function(){
  button_luna.style.display = "none";
  luna1.style.display = "none";
  luna2.style.display = "none";
  button_estrellas.style.display = "none";
  button_fugaz.style.display = "none";
  luz.style.display = "none";
  lampara2.style.borderColor = "white";
  estrella1.style.display = "none";
  estrella2.style.display = "none";
  estrella3.style.display = "none";
  estrella4.style.display = "none";
  estrella5.style.display = "none";
  estrella6.style.display = "none";
  estrella7.style.display = "none";
  estrella8.style.display = "none";
  estrella9.style.display = "none";
  estrella10.style.display = "none";
  estrella11.style.display = "none";
  estrella12.style.display = "none";
  estrella13.style.display = "none";
  
  estrellafugaz.style.display = "none";
}


button_noche.onclick = function() {
  cuadro1.style.backgroundColor = "var(--night)";
  cuadro2.style.backgroundColor = "var(--night)";
  cuadro3.style.backgroundColor = "var(--night)";
  cuadro4.style.backgroundColor = "var(--night)";
  button_luna.style.display = "block";
  button_noche.style.display  = "none";
  sol.style.display = "none";
  sol2.style.display = "none";
  lampara2.style.borderColor = "yellow";
  luz.style.display = "block";
 
  estrellafugaz.style.display = "none";
                      
}

button_luna.onclick = function(){
  luna1.style.display = "block";
  luna2.style.display = "block";
  button_estrellas.style.display = "block";
  button_luna.style.display = "none";          
  cuerpo_de_gato.style.boxShadow = "0px 0px 30px #fff";
 
}


button_estrellas.onclick = function(){
  estrella1.style.display = "block";
  estrella2.style.display = "block";
  estrella3.style.display = "block";
  estrella4.style.display = "block";
  estrella5.style.display = "block";
  estrella6.style.display = "block";
  estrella7.style.display = "block";
  estrella8.style.display = "block";
  estrella9.style.display = "block";
  estrella10.style.display = "block";
  estrella11.style.display = "block";
  estrella12.style.display = "block";
  estrella13.style.display = "block";
 
  button_fugaz.style.display = "block";
  button_estrellas.style.display = "none";

}

button_fugaz.onclick = function() {
 
  button_estrellas.style.display = "none";
  estrellafugaz.style.display = "block";
  setTimeout(desactivarEstrella, 3000);
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  const red = getRandomInt(0, 255);
  const green = getRandomInt(0, 255);
  const blue = getRandomInt(0, 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

const stars = document.querySelectorAll("li");

function colorStar() {
  const chosen = stars[getRandomInt(0, stars.length - 1)];
  chosen.style.backgroundColor = getRandomColor();
}

setInterval(colorStar, 20);

function desactivarEstrella (){
    estrellafugaz.style.display = "none";
  }

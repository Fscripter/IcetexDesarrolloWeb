let titulo = document.getElementById("titulo");

titulo.innerHTML = "Titulo #1 Desde Js";
titulo.style.background = "red";

//Etiqueta es -> p
let parrafo = document.createElement("p");
let texto = "texto #1";

parrafo.innerHTML = texto;

titulo.appendChild(parrafo);

texto = "texto #2";
parrafo.innerHTML = texto;

function cambiarTexto(mensaje) {
  texto = mensaje;
  parrafo.innerHTML = texto;
}

texto = "texto #3";
cambiarTexto("texto #4");

let botonConsignar = document.createElement("button");

botonConsignar.innerHTML = "Click para consignar $10";
botonConsignar.style.width = "200px";
botonConsignar.style.height = "200px";

titulo.appendChild(botonConsignar);

botonConsignar.className = "arcoiris";

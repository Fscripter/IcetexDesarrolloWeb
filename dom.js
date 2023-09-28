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

botonConsignar.addEventListener("click", () => {
  console.log("Has hecho click");
});

let saldo = 500;

let boton1 = document.getElementById("add"); //Aumentar
let boton2 = document.getElementById("minus"); //Disminuir
let saldoText = document.getElementById("Saldo");
let transacciones = document.getElementById("transacciones");

function actualizarSaldo() {
  saldoText.innerHTML = `saldo: $${saldo}`;
}

boton1.addEventListener("click", () => {
  saldo += 10;
  let p = document.createElement("p");
  p.innerHTML = "Consigno $10 pesos";
  transacciones.appendChild(p);
  actualizarSaldo();
});

boton2.addEventListener("click", () => {
  let p = document.createElement("p");
  p.innerHTML = "retiro $10 pesos";
  saldo -= 10;
  transacciones.appendChild(p);
  actualizarSaldo();
});

//Nueva funcionalidad

let realizarConsignacion = document.getElementById("consignar");

realizarConsignacion.addEventListener("click", () => {
  event.preventDefault();
  let cuentaConsignacion = document.getElementById("cuentaConsignar");
  saldo -= 10;
  let p = document.createElement("p");
  p.innerHTML = `Consignaste $10 a la cuenta ${cuentaConsignacion.value}`;

  transacciones.appendChild(p);
  actualizarSaldo();
});

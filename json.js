console.clear();

let usuario = {
  nombre: "juan",
  edad: "30",
  colegiatura: "postgrado",
  imagen: new Image(),
};

usuario.imagen.src =
  "https://img.lovepik.com/free-png/20211103/lovepik-aesthetic-plants-illustration-png-image_400228015_wh1200.png";
document.body.appendChild(usuario.imagen);
console.log(usuario);
let jsonValue = JSON.stringify(usuario);

console.log(jsonValue);

if (localStorage.getItem("nombre") && localStorage.getItem("nombre") != "null") {
  console.log(localStorage.getItem("nombre"));
} else {
  let nombre = prompt("Ingrese su nombre");
  localStorage.setItem("nombre", nombre);
}

document.cookie = "name=juan;expires=none;path=none";

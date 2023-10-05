let Inventario = [
  {
    name: "Cancha",
    imgUrl: "",
    price: 100000,
  },
  {
    name: "Tennis nike",
    imgUrl:
      "data:image/jpeg;base64,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",
    price: 200000,
  },
  {
    name: "Camisas",
    imgUrl:
      "data:image/jpeg;base64,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",
    price: 80000,
  },
  {
    name: "Balon mundial 2018",
    imgUrl:
      "data:image/jpeg;base64,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",
    price: 150000,
  },
];

for (let i = 0; i < Inventario.length; i++) {
  let divPadre = document.createElement("div");
  let titulo = document.createElement("p");
  let precio = document.createElement("p");
  let img = document.createElement("img");

  titulo.innerHTML = Inventario[i].name;
  precio.innerHTML = Inventario[i].price;
  img.src = Inventario[i].imgUrl;

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";
  cardBody.appendChild(titulo, precio);

  divPadre.appendChild(img);
  divPadre.appendChild(cardBody);

  divPadre.className = "card";
  divPadre.style.width = "18rem";
  img.className = "card-img-top";
  titulo.className = "card-title";

  document.body.appendChild(divPadre);
}

var objeto1 = {
  color: "rojo",
};

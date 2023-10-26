const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

let productos = [
  {
    name: "piña",
    price: "7000",
    units: 50,
  },
  {
    name: "Manzana",
    price: "2000",
    units: 40,
  },
  {
    name: "Pera",
    price: "2000",
    units: 30,
  },
  {
    name: "Mango",
    price: "5000",
    units: 15,
  },
];
router.get("/productos", (req, res) => {
  let token = req.headers["authorization"];

  try {
    jwt.verify(token, "snapserverKey");
    res.send(JSON.stringify({ productos: productos }));
  } catch (e) {
    res.send(JSON.stringify({ error: "No tienes permiso para ver los productos" }));
  }
});
router.get("/productos/:id", (req, res) => {
  res.send(JSON.stringify({ producto: productos[req.params.id] }));
});

module.exports = router;

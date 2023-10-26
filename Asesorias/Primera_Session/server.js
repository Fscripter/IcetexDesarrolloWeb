const express = require("express");
const path = require("path");
const fs = require("fs");

const server = express();
const PORT = 3000;

server.use(express.json());

let users = [
  {
    name: "juan",
    email: "jpa@gmail.com",
    password: "123",
  },
  {
    name: "juan",
    email: "jpa@gmail.com",
    password: "123",
  },
  {
    name: "juan",
    email: "jpa@gmail.com",
    password: "123",
  },
  {
    name: "juan",
    email: "jpa@gmail.com",
    password: "123",
  },
];

server.get("/", (req, res) => {
  res.send(JSON.stringify(users));
});
let productos = [
  { name: "perfumer", value: "20 USD", marca: "l'ovel" },
  { name: "perfumer", value: "20 USD", marca: "l'ovel" },
  { name: "perfumer", value: "20 USD", marca: "l'ovel" },
];
server.get("/productos", (req, res) => {
  res.send(JSON.stringify({ productos: productos }));
});

server.listen(3000);

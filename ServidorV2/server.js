const express = require("express");
const server = require("express")();
const router = require("./productos/productos");
const colors = require("colors");
const path = require("path");
const jwt = require("jsonwebtoken");
const cors = require("cors");

server.use(router);
server.use(express.json());
server.use(
  cors({
    origin: "*",
  })
);

server.get("/login", (req, res) => {
  res.sendFile(path.resolve("./login/index.html"));
});

let userAllowed = {
  username: "juan",
  password: "123",
  name: "Juan Pablo",
  email: "jpablo@gmail.com",
};
server.post("/login", (req, res) => {
  if (userAllowed.username === req.body.username && userAllowed.password === req.body.password) {
    //Crear la tarjetica
    let token = jwt.sign(userAllowed, "snapserverKey", { expiresIn: "2 days" });
    console.log(token);
    res.send(
      JSON.stringify({
        name: "Juan Pablo",
        token: token,
      })
    );
    return;
  }
  res.send("Usuario o contraseña invalidos");
});

server.listen(3000, () => {
  console.log(`Server ON port: ${"3000".green}`);
});

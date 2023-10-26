const { MongoClient } = require("mongodb");
const express = require("express");
const server = express();
const path = require("path");
const cors = require("cors");

const connection = new MongoClient("mongodb://localhost:27017");

async function iniciarDB() {
  try {
    let user = {
      nombre: "Alex",
      apellido: "Carvajal",
    };

    await connection.connect();

    // await connection.db("icetex").collection("users").insertOne(user);
  } catch (e) {
    console.log(e);
  }
}

iniciarDB();

server.use(express.static(path.resolve("./build")));
server.get("/", (req, res) => {
  res.sendFile(path.resolve("./build/index.html"));
});

server.get("/app", (req, res) => {
  res.sendFile(path.resolve("./build/index.html"));
});
server.get("/app", (req, res) => {
  res.sendFile(path.resolve("./build/index.html"));
});

server.use(express.json()); // Para leer json
server.use(cors()); // Permitir todas las conexione

server.get("/users", async (req, res) => {
  let resultado = await connection
    .db("icetex")
    .collection("users")
    .find({ name: "Juan" })
    .toArray();

  res.send(JSON.stringify({ resultado: resultado }));
});

server.get("/productos", (req, res) => {
  res.sendFile(path.resolve("./productos.html"));
});
server.post("/productos", async (req, res) => {
  let result = await connection.db("icetex").collection("productos").insertOne(req.body);

  res.send("Se guardo el producto");
});

server.listen(3000, () => {
  console.log("Server on port 3000");
});

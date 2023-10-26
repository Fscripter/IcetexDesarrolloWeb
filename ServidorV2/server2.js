const server = require("express")();
const path = require("path");
const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

const objectID = ObjectId;

let user = {
  name: "Mbappe",
  apellido: "Angulo",
  _id: objectID,
};

let url = "mongodb://localhost:27017";

const client = new MongoClient(url);

async function run() {
  try {
    client.connect();
    await client.db("prueba").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const result = await client.db("prueba").collection("probando").find({}, {}).toArray();
  } catch (e) {
    console.log(e);
  }
}

run().catch(console.dir);
server.use(cors());
server.use(express.static(__dirname + "/build"));
server.get("/productos", async (req, res) => {
  const resultado = await client
    .db("prueba")
    .collection("probando")
    .find({ name: "Mbappe" })
    .toArray();

  res.json({ query: resultado });
});

server.listen(3000);

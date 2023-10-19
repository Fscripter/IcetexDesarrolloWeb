//Leer un archivo
const fs = require("fs");

const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question("Escribe tu informe de ventas", (text) => {
  console.log(text);

  fs.writeFile("./nodeServer/hola.txt", text, (error) => {
    if (error) {
      return;
    }
    console.log("Se ha guardado exitosamente");
  });
});

fs.readFile("./nodeServer/archivo.txt", "utf-8", (error, data) => {
  //   console.log(data);
});

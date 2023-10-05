import logo from "./logo.svg";
import "./App.css";
import { PrimerComponente, VistaPerfil } from "./PrimerComponente/componente";
import { Cuenta } from "./CuentaBanco/Cuenta";
import { CarritoCompras } from "./CarritoCompras/CarritoCompras";
import { SuperMercado } from "./Productos/Productos";
import { useState } from "react";

function App() {
  let primerNombre = "esteban";
  const [items, useItems] = useState([]);
  return (
    <div>
      <Cuenta nombre="Fernandez"></Cuenta>
      <SuperMercado cambio={useItems}></SuperMercado>
      <CarritoCompras productoSeleccionado={items}></CarritoCompras>
    </div>
  );
}

export default App;

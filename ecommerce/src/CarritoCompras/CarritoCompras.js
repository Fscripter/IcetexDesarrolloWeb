import { useState } from "react";

function CarritoCompras(props) {
  console.log(props.productoSeleccionado);

  return (
    <div>
      <h3>Producto Añadido a tu carrito</h3>
      <p>
        {props.productoSeleccionado.map((item) => {
          return item.Nombre;
        })}
      </p>
    </div>
  );
}

export { CarritoCompras };

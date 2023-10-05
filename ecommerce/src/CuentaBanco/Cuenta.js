import React, { useState } from "react";

function Cuenta(props) {
  //   let saldo = 10000;
  const [saldo, setSaldo] = useState(10000);

  function Consignar() {
    setSaldo(saldo + 10);
  }

  return (
    <div>
      <p>Hola señ@r {props.nombre}</p>
      <br />
      <p>Saldo disponible: {saldo}</p>
      <button type="button" class="btn btn-success" onClick={Consignar}>
        Consignar $10
      </button>
      <button type="button" class="btn btn-danger">
        Retirar $10
      </button>
    </div>
  );
}

export { Cuenta };

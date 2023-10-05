import "./estilo.css";

function ProductoUnitario(props) {
  function click() {
    props.cambio((arrayViejo) => [...arrayViejo, { Nombre: props.name, precio: props.precio }]);
  }

  return (
    <div className="producto" onClick={click}>
      <p>{props.name}</p>
      <img src={props.img}></img>
      <p>{props.precio}</p>
    </div>
  );
}

function SuperMercado(props) {
  let listaProductos = [
    { name: "Arroz", img: "", precio: "2700" },
    { name: "Papa", img: "", precio: "2800" },
    { name: "Gaseosa Coca Cola", img: "", precio: "7000" },
  ];

  return (
    <div>
      <h2>Super Mercado</h2>
      {listaProductos.map((item) => {
        return (
          <ProductoUnitario
            name={item.name}
            precio={item.precio}
            cambio={props.cambio}
          ></ProductoUnitario>
        );
      })}
    </div>
  );
}
export { SuperMercado };

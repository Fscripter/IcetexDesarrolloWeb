function darClick() {
  console.log("Has clickeado");
}

function mouseEncima() {
  console.log("Estas sobre el componente PrimerComponente");
}

function PrimerComponente(props) {
  return (
    <p onClick={darClick} onMouseOver={mouseEncima}>
      Hola soy {props.nombre}
      <VistaPerfil name={props.nombre}></VistaPerfil>
    </p>
  );
}

function VistaPerfil(props) {
  return (
    <div>
      <img src="" alt="" />
      <p>soy {props.name} Tengo x años desarrollando</p>
    </div>
  );
}

export { PrimerComponente, VistaPerfil };

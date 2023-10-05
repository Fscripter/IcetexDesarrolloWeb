let raiz = document.getElementById("raiz");

let nodoPrincipal = ReactDOM.createRoot(raiz);

nodoPrincipal.render(Boton);

function Boton() {
  return <p>Hello world from React</p>;
}

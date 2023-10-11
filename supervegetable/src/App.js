import logo from "./logo.svg";
import "./App.css";

function App() {
  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
  return <div className="App"></div>;
}

export default App;

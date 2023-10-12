import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./Components/Login/Login";

function Card(props) {
  return (
    <div class="card">
      <img src={props.img} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
function App() {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const pokemons = ["pikachu", "ditto", "gengar"];

  useEffect(() => {
    //Fetch para extraer datos del pokemon

    if (!loaded) {
      pokemons.forEach((pokemon) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setData((arrayViejo) => [
              ...arrayViejo,
              <Card title={data.name} img={data.sprites.front_default}></Card>,
            ]);
          });
      });

      setLoaded(true);
    }
  }, [loaded]);
  return (
    <div className="App">
      <div className="container d-flex justify-content-around">
        <Login></Login>
        <div className="col-3">{data}</div>
      </div>
    </div>
  );
}

export default App;

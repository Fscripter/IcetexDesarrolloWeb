import React, { useState, useEffect } from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function User(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>
        <i>{props.lastname}</i>
      </p>
    </div>
  );
}

function App() {
  const [info, setInfo] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => {
        setInfo(<User name={data.resultado[0].name} lastname={data.resultado[0].lastname}></User>);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="App">
      <h1>Hola soy el componente App</h1>
      <Link to="/login">Ir a login</Link>
      {info != "" ? info : null}
    </div>
  );
}

export default App;

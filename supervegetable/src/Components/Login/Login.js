import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();

    console.log(formData);

    fetch("localhost/Login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };
  return (
    <div className="Formulario-Login container d-flex flex-column col-4 vh-100 justify-content-center">
      <form onSubmit={enviarFormulario}>
        <input
          type="text"
          placeholder="Usuario"
          value={formData.username}
          name="username"
          onChange={handleInput}
        ></input>
        <input
          type="password"
          placeholder="Contraseña"
          value={formData.password}
          name="password"
          onChange={handleInput}
        ></input>
        <input type="submit" value={"Iniciar sesion"}></input>
      </form>
    </div>
  );
}

export { Login };

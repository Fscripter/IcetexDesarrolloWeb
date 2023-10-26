function validarFormulario(event) {
  event.preventDefault();
  let nombre = document.getElementById("nombre").value;

  if (nombre.length >= 3) {
    alert("El nombre es valido");
  } else {
    alert("Verifica el nombre, tiene que mas de 3 caracteres");
  }

  let email = document.getElementById("email").value;
  var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  // Using test we can check if the text match the pattern
  if (validEmail.test(email.value)) {
    alert("Email is valid, continue with form submission");
  } else {
    alert("Email is invalid, skip form submission");
  }

  //validacion exitosa, ahora envio datos

  let datos = {
    nombre: nombre,
    email: email,
  };
  console.log(datos);
  console.log(JSON.stringify(datos));

  fetch("http://fa", {
    method: "POST",
    body: JSON.stringify(datos),
  }).catch(() => {
    console.log("Hubo un error en la peticion");
  });
}

//Peticion
fetch("http://localhost:3000")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.body.innerHTML += `<h1>${data.name}</h1>`;
  });

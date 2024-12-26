//EVENTOS DEL DOM - Submit

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const password = document.querySelector("#password").value;

  if (nombre === "" || password === "") {
    console.log("todos los campos son obligatorios");
  } else {
    console.log("Enviando el formulario TODO OK......");
    console.log(`nombre: ${nombre}, password: ${password}`);
  }
});

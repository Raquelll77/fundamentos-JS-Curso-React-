//Manipular elementos HTML con CSS

const heading = document.querySelector(".heading");
const enlaces = document.querySelectorAll(".navegacion a");

heading.textContent = "Nuevo titulo";
const inputNombre = document.querySelector("#nombre");
inputNombre.value = "raquel alvarado";

enlaces[0].textContent = "nuevo enlace";

enlaces.forEach((enlace) => (enlace.textContent = `Nuevo enlace`));

//EVENTOS DEL DOM - Submit

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const password = document.querySelector("#password").value;

  // prevenir nuevas alertas

  const alertaPrevia = document.querySelector(".alerta");

  alertaPrevia?.remove();

  const alerta = document.createElement("DIV");

  alerta.classList.add(
    "alerta",
    "text-white",
    "uppercase",
    "text-sm",
    "text-center",
    "p-2",
    "font-black"
  );

  if (nombre === "" || password === "") {
    alerta.textContent = "Todos los campos son obligatorios";
    alerta.classList.add("bg-red-500");
  } else {
    alerta.textContent = `nombre: ${nombre}, password: ${password}`;
    alerta.classList.add("bg-green-500");
  }

  console.log(alerta);

  formulario.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 3000);
});

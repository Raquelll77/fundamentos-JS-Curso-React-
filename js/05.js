//arrays method
const tecnologias = ["HTML", "CSS", "JAVASCRIPT", "REACT", "NODE.JS"];
const tecnologias2 = tecnologias.filter(function (tech) {
  if (tech !== "HTML") {
    return tech;
  }
});
const tecnologias3 = tecnologias.map(function (tech) {
  if (tech === "NODE.JS") {
    return "NEST,JS";
  } else {
    return tech;
  }
});
console.log(tecnologias3);

tecnologias.push("NEST.JS");

const nuevoArreglo = [...tecnologias, "NEST.JS"]; //no muta el arreglo original
console.log(tecnologias);
console.log(nuevoArreglo);

tecnologias.shift();
console.log(tecnologias);
console.log(tecnologias2);

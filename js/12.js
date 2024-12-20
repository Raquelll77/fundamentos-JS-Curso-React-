//aRRAY METHODS

const tecnologias = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "PHP",
  "MONGODB",
  "JQuery",
  "JSX",
  "JAVA",
];
const numeros = [10, 11, 12, 13, 14, 15, 16, 17, 18];

//FILTER
//const nuevoArray = tecnologias.filter((tech) => console.log(tech));

const nuevoArray = tecnologias.filter((tech) => tech !== "HTML");

console.log(nuevoArray);

const resultado = numeros.filter((numero) => numero !== 10);
console.log(resultado);

//INCLUDES (revisa si existe un elemento en un arreglo)
const resultado2 = tecnologias.includes("CSS");
console.log(resultado2);

//some (devuelve si al menos uno cumple la condicion)
const resultado3 = numeros.some((numero) => numero > 15);

if (resultado3) {
  console.log("Si hay elmentos");
} else {
  console.log("No hay elementos");
}

console.log(resultado3);

//FIND (devuelve el primer elemento que cumpla una condicion)
const resultado4 = numeros.find((numero) => numero > 15);
console.log(resultado4);

//EVERY (retorna true o false si todos cumplen la condicion)
const resultado5 = numeros.every((numero) => numero > 5);
console.log(resultado5);

//REDUCE (retorna un acumulado del total)
const resultado6 = numeros.reduce((total, numero) => total + numero, 0);
console.log(resultado6);

//iterar arreglos

//forma clasica for

const tecnologias = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "REACT",
  "MONGODB",
  "PHP",
  "JAVA",
  "PYTHON",
  "SASS",
];

/* for (let i = 0; i < tecnologias.length; i++) {
  console.log(tecnologias[i]);
}
 */

//FOREACH

tecnologias.forEach(function (tech) {
  console.log(tech);
});

//MAP
//map genera un neuvo arreglo
tecnologias.map(function (tech) {
  console.log(tech);
});

const arrayMap = tecnologias.map(function (tech) {
  return tech;
});

console.log(`Arreglo de map ${arrayMap}`);
console.log(arrayMap);

//for ...of
for (let tech of tecnologias) {
  console.log(`tecnologias con for...of ${tech}`);
}

//OPTIONAL CHAINING (?)
const alumno = {
  nombre: "Raquel",
  clase: "Gerencia informatica",
  aprobado: true,
  examenes: {
    examen1: 90,
  },
};

console.log(alumno.examenes?.examen1);
console.log("despues de alumno...");

//NULLIST COOLESTING OPERATOR (??)

const pagina = 10 ?? 1;
console.log(pagina);

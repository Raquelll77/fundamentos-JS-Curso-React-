//destructuring de arreglos

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

const [, , , , MONGODB] = tecnologias;
const mongoDB = tecnologias[4];

console.log(MONGODB);
console.log(mongoDB);

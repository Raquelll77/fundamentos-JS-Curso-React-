//ENMASCRIPT MODULES

const sumar = (n1, n2) => n1 + n2;

const restar = (n1, n2) => n1 - n2;

const division = (n1, n2) => n1 / n2;

export { sumar, restar, division };

//solo puede haber un export default por archivo
const multiplicar = (n1, n2) => n1 * n2;
export default multiplicar;

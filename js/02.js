const producto = {
  nombre: "Tablet",
  precio: 100,
  disponible: true,
};

const cliente = {
  nombre: "Raquel",
  premiun: true,
};

const carrito = {
  cantidad: 1,
  ...producto, //spread operator
};

console.log(carrito.nombre);

const nuevoObjeto = {
  ...producto,
  ...cliente,
};

const nuevoObjeto2 = Object.assign(producto, cliente);

console.log(nuevoObjeto);
console.log(nuevoObjeto2);

//todos los symbol son unicos
const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);

//objetos
//coleccion de propiedades

const persona = {
  nombre: "Raquel",
  apellido: "Alvarado",
  edad: 24,
};

console.log(persona);
console.log(persona.apellido);
console.log(persona.edad);

//desctructuring
const { nombre } = persona;
console.log(nombre);

const { apellido, edad } = persona;
console.log(apellido);

//object literal enhacements
const autenticado = true;
const usuario = "Raquel";
const nuevoObjeto = {
  autenticado: autenticado,
  usuario: usuario,
};

console.log(nuevoObjeto);

//como manipular objetos
const persona2 = {
  nombre: "Raquel",
  apellido: "Alvarado",
  edad: 24,
  soltera: false,
};

persona2.soltera = true;

//sino existe una propiedad la va a añadir
persona2.imagen = "imagen.jpg";
console.log(persona2);

//para eliminar una propiedad
delete persona2.edad;
console.log(persona2);

//evita que se pueda quitar o inyectar nuevas caracteristicas al objeto
Object.freeze(persona2);

//permite modificar las propiedades existentes pero no podemos añadir o eliminar propiedades del objeto
Object.seal(persona2);

//objetos destructuring
const producto = {
  nombre: "Tablet",
  precio: 100,
  disponible: true,
};

const cliente = {
  nombre: "Raquel",
  premiun: true,
  direccion: {
    calle: "calle 4 aldea el carmen",
  },
};

const { nombre: nombreProducto } = producto;
const { nombre: nombreCliente } = cliente;
const {
  direccion: { calle },
} = cliente;

console.log(nombreProducto);
console.log(nombreCliente);
console.log(calle);



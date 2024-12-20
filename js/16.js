//TERNARIOS

const auth = true;

const saldo = 1000;
const pagar = 1200;
const tarjeta = true;

if (auth) {
  console.log("Usuario autenticado");
} else {
  console.log("No autenticado, ir a Login");
}

auth
  ? console.log("Usuario autenticado")
  : console.log("No autenticado, ir a Login");

saldo > pagar || tarjeta
  ? console.log("Puedes pagar")
  : console.log("No puedes pagar");

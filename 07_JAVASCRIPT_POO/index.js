import {Cliente} from "./Cliente.js";
import {Conta} from "./Conta.js";

const cliente = new Cliente("pedro", 123132123);
const contaCliente = new Conta(cliente, 12);
contaCliente.depositar(100);
console.log(contaCliente);

const cliente2 = new Cliente('wyctor', 987987987);



const contaCliente2 = new Conta(cliente2, 15);
console.log(contaCliente2);


// contaCliente.depositar(400);
// contaCliente.transferir(100, contaCliente2);



// console.log(cliente);
// console.log(contaCliente);
// console.log('==========================');
// console.log(cliente2);
// console.log(contaCliente2);
// console.log('==========================');


// console.log(contaCliente2.saldo);
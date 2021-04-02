import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroContas = 0;
    constructor(cliente, agencia){
        ContaCorrente.numeroContas++;
        super(0, cliente, agencia);
    }

    sacar(valor) {
        let taxa = 1.1;
        return super._sacar(valor, taxa);
    }
}
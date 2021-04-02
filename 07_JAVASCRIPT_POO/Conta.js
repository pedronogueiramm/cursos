import { Cliente } from "./Cliente.js";

export class Conta{
    _saldo  = 0;
    agencia;
    _cliente;
    static numeroContas = 0;

    constructor(cliente, agencia){
        this._cliente = cliente;
        this.agencia = agencia;
        Conta.numeroContas++;
    }

    sacar(valor) {
        
        if(this._saldo >= valor){
            this._saldo = parseFloat(this._saldo - valor);
            console.log('voce sacou um valor de:', valor);
            console.log('Seu novo saldo é:', this._saldo);
            return valor;
        }
    }

    depositar(valor){
        if(valor >0){
            this._saldo =  parseFloat(this._saldo + valor);
            console.log('você realizou um depósito de:', valor);
            console.log('seu novo saldo é:', this._saldo);
        }
    }

    transferir(valor, contaDestino){
        contaDestino.depositar(this.sacar(valor));
    }

    set cliente(cliente){
        if(cliente instanceof Cliente){
            this._cliente = cliente
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

}
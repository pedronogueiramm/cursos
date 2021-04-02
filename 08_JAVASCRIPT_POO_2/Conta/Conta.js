export class Conta {
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error ("A classe CONTA é uma classe abstrata!");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
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

    sacar(valor) {
        throw new Error("o método SACAR é um método abstrato!")
        
        
    }

    _sacar(valor, taxa){
        const valorSacado = valor * taxa;
        if(this._saldo >= valor){
            this._saldo = parseFloat(this._saldo - valorSacado);
            console.log('voce sacou um valor de:', valor);
            console.log('com a taxa de:', valorSacado-valor);
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

    
}
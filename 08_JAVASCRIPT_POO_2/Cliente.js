export class Cliente{

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf, senha){
        this.nome  =  nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    autenticar(senha){
        if(senha == this._senha){
            return true;
        }
        return false;
    }

}
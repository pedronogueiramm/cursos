export class SistemaAutenticacao{
    static login(usuario, senha){
        if(SistemaAutenticacao.isAutenticable(usuario)){
            return usuario.autenticar(senha);
        }
        return false;
    }

    static isAutenticable(usuario){
        return "autenticar" in usuario && usuario.autenticar instanceof Function;
    }
}
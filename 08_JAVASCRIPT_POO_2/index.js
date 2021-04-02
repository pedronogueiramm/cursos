import {Cliente} from "./Cliente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const gerente = new Gerente("pedro", 1200, 123123123);
const diretor = new Diretor("vagner", 2000, 123321123);
const cliente = new Cliente("carla", 1233322445, 4444);

gerente.cadastrarSenha(123321);
diretor.cadastrarSenha(321123);

const gerenteLogado = SistemaAutenticacao.login(gerente,123321);
const diretorLogado = SistemaAutenticacao.login(diretor, 321123);
const clienteLogado = SistemaAutenticacao.login(cliente, 4444);

console.log(gerenteLogado);
console.log(diretorLogado);
console.log(clienteLogado);
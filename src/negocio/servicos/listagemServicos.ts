import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada
    }
    public listar(): void {
        console.log(`- Lista de todos os serviços: -`);
        console.log()
        this.servicos.forEach(servico => {
            console.log(`ID: ` + servico.id)
            console.log(`Nome: ` + servico.nome);
            console.log(`Valor: ` + servico.valor);
            console.log()
            this.entrada.receberTexto("")
        });
    }
}
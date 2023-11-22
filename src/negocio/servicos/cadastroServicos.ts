import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastro from "../cadastro";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        let idUltimoServico = 0

        if (this.servicos.length !== 0) {
            idUltimoServico = this.servicos[this.servicos.length-1].id
        }

        console.log(`- Início do cadastro do serviço -`);

        console.log()
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)
        
        console.log()

        let valor = this.entrada.receberNumero(`Por favor informe o valor do serviço: `)
        console.log()

        let id = 1
        if (this.servicos.length !== 0) {
            id = idUltimoServico + 1
        }

        let servico = new Servico()
        servico.id = id
        servico.nome = nome
        servico.valor = valor

        this.servicos.push(servico)
    }
}
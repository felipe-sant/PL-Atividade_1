import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Atualizacao from "../atualizar";

export default class AtualizarServico extends Atualizacao {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada
    }
    
    public atualizar(): void {
        while (true) {
            let idServico = this.entrada.receberNumero("Id do serviço você deseja atualizar: ")
            let servicoExiste = false

            this.servicos.forEach(servico => { if (servico.id === idServico) { servicoExiste = true } });

            if (servicoExiste) {
                this.servicos.forEach(servico => {
                    if (servico.id == idServico) {
                        console.log(`- Início da atualização do serviço -`);
                        console.log()
                        let nome = this.entrada.receberTexto(`Por favor informe o novo nome do serviço: `)
                        let valor = this.entrada.receberNumero(`Por favor informe o novo valor do serviço: `)
                        console.log()
                        servico.updateServico(nome, valor)
                    }
                })
            } else {
                console.log("! serviço não existe !\n")
            }

            console.log()
            let opcao = this.entrada.receberTexto("Deseja atualizar mais algum serviço? (s/n): ")
            if (opcao == "n" || opcao == "N") { break }
        }
    }
}
import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Deletar from "../deletar";

export default class DeletarServico extends Deletar {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada
    }

    public deletar():Array<Servico> {
        while (true) {
            let idServico = this.entrada.receberNumero("Id do serviço você deseja deletar: ")
            let servicoExiste = false

            this.servicos.forEach(servico => { if (servico.id === idServico) { servicoExiste = true } });

            if (servicoExiste) {
                this.servicos = this.servicos.filter(servico => servico.id !== idServico)
                return this.servicos
            } else {
                console.log("! serviço não existe !\n")
            }
        }
    }
}
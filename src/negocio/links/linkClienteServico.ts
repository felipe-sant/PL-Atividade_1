import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Servico from "../../modelo/servico";
import Link from "../link";

export default class LinkClienteServico extends Link {
    public cliente: Cliente
    public servico: Array<Servico>
    public servicoConsumidos: Array<Servico>
    public entrada: Entrada
    constructor(cliente: Cliente, servico: Array<Servico>) {
        super()
        this.cliente = cliente
        this.servico = servico
        this.entrada = new Entrada()
        this.servicoConsumidos = cliente.getServicosConsumidos
    }

    public linkar(): void {
        let idServico = this.entrada.receberNumero("Por favor informe o id do serviço: ")
        let servicoExiste = false

        this.servico.forEach(servico => {
            if (servico.id === idServico) {
                servicoExiste = true
            }
        })

        if (servicoExiste) {
            this.servico.forEach(servico => {
                if (servico.id == idServico) {
                    this.servicoConsumidos.push(servico)
                    console.log("\nServiço adicionado:", servico.nome)
                    console.log("valor antigo: ", this.cliente.valorTotalConsumido.toFixed(2), "+", servico.valor)
                    this.cliente.updateValorTotalConsumido(servico.valor)
                    console.log("novo valor:", this.cliente.valorTotalConsumido.toFixed(2))
                }
            })
        }

        this.cliente.setServicosConsumidos(this.servicoConsumidos)
    }
}
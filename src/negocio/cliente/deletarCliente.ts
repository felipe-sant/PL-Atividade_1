import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Deletar from "../deletar";

export default class DeletarCliente extends Deletar {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada
    }

    public deletar():Array<Cliente> {
        while (true) {
            let idCliente = this.entrada.receberNumero("Id do cliente você deseja deletar: ")
            let clienteExiste = false

            this.clientes.forEach(cliente => { if (cliente.id === idCliente) { clienteExiste = true } });

            if (clienteExiste) {
                this.clientes = this.clientes.filter(cliente => cliente.id !== idCliente)
                return this.clientes
            } else {
                console.log("! cliente não existe !\n")
            }
        }
    }
}
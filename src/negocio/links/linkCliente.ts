import Link from "../link";
import Empresa from "../../modelo/empresa";
import Entrada from "../../io/entrada";
import ListagemProdutos from "../produtos/listagemProdutos";
import ListagemServicos from "../servicos/listagemServicos";
import LinkClienteServico from "./linkClienteServico";
import LinkClienteProduto from "./linkClienteProduto";

export default class Linkar extends Link {
    public empresa: Empresa
    public entrada: Entrada
    constructor(empresa: Empresa) {
        super()
        this.empresa = empresa
        this.entrada = new Entrada()
    }

    public linkar(): void {
        let continuar = true
        while (continuar) {
            console.log("\n- Linkando cliente a produtos -\n")
            let idCliente = this.entrada.receberNumero("Por favor informe o id do cliente: ")
            let clienteExiste = false 

            this.empresa.getClientes.forEach(cliente => {
                if (cliente.id === idCliente) {
                    clienteExiste = true
                }
            })

            if (clienteExiste) {
                this.empresa.getClientes.forEach(cliente => {
                    if (cliente.id == idCliente) {
                        let execucao = true
                        while (execucao) {
                            console.log()
                            console.log(`- Início da linkagem do cliente: ${cliente.nome} -`)
                            console.log("----------------------------------------")
                            console.log("1 - Listar todos os produtos")
                            console.log("2 - Listar todos os serviços")
                            console.log("3 - Adicionar produtos ao cliente")
                            console.log("4 - Adicionar serviços do cliente")
                            console.log("0 - Sair")
                            console.log("----------------------------------------")
        
                            let opcao = this.entrada.receberNumero("Por favor informe a opção desejada: ")
        
                            switch (opcao) {
                                case 1:
                                    let listagemP = new ListagemProdutos(this.empresa.getProdutos)
                                    listagemP.listar()
                                    break
                                case 2:
                                    let listagemS = new ListagemServicos(this.empresa.getServicos)
                                    listagemS.listar()
                                    break
                                case 3:
                                    let adicionarProduto = new LinkClienteProduto(cliente, this.empresa.getProdutos)
                                    adicionarProduto.linkar()
                                    break
                                case 4:
                                    let adicionarServico = new LinkClienteServico(cliente, this.empresa.getServicos)
                                    adicionarServico.linkar()
                                    break
                                case 0:
                                    execucao = false
                                    break
                                default:
                                    console.log("! opção inválida !")
                            }
                        }
                    }
                })
            }

            break
        }
    }
}
import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";

export default class Listas {
    public clientes: Array<Cliente>
    public produtos!: Array<Produto>
    public servicos!: Array<Servico>
    private entrada: Entrada
    private lista!: Array<{nome:string, quantidade:number}>
    constructor(clientes: Array<Cliente>)
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>)
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos:Array<Servico>)
    constructor(clientes: Array<Cliente>, produtos?: Array<Produto>, servicos?:Array<Servico>) {
        this.clientes = clientes
        if (servicos) {
            this.servicos = servicos
        }
        if (produtos) {
            this.produtos = produtos
        }
        this.entrada = new Entrada()
    }

    private contarProdutoServico(cliente:Cliente){
        return cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length
    }
    
    private organizarLista(lista:Array<{nome:string, quantidade:number}>){
        lista.sort((a, b) => {
            if (a.quantidade < b.quantidade) {
                return 1
            }
            if (a.quantidade > b.quantidade) {
                return -1
            }
            return 0
        })
    }

    public listarClientePorProdutoServico(): void {
        this.lista = []
        console.log()

        this.clientes.forEach(cliente => {
            this.lista.push({nome: cliente.nome, quantidade: this.contarProdutoServico(cliente)})
        })

        this.organizarLista(this.lista)

        console.log(`Clientes que mais consumiram:`)
        this.lista.forEach((item, index) => {
            if (index > 9) {
                return
            }
            console.log(`${index+1}º | ${item.quantidade}x - ${item.nome}`)
        })
    }

    public listarClientePorProdutoServicoValor(): void {
        this.lista = []
        console.log()

        this.clientes.forEach(cliente => {
            this.lista.push({nome: cliente.nome, quantidade: cliente.valorTotalConsumido})
        })

        this.organizarLista(this.lista)

        console.log(`Clientes que mais consumiram:`)
        this.lista.forEach((item, index) => {
            if (index > 4) {
                return
            }
            console.log(`${index+1}º | R$${item.quantidade.toFixed(2)} - ${item.nome}`)
        })
    }

    public listarProdutosMaisConsumidos(): void {
        this.lista = []
        console.log()

        this.produtos.forEach(produto => {
            this.lista.push({nome: produto.nome, quantidade: 0})
        })

        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                if (this.lista.find(item => item.nome === produto.nome)) {
                    this.lista.find(item => item.nome === produto.nome)!.quantidade += 1
                }
            })
        })

        this.organizarLista(this.lista)

        console.log(`Produtos mais consumidos:`)
        this.lista.forEach((item, index) => {
            console.log(`${index+1}º | ${item.quantidade}x - ${item.nome}`)
        })
    }

    public listarProdutosPorTipo(): void {
        this.lista = []
        console.log()

        let tipo = this.entrada.receberTexto("Por favor informe o tipo do pet: ")

        this.produtos.forEach(produto => {
            this.lista.push({nome: produto.nome, quantidade: 0})
        })

        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                if (this.lista.find(item => item.nome === produto.nome) && cliente.getPets.find(pet => pet.getTipo === tipo)) {
                    this.lista.find(item => item.nome === produto.nome)!.quantidade += 1
                }
            })
        })

        this.organizarLista(this.lista)

        console.log(`Produtos mais consumidos pelo tipo ${tipo}: `)
        if (this.lista.length !== 0) {       
            this.lista.forEach((item, index) => {
                console.log(`${index+1}º | ${item.quantidade}x - ${item.nome}`)
            })
        } else {
            console.log("Nenhum produto encontrado")
        }
    }

    public listarProdutosPorRaca(): void {
        this.lista = []
        console.log()

        let raca = this.entrada.receberTexto("Por favor informe a raça do pet: ")

        this.produtos.forEach(produto => {
            this.lista.push({nome: produto.nome, quantidade: 0})
        })

        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                if (this.lista.find(item => item.nome === produto.nome) && cliente.getPets.find(pet => pet.getRaca === raca)) {
                    this.lista.find(item => item.nome === produto.nome)!.quantidade += 1
                }
            })
        })

        this.organizarLista(this.lista)

        console.log(`Produtos mais consumidos pela raça ${raca}: `)
        if (this.lista.length !== 0) {       
            this.lista.forEach((item, index) => {
                console.log(`${index+1}º | ${item.quantidade}x - ${item.nome}`)
            })
        } else {
            console.log("Nenhum produto encontrado")
        }
    }

    public listarServicosMaisConsumidos(): void {
        this.lista = []
        console.log()

        this.servicos.forEach(servico => {
            this.lista.push({nome: servico.nome, quantidade: 0})
        })

        this.clientes.forEach(cliente => {
            cliente.getServicosConsumidos.forEach(servico => {
                if (this.lista.find(item => item.nome === servico.nome)) {
                    this.lista.find(item => item.nome === servico.nome)!.quantidade += 1
                } else {
                    this.lista.push({nome: servico.nome, quantidade: 1})
                }
            })
        })

        this.organizarLista(this.lista)

        console.log(`Serviços mais consumidos:`)
        this.lista.forEach((item, index) => {
            console.log(`${index+1}º | ${item.quantidade}x - ${item.nome}`)
        })
    }

    public listarServicosPorTipo(): void {
        this.lista = []
        console.log()

        let tipo = this.entrada.receberTexto("Por favor informe o tipo do pet: ")

        this.servicos.forEach(servico => {
            this.lista.push({nome: servico.nome, quantidade: 0})
        })

        this.clientes.forEach(cliente => {
            cliente.getServicosConsumidos.forEach(servico => {
                if (this.lista.find(item => item.nome === servico.nome) && cliente.getPets.find(pet => pet.getTipo === tipo)) {
                    this.lista.find(item => item.nome === servico.nome)!.quantidade += 1
                }
            })
        })

        this.organizarLista(this.lista)

        console.log(`Servicos mais consumidos pelo tipo ${tipo}: `)
        if (this.lista.length !== 0) {       
            this.lista.forEach((item, index) => {
                console.log(`${index+1}º | ${item.quantidade}x - ${item.nome}`)
            })
        } else {
            console.log("Nenhum servico encontrado")
        }
    }

    public listarServicosPorRaca(): void {
        this.lista = []
        console.log()

        let raca = this.entrada.receberTexto("Por favor informe a raça do pet: ")

        this.servicos.forEach(servico => {
            this.lista.push({nome: servico.nome, quantidade: 0})
        })

        this.clientes.forEach(cliente => {
            cliente.getServicosConsumidos.forEach(servico => {
                if (this.lista.find(item => item.nome === servico.nome) && cliente.getPets.find(pet => pet.getRaca === raca)) {
                    this.lista.find(item => item.nome === servico.nome)!.quantidade += 1
                }
            })
        })

        this.organizarLista(this.lista)

        console.log(`Servicos mais consumidos pela raça ${raca}: `)
        if (this.lista.length !== 0) {       
            this.lista.forEach((item, index) => {
                console.log(`${index+1}º | ${item.quantidade}x - ${item.nome}`)
            })
        } else {
            console.log("Nenhum servico encontrado")
        }
    }
}
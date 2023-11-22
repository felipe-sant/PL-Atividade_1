import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Produto from "../../modelo/produto"
import Link from "../link"

export default class LinkClienteProduto extends Link {
    public cliente: Cliente
    public produtos: Array<Produto>
    public produtosConsumidos: Array<Produto>
    public entrada: Entrada
    constructor(cliente: Cliente, produtos: Array<Produto>) {
        super()
        this.cliente = cliente
        this.produtos = produtos
        this.entrada = new Entrada()
        this.produtosConsumidos = this.cliente.getProdutosConsumidos
    }

    public linkar(): void {
        let idProduto = this.entrada.receberNumero("Por favor informe o id do produto: ")
        let produtoExiste = false

        this.produtos.forEach(produto => {
            if (produto.id === idProduto) {
                produtoExiste = true
            }
        })

        if (produtoExiste) {
            this.produtos.forEach(produto => {
                if (produto.id == idProduto) {
                    this.produtosConsumidos.push(produto)
                    console.log("\nProduto adicionado:", produto.nome)
                    console.log("valor antigo: ", this.cliente.valorTotalConsumido.toFixed(2), "+", produto.valor)
                    this.cliente.updateValorTotalConsumido(produto.valor)
                    console.log("novo valor:", this.cliente.valorTotalConsumido.toFixed(2))
                }
            })
        }

        this.cliente.setProdutosConsumidos(this.produtosConsumidos)
    }
}
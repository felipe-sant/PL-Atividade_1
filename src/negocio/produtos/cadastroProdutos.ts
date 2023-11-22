import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Cadastro from "../cadastro";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        let idUltimoProduto = 0

        if (this.produtos.length !== 0) {
            idUltimoProduto = this.produtos[this.produtos.length-1].id
        }

        console.log("- Início do cadastro de produtos -")

        console.log()
        let nome = this.entrada.receberTexto("Por favor informe o nome do produto: ")
        
        console.log()

        let valor = this.entrada.receberNumero("Por favor informe o valor do produto: ")
        console.log()

        let id = 1
        if (this.produtos.length !== 0) {
            id = idUltimoProduto + 1
        }

        let produto = new Produto()
        produto.id = id
        produto.nome = nome
        produto.valor = valor

        this.produtos.push(produto)
    }
}
import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Deletar from "../deletar";

export default class DeletarProduto extends Deletar {
    private produtos: Array<Produto>
    private entrada: any
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada
    }

    public deletar():Array<any> {
        while (true) {
            let idProduto = this.entrada.receberNumero("Id do produto você deseja deletar: ")
            let produtoExiste = false

            this.produtos.forEach(produto => { if (produto.id === idProduto) { produtoExiste = true } });

            if (produtoExiste) {
                this.produtos = this.produtos.filter(produto => produto.id !== idProduto)
                return this.produtos
            } else {
                console.log("! produto não existe !\n")
            }
        }
    }
}
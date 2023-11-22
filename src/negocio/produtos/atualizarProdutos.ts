import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Atualizacao from "../atualizar";

export default class AtualizarProduto extends Atualizacao {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada
    }

    public atualizar(): void {
        while (true) {
            let idProduto = this.entrada.receberNumero("Id do produto você deseja atualizar: ")
            let produtoExiste = false

            this.produtos.forEach(produto => { if (produto.id === idProduto) { produtoExiste = true } });

            if (produtoExiste) {
                this.produtos.forEach(produto => {
                    if (produto.id == idProduto) {
                        console.log(`- Início da atualização do produto -`);
                        console.log()
                        let nome = this.entrada.receberTexto(`Por favor informe o novo nome do produto: `)
                        console.log()
                        let valor = this.entrada.receberNumero(`Por favor informe o novo valor do produto: `)
                        console.log()
                        produto.updateProduto(nome, valor)
                    }
                })
            } else {
                console.log("! produto não existe !\n")
            }

            console.log()
            let opcao = this.entrada.receberTexto("Deseja atualizar mais algum produto? (s/n): ")
            if (opcao == "n" || opcao == "N") { break }
        }
    }
}
import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Listagem from "../listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada
    }

    public listar(): void {
        console.log(`- Lista de todos os produtos: -`);
        console.log()
        this.produtos.forEach(produto => {
            console.log(`ID: ` + produto.id)
            console.log(`Nome: ` + produto.nome);
            console.log(`Valor: ` + produto.valor);
            console.log()
            this.entrada.receberTexto("")
        });
    }
}
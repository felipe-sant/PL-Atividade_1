import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada
    }
    public listar(): void {
        console.log(`- Lista de todos os clientes: -`);
        console.log()
        this.clientes.forEach(cliente => {
            console.log(`ID: ` + cliente.getId)
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log("RGs:")
            if (cliente.getRgs.length !== 0) {
                cliente.getRgs.forEach(rg => {
                    console.log("   ", rg.getValor)
                })
            } else {
                console.log("   Não há RGs cadastrados")
            }
            console.log("Telefones:")
            if (cliente.getTelefones.length !== 0) {
                cliente.getTelefones.forEach(telefone => {
                    console.log("   ", telefone.getDdd, telefone.getNumero)
                })
            } else {
                console.log("   Não há telefones cadastrados")
            }
            console.log("Produtos:")
            if (cliente.getProdutosConsumidos.length !== 0) {
                cliente.getProdutosConsumidos.forEach(produto => {
                    console.log("   ", produto.nome)
                })
            } else {
                console.log("   Não há produtos cadastrados")
            }
            console.log("Servicos:")
            if (cliente.getServicosConsumidos.length !== 0) {
                cliente.getServicosConsumidos.forEach(servico => {
                    console.log("   ", servico.nome)
                })
            } else {
                console.log("   Não há serviços cadastrados")
            }
            console.log("Total consumido: R$", cliente.valorTotalConsumido.toFixed(2))
            console.log("Pets:")
            if (cliente.getPets.length !== 0) {
                cliente.getPets.forEach(pet => {
                    console.log("   ID:", pet.getId)
                    console.log("   Nome:", pet.getNome)
                    console.log("   Tipo:", pet.getTipo)
                    console.log("   Raça:", pet.getRaca)
                    console.log("   Genero:", pet.getGenero)
                    console.log(" ----------------- ")
                })
            } else {
                console.log("   Não há pets cadastrados")
            }
            this.entrada.receberTexto("")
        });
    }
}
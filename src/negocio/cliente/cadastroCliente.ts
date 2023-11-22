import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf"
import Cadastro from "../cadastro"
import CadastroPet from "../pet/cadastroPet"
import CadastroRG from "../rg/cadastroRG"
import CadastroTelefone from "../telefone/cadastroTelefone"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        let idUltimoCliente = 0

        if (this.clientes.length !== 0) {
            idUltimoCliente = this.clientes[this.clientes.length-1].id
        }

        console.log(`- Início do cadastro do cliente -`);

        console.log()
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        console.log()
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)

        console.log()
        while (true) {
            let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
            if (valor === "") {
                continue
            }
            let data = this.entrada.receberTexto(`Por favor informe a data de emissão do CPF (dd/mm/aaaa): `);
            if (data !== "") {
                let partesData = data.split('/')
                let ano = new Number(partesData[2].valueOf()).valueOf()
                let mes = new Number(partesData[1].valueOf()).valueOf()
                let dia = new Number(partesData[0].valueOf()).valueOf()
                let dataEmissao = new Date(ano, mes, dia)
                var cpf = new CPF(valor, dataEmissao);
            } else {
                continue
            }
            break
        }

        let id = 1
        if (this.clientes.length !== 0) {
            id = idUltimoCliente + 1
        }

        console.log()
    
        let cadastroRG = new CadastroRG()
        let rgs = cadastroRG.cadastrar()

        console.log()

        let cadastroTelefone = new CadastroTelefone()
        let telefones = cadastroTelefone.cadastrar()

        var produtosConsumidos = undefined
        var servicosConsumidos = undefined

        console.log()

        var pets = undefined
        while (true) {
            let opcao = this.entrada.receberTexto("deseja inserir pets nesse cliente? (s/n): ")
            switch (opcao) {
                case "s" || "S":
                    let cadastroPet = new CadastroPet()
                    pets = cadastroPet.cadastrar()
                    break
                case "n" || "N":
                    break
                default:
                    continue
            }
            break
        }

        if (pets) {
            var cliente = new Cliente(nome, nomeSocial, cpf, id, rgs, telefones, pets)
        } else {
            var cliente = new Cliente(nome, nomeSocial, cpf, id, rgs, telefones)
        }

        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}
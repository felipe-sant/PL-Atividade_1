import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Atualizacao from "../atualizar";
import AtualizarPet from "../pet/atualizarPet";
import CadastroPet from "../pet/cadastroPet";
import DeletarPet from "../pet/deletarPet";
import ListagemPets from "../pet/listagemPets";
import CadastroRG from "../rg/cadastroRG";
import CadastroTelefone from "../telefone/cadastroTelefone";

function dateToDate(date:string){
    let partesData = date.split('/')
    let ano = new Number(partesData[2].valueOf()).valueOf()
    let mes = new Number(partesData[1].valueOf()).valueOf()
    let dia = new Number(partesData[0].valueOf()).valueOf()
    return new Date(ano, mes, dia)
}

export default class AtualizarCliente extends Atualizacao {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public atualizar():void {
        while (true) {
            let idCliente = this.entrada.receberNumero("ID do cliente que deseja alterar: ")
            let clienteExiste = false

            this.clientes.forEach(cliente => { if (cliente.id === idCliente) { clienteExiste = true } });

            if (clienteExiste) {
                this.clientes.forEach(cliente => {
                    if (idCliente == cliente.id) {
                        console.log("\nVocê está alterando o cliente:", cliente.nome, "\nCom o ID:", cliente.id, "\n")
                        console.log("-=- Caso não queira mudar um valor, deixe em branco -=-")

                        let newNome = this.entrada.receberTexto("Novo nome do cliente: ")
                        if (newNome == "") { newNome = cliente.nome }

                        console.log()
                        let newNomeSocial = this.entrada.receberTexto("Nome social: ")
                        if (newNomeSocial == "") { newNomeSocial = cliente.nomeSocial }
                        
                        console.log()
                        let opcaocpf = this.entrada.receberTexto("Deseja alterar o cpf? (s/n): ")
                        if (opcaocpf == "s" || opcaocpf == "S") {
                            let valor = this.entrada.receberTexto("Novo CPF: ")
                            let data = this.entrada.receberTexto("Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: ")
                            var newCPF = new CPF(valor, dateToDate(data))
                        } else {
                            newCPF = cliente.getCpf
                        }

                        console.log()
                        let opcaoRg = this.entrada.receberTexto("Deseja adicionar um rg? (s/n): ")
                        if (opcaoRg == "s" || opcaoRg == "S") {
                            let cadastrar = new CadastroRG()
                            if (cliente.getRgs[0].getValor == "") {
                                cliente.setRgs = cadastrar.cadastrar()
                            } else {
                                cadastrar.cadastrar().forEach(rg => {
                                    cliente.getRgs.push(rg)
                                })
                            }
                        } 
                        var newRgs = cliente.getRgs

                        console.log()

                        let opcaoTelefone = this.entrada.receberTexto("Deseja adicionar um telefone? (s/n): ")
                        if (opcaoTelefone == "s" || opcaoTelefone == "S") {
                            let cadastrar = new CadastroTelefone()
                            if(cliente.getTelefones[0].getNumero == ""){
                                cliente.setTelefones = cadastrar.cadastrar()
                            } else {
                                cadastrar.cadastrar().forEach(telefone => {
                                    cliente.getTelefones.push(telefone)
                                })
                            }
                        }
                        let newTelefones = cliente.getTelefones

                        console.log()

                        let newPets = cliente.getPets

                        let opcaoPet = this.entrada.receberTexto("Deseja adicionar/editar/remover um pet? (s/n): ")
                        if (opcaoPet == "s" || opcaoPet == "S") {
                            let execucao = true 
                            while (execucao) {
                                console.log("---------------------------------------------------")
                                console.log(`Opções dos pets do cliente:`, cliente.getId);
                                console.log(`1 - Cadastrar pet`);
                                console.log(`2 - Listar pets`)
                                console.log(`3 - Atualizar pet`);
                                console.log(`4 - Deletar pet`)
                                console.log(`0 - Sair`);
                                console.log("---------------------------------------------------")
                                let opcao = this.entrada.receberNumero("Escolha uma opção: ")
                                switch (opcao) {
                                    case 1:
                                        console.log()
                                        var cadastro = new CadastroPet(newPets)
                                        newPets = cadastro.cadastrar()
                                        break;
                                    case 2:
                                        console.log()
                                        var listar = new ListagemPets(newPets)
                                        listar.listar()
                                        break
                                    case 3:
                                        var atualizar = new AtualizarPet(newPets)
                                        atualizar.atualizar()
                                        break;
                                    case 4:
                                        var deletar = new DeletarPet(newPets)
                                        newPets = deletar.deletar()
                                        break;
                                    case 0:
                                        execucao = false
                                        break;
                                    default:
                                        console.log(`Operação não entendida :(`)
                                }
                            }
                        }
                        cliente.updateCliente(newNome, newNomeSocial, newCPF, newRgs, newTelefones, newPets)
                    }
                })
            } else {
                console.log("O cliente com o ID:", idCliente, "não existe")
            }

            console.log()
            let opcao = this.entrada.receberTexto("Deseja atualizar mais algum cliente? (s/n): ")
            if (opcao == "n" || opcao == "N") { break }
        }
    }
}
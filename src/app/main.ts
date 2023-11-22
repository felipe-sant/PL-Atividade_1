import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import AtualizarCliente from "../negocio/cliente/atualizarCliente";
import CadastroCliente from "../negocio/cliente/cadastroCliente";
import DeletarCliente from "../negocio/cliente/deletarCliente";
import ListagemClientes from "../negocio/cliente/listagemClientes";
import Linkar from "../negocio/links/linkCliente";
import AtualizarProduto from "../negocio/produtos/atualizarProdutos";
import CadastroProduto from "../negocio/produtos/cadastroProdutos";
import DeletarProduto from "../negocio/produtos/deletarProdutos";
import ListagemProdutos from "../negocio/produtos/listagemProdutos";
import AtualizarServico from "../negocio/servicos/atualizarServico";
import CadastroServico from "../negocio/servicos/cadastroServicos";
import DeletarServico from "../negocio/servicos/deletarServico";
import ListagemServicos from "../negocio/servicos/listagemServicos";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Listas from "../negocio/listagens/listas";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Pet from "../modelo/pet";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)

let empresa = new Empresa()
let execucao = true

/* */

let nome1 = "Gabriel"
let nomeSocial1 = ""
let cpf1 = new CPF("12345678910", new Date(1999, 1, 1))
let id1 = 1
let rgs1 = [ new RG("123456789", new Date(1999, 1, 1)), ]
let telefones1 = [ new Telefone("12", "13213213") ]
let cliente1 = new Cliente(nome1, nomeSocial1, cpf1, id1, rgs1, telefones1)

let nome2 = "Bruno"
let nomeSocial2 = ""
let cpf2 = new CPF("22345678920", new Date(2999, 2, 2))
let id2 = 2
let rgs2 = [ new RG("223456789", new Date(2999, 2, 2)), ]
let telefones2 = [ new Telefone("22", "23223223") ]
let cliente2 = new Cliente(nome2, nomeSocial2, cpf2, id2, rgs2, telefones2)

let nome3 = "Caique"
let nomeSocial3 = ""
let cpf3 = new CPF("33345678930", new Date(3999, 3, 3))
let id3 = 3
let rgs3 = [ new RG("333456789", new Date(3999, 3, 3)), ]
let telefones3 = [ new Telefone("33", "33333333") ]
let cliente3 = new Cliente(nome3, nomeSocial3, cpf3, id3, rgs3, telefones3)

let nome4 = "João"
let nomeSocial4 = ""
let cpf4 = new CPF("44345678940", new Date(4999, 4, 4))
let id4 = 4
let rgs4 = [ new RG("443456789", new Date(4999, 4, 4)), ]
let telefones4 = [ new Telefone("44", "44444444") ]
let pets4 = [
    new Pet(1, "Laica", "Vira-lata", "Fêmea", "Cachorro"),
    new Pet(2, "Luna", "Amarelo", "Fêmea", "Gato"),
    new Pet(4, "Rajado", "Branco", "Macho", "Gato")
]
let cliente4 = new Cliente(nome4, nomeSocial4, cpf4, id4, rgs4, telefones4, pets4)

let nome5 = "Pedro"
let nomeSocial5 = ""
let cpf5 = new CPF("55345678950", new Date(5999, 5, 5))
let id5 = 5
let rgs5 = [ new RG("553456789", new Date(5999, 5, 5)), ]
let telefones5 = [ new Telefone("55", "55555555") ]
let pets5 = [
    new Pet(1, "Toby", "Preto", "Macho", "Gato"),
    new Pet(2, "Tobias", "Amarelo", "Macho", "Gato"),
    new Pet(4, "Rajado", "Branco", "Macho", "Gato")
]
let cliente5 = new Cliente(nome5, nomeSocial5, cpf5, id5, rgs5, telefones5, pets5)

let nome6 = "Gustavo"
let nomeSocial6 = ""
let cpf6 = new CPF("66345678960", new Date(6999, 6, 6))
let id6 = 6
let rgs6 = [ new RG("663456789", new Date(6999, 6, 6)), ]
let telefones6 = [ new Telefone("66", "66666666") ]
let cliente6 = new Cliente(nome6, nomeSocial6, cpf6, id6, rgs6, telefones6)

let nome7 = "Yzabela"
let nomeSocial7 = ""
let cpf7 = new CPF("77345678970", new Date(7999, 7, 7))
let id7 = 7
let rgs7 = [ new RG("773456789", new Date(7999, 7, 7)), ]
let telefones7 = [ new Telefone("77", "77777777") ]
let pets7 = [
    new Pet(1, "Rex", "Vira-lata", "Macho", "Cachorro"),
    new Pet(2, "Bolinha", "Vira-lata", "Fêmea", "Cachorro"),
    new Pet(3, "Rajada", "Preto", "Fêmea", "Gato"),
    new Pet(4, "Rajado", "Branco", "Macho", "Gato")
]
let cliente7 = new Cliente(nome7, nomeSocial7, cpf7, id7, rgs7, telefones7, pets7)

let nome8 = "Raissa"
let nomeSocial8 = ""
let cpf8 = new CPF("88345678980", new Date(8999, 8, 8))
let id8 = 8
let rgs8 = [ new RG("883456789", new Date(8999, 8, 8)), ]
let telefones8 = [ new Telefone("88", "88888888") ]
let cliente8 = new Cliente(nome8, nomeSocial8, cpf8, id8, rgs8, telefones8)

let nome9 = "Bianca"
let nomeSocial9 = ""
let cpf9 = new CPF("99345678990", new Date(9999, 9, 9))
let id9 = 9
let rgs9 = [ new RG("993456789", new Date(9999, 9, 9)), ]
let telefones9 = [ new Telefone("99", "99999999") ]
let cliente9 = new Cliente(nome9, nomeSocial9, cpf9, id9, rgs9, telefones9)

let nome10 = "Kauã"
let nomeSocial10 = ""
let cpf10 = new CPF("00345678900", new Date(1999, 10, 10))
let id10 = 10
let rgs10 = [ new RG("003456789", new Date(1999, 10, 10)), ]
let telefones10 = [ new Telefone("00", "00000000") ]
let cliente10 = new Cliente(nome10, nomeSocial10, cpf10, id10, rgs10, telefones10)

let nome11 = "Davi"
let nomeSocial11 = ""
let cpf11 = new CPF("11345678910", new Date(1999, 11, 11))
let id11 = 11
let rgs11 = [ new RG("113456789", new Date(1999, 11, 11)), ]
let telefones11 = [ new Telefone("11", "11111111") ]
let cliente11 = new Cliente(nome11, nomeSocial11, cpf11, id11, rgs11, telefones11)

let nome12 = "Caio"
let nomeSocial12 = ""
let cpf12 = new CPF("12345678910", new Date(1999, 1, 1))
let id12 = 12
let rgs12 = [ new RG("123456789", new Date(1999, 1, 1)), ]
let telefones12 = [ new Telefone("12", "13213213") ]
let cliente12 = new Cliente(nome12, nomeSocial12, cpf12, id12, rgs12, telefones12)

empresa.getClientes.push(cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7, cliente8, cliente9, cliente10, cliente11, cliente12)

/* */

let produto1 = new Produto()
produto1.nome = "Ração"
produto1.id = 1
produto1.valor = 150.99

let produto2 = new Produto()
produto2.nome = "Brinquedo"
produto2.id = 2
produto2.valor = 29.99

let produto3 = new Produto()
produto3.nome = "Remédio"
produto3.id = 3
produto3.valor = 89.99

empresa.getProdutos.push(produto1, produto2, produto3)

/* */

let servico1 = new Servico()
servico1.nome = "Banho"
servico1.id = 1
servico1.valor = 50.99

let servico2 = new Servico()
servico2.nome = "Tosa"
servico2.id = 2
servico2.valor = 199.99

let servico3 = new Servico()
servico3.nome = "Consulta"
servico3.id = 3
servico3.valor = 99.99

empresa.getServicos.push(servico1, servico2, servico3)

/* */

while (execucao) {

    console.log("==================================================")
    console.log("Opções:")
    console.log("1 - Cadastrar/Atualizar/Deletar/Listar clientes")
    console.log("2 - Cadastrar/Atualizar/Deletar/Listar produtos")
    console.log("3 - Cadastrar/Atualizar/Deletar/Listar serviços")
    console.log("4 - Adicionar produtos/servicos consumidos a um cliente")
    console.log("5 - Lista dos clientes que mais consumiram produtos e serviços")
    console.log("6 - Lista dos produtos mais consumidos")
    console.log("7 - Lista dos serviços mais consumidos")
    console.log("0 - Sair")
    console.log("==================================================")

    let entrada = new Entrada()
    let opcao = entrada.receberNumero("Por favor, escolha uma opção: ")

    switch (opcao) {
        case 1:
            let execucaoCliente = true
            while (execucaoCliente) {
                console.log()
                console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-")
                console.log(`Opções:`);
                console.log(`1 - Cadastrar cliente`);
                console.log(`2 - Listar todos os clientes`);
                console.log(`3 - Atualizar cliente`);
                console.log(`4 - Deletar cliente`)
                console.log(`0 - Sair`);
                console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-")

                let opcaoCliente = entrada.receberNumero(`Por favor, escolha uma opção: `)

                switch (opcaoCliente) {
                    case 1:
                        console.log()
                        let cadastro = new CadastroCliente(empresa.getClientes)
                        cadastro.cadastrar()
                        break;
                    case 2:
                        console.log()
                        let listagem = new ListagemClientes(empresa.getClientes)
                        listagem.listar()
                        break;
                    case 3:
                        console.log()
                        let atualizar = new AtualizarCliente(empresa.getClientes)
                        atualizar.atualizar()
                        break;
                    case 4:
                        console.log()
                        let deletar = new DeletarCliente(empresa.getClientes)
                        empresa.setClientes(deletar.deletar())
                        break;
                    case 0:
                        execucaoCliente = false
                        break;
                    default:
                        console.log(`Operação não entendida :(`)
                }
            }
            break
        case 2:
            let execucaoProdutos = true
            while (execucaoProdutos) {
                console.log()
                console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-")
                console.log(`Opções:`);
                console.log(`1 - Cadastrar produto`);
                console.log(`2 - Listar todos os produtos`);
                console.log(`3 - Atualizar produto`);
                console.log(`4 - Deletar produto`)
                console.log(`0 - Sair`);
                console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-")

                let opcaoProduto = entrada.receberNumero(`Por favor, escolha uma opção: `)

                switch (opcaoProduto) {
                    case 1:
                        console.log()
                        let cadastro = new CadastroProduto(empresa.getProdutos)
                        cadastro.cadastrar()
                        break;
                    case 2:
                        console.log()
                        let listagem = new ListagemProdutos(empresa.getProdutos)
                        listagem.listar()
                        break;
                    case 3:
                        let atualizar = new AtualizarProduto(empresa.getProdutos)
                        atualizar.atualizar()
                        break
                    case 4:
                        console.log()
                        let deletar = new DeletarProduto(empresa.getProdutos)
                        empresa.setProdutos(deletar.deletar())
                        break;
                    case 0:
                        execucaoProdutos = false
                        break;
                    default:
                        console.log(`Operação não entendida :(`)
                }
            }
            break
        case 3:
            let execucaoServicos = true
            while (execucaoServicos) {
                console.log()
                console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-")
                console.log(`Opções:`);
                console.log(`1 - Cadastrar serviço`);
                console.log(`2 - Listar todos os serviços`);
                console.log(`3 - Atualizar serviço`);
                console.log(`4 - Deletar serviço`)
                console.log(`0 - Sair`);
                console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-")

                let opcaoServico = entrada.receberNumero(`Por favor, escolha uma opção: `)

                switch (opcaoServico) {
                    case 1:
                        console.log()
                        let cadastro = new CadastroServico(empresa.getServicos)
                        cadastro.cadastrar()
                        break;
                    case 2:
                        console.log()
                        let listagem = new ListagemServicos(empresa.getServicos)
                        listagem.listar()
                        break;
                    case 3:
                        let atualizar = new AtualizarServico(empresa.getServicos)
                        atualizar.atualizar()
                        break
                    case 4:
                        console.log()
                        let deletar = new DeletarServico(empresa.getServicos)
                        empresa.setServicos(deletar.deletar())
                        break;
                    case 0:
                        execucaoServicos = false
                        break;
                    default:
                        console.log(`Operação não entendida :(`)
                }
            }
            break
        case 4:
            let execucaoLink = true
            while (execucaoLink) {
                console.log()
                console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-")
                console.log("1 - Listar clientes")
                console.log("2 - Adicionar produtos/servicos consumidos a um cliente")
                console.log("0 - Sair")
                console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-")

                let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

                switch (opcao) {
                    case 1:
                        console.log()
                        let listagemClientes = new ListagemClientes(empresa.getClientes)
                        listagemClientes.listar()
                        break
                    case 2:
                        let linkar = new Linkar(empresa)
                        linkar.linkar()
                        break
                    case 0:
                        execucaoLink = false
                        break;
                    default:
                        console.log(`Operação não entendida :(`)
                }
            }
            break
        case 5:
            let execucaoListarCliente = true
            let ListarClientes = new Listas(empresa.getClientes)
            while (execucaoListarCliente) {
                console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
                console.log("1 - Cliente que mais consumiram em quantidade")
                console.log("2 - Cliente que mais consumiram em valor")
                console.log("0 - Sair")
                console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-")

                let opcao = entrada.receberNumero("Por favor, escolha uma opção: ")

                switch (opcao) {
                    case 1:
                        ListarClientes.listarClientePorProdutoServico()
                        entrada.receberNumero("")
                        break
                    case 2:
                        ListarClientes.listarClientePorProdutoServicoValor()
                        entrada.receberNumero("")
                        break
                    case 0:
                        execucaoListarCliente = false
                        break
                    default:
                        console.log(`Operação não entendida :(`)
                }
            }
            break
        case 6:
            let execucaoListarProdutos = true
            let listarProdutos = new Listas(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            while (execucaoListarProdutos) {
                console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-")
                console.log("1 - Produtos mais consumidos total")
                console.log("2 - Produtos mais consumidos por tipo de pet")
                console.log("3 - Produtos mais consumidos por raça de pet")
                console.log("0 - Sair")
                console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-")

                let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

                switch (opcao) {
                    case 1:
                        listarProdutos.listarProdutosMaisConsumidos()
                        entrada.receberNumero("")
                        break
                    case 2:
                        listarProdutos.listarProdutosPorTipo()
                        entrada.receberNumero("")
                        break
                    case 3:
                        listarProdutos.listarProdutosPorRaca()
                        entrada.receberNumero("")
                        break
                    case 0:
                        execucaoListarProdutos = false
                        break;
                    default:
                        console.log(`Operação não entendida :(`)
                }
            }
            break
        case 7:
            let execucaoListarServicos = true
            let listarServicos = new Listas(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            while (execucaoListarServicos) {
                console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-")
                console.log("1 - Servicos mais consumidos total")
                console.log("2 - Servicos mais consumidos por tipo de pet")
                console.log("3 - Servicos mais consumidos por raça de pet")
                console.log("0 - Sair")
                console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-")

                let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

                switch (opcao) {
                    case 1:
                        listarServicos.listarServicosMaisConsumidos()
                        entrada.receberNumero("")
                        break
                    case 2:
                        listarServicos.listarServicosPorTipo()
                        entrada.receberNumero("")
                        break
                    case 3:
                        listarServicos.listarServicosPorRaca()
                        entrada.receberNumero("")
                        break
                    case 0:
                        execucaoListarServicos = false
                        break;
                    default:
                        console.log(`Operação não entendida :(`)
                }
            }
            break
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
        }
    }

    
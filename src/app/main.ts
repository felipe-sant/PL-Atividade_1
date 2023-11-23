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
import Listas from "../negocio/listagens/listas";;

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)

let empresa = new Empresa()
let execucao = true

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

    
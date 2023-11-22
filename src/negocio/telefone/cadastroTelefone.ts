import Entrada from "../../io/entrada";
import Telefone from "../../modelo/telefone";
import Cadastro from "../cadastro";

export default class CadastroTelefone extends Cadastro {
    private telefones: Array<Telefone>
    private entrada: Entrada
    constructor() {
        super()
        this.telefones = []
        this.entrada = new Entrada()
    }
    public cadastrar(): Array<Telefone> {
        let continuar = true
        while (continuar) {
            let ddd = this.entrada.receberTexto("Por favor informe o ddd do telefone: ")
            if (ddd == "") { continue }
            let numero = this.entrada.receberTexto("Por favor informe o número: ")
            if (numero == "") { continue}
            this.telefones.push(new Telefone(ddd, numero))
            while (true) {
                let opcao = this.entrada.receberTexto("Deseja cadastrar mais um Telefone? (s/n): ")
                if (opcao == "s" || opcao == "S") {
                    break
                } else if (opcao == "n" || opcao == "N") {
                    continuar = false
                    break
                }
            }
        }
        return this.telefones
    }
}
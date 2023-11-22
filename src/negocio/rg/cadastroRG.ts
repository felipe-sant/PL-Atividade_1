import Entrada from "../../io/entrada";
import RG from "../../modelo/rg";
import Cadastro from "../cadastro";

export default class CadastroRG extends Cadastro {
    private rgs: Array<RG>
    private entrada: Entrada

    constructor(rgs: Array<RG>)
    constructor()
    constructor(rgs?: Array<RG>) {
        super()
        if (rgs) {
            this.rgs = rgs
        } else {
            this.rgs = []
        }
        this.entrada = new Entrada()
    }
    public cadastrar():Array<RG> {
        let continuar = true
        while (continuar) {
            let valorRG = this.entrada.receberTexto("Por favor informe o número do RG: ")
            if (valorRG == "") { continue }
            let dataRG = this.entrada.receberTexto("Por favor informe a data de emissão do RG (dd/mm/aaaa): ")
            if (dataRG !== "") {
                let partesData = dataRG.split("/")
                let ano = new Number(partesData[2].valueOf()).valueOf()
                let mes = new Number(partesData[1].valueOf()).valueOf()
                let dia = new Number(partesData[0].valueOf()).valueOf()
                var dataEmissao = new Date(ano, mes, dia) 
            } else { continue }
            this.rgs.push(new RG(valorRG, dataEmissao))
            while (true) {
                let opcao = this.entrada.receberTexto("Deseja cadastrar mais um rg? (s/n): ")
                if (opcao == "s" || opcao == "S") {
                    break
                } else if (opcao == "n" || opcao == "N") {
                    continuar = false
                    break
                }
            }
            
        }
        return this.rgs
    }
}
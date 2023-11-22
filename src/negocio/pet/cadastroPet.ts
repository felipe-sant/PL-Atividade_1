import Entrada from "../../io/entrada";
import Pet from "../../modelo/pet";
import Cadastro from "../cadastro";

export default class CadastroPet extends Cadastro {
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(pets: Array<Pet>)
    constructor()
    constructor(pets?: Array<Pet>) {
        super()
        if (pets) {
            this.pets = pets
        } else {
            this.pets = []
        }
        this.entrada = new Entrada()
    }

    public cadastrar():Array<Pet> {
        let cadastrarMais = true
        while (cadastrarMais) {
            if (this.pets.length !== 0) {
                var idUltimoPet = this.pets[this.pets.length-1].getId
            } else {
                var idUltimoPet = 0
            }
            let id = idUltimoPet + 1
            let nome = this.entrada.receberTexto("Nome do Pet: ")
            let tipo = this.entrada.receberTexto("Tipo: ")
            let raca = this.entrada.receberTexto("Raça: ")
            let genero = this.entrada.receberTexto("Genero: ")

            let pet = new Pet(id, nome, raca, genero, tipo)
            this.pets.push(pet)

            let perguntarCadastrarMais = this.entrada.receberTexto("Deseja cadastrar mais? (s/n): ")
            if (perguntarCadastrarMais == "n") { cadastrarMais = false }
        }

        return this.pets
    }
}
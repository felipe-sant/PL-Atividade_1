import Entrada from "../../io/entrada";
import Pet from "../../modelo/pet";
import Atualizacao from "../atualizar";

export default class AtualizarPet extends Atualizacao {
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(pets: Array<Pet>) {
        super()
        this.pets = pets
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        while (true) {
            let idPet = this.entrada.receberNumero("ID do pet que deseja alterar: ")
            let petExiste = false

            this.pets.forEach(pet => { if (pet.getId === idPet) { petExiste = true } });

            if (petExiste) {
                this.pets.forEach(pet => {
                    if (idPet == pet.getId) {
                        console.log("Você está alterando o pet:", pet.getNome, "\ncom o ID:", pet.getId, "\n")

                        let newNome = this.entrada.receberTexto("Novo nome do pet: ")
                        if (newNome == "") { newNome = pet.getNome }

                        console.log()
                        let newTipo = this.entrada.receberTexto("Novo tipo: ")
                        if (newTipo == "") { newTipo = pet.getTipo }

                        console.log()
                        let newRaca = this.entrada.receberTexto("Nova raça: ")
                        if (newRaca == "") { newRaca = pet.getRaca }

                        console.log()
                        let newGenero = this.entrada.receberTexto("Novo gênero: ")
                        if (newGenero == "") { newGenero = pet.getGenero }

                        pet.updatePet(newNome, newRaca, newGenero, newTipo)
                    }
                })
            } else {
                console.log("O pet com o ID:", idPet, "não existe")
            }

            console.log()
            let opcao = this.entrada.receberTexto("Deseja alterar outro pet? (s/n): ")
            if (opcao == "n" || opcao == "N") { break }
        }
    }
}
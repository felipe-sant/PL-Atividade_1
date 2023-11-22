import Entrada from "../../io/entrada";
import Pet from "../../modelo/pet";
import Deletar from "../deletar";

export default class DeletarPet extends Deletar {
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(pets: Array<Pet>) {
        super()
        this.pets = pets
        this.entrada = new Entrada
    }
    public deletar():Array<Pet> {
        while (true) {
            let idPet = this.entrada.receberNumero("Id do pet você deseja deletar: ")
            let petExiste = false

            this.pets.forEach(pet => { if (pet.getId === idPet) { petExiste = true } });

            if (petExiste) {
                this.pets = this.pets.filter(pet => pet.getId !== idPet)
                return this.pets
            } else {
                console.log("! pet não existe !\n")
            }
        }
    }
}   
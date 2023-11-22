import Entrada from "../../io/entrada";
import Pet from "../../modelo/pet";
import Listagem from "../listagem";

export default class ListagemPets extends Listagem {
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(pets: Array<Pet>) {
        super()
        this.pets = pets
        this.entrada = new Entrada
    }

    public listar(): void {
        console.log(`- Lista de todos os pets: -`);
        console.log()
        this.pets.forEach(pet => {
            console.log("ID:", pet.getId)
            console.log("Nome:", pet.getNome)
            console.log("Tipo:", pet.getTipo)
            console.log("Raça:", pet.getRaca)
            console.log("Genero:", pet.getGenero)
            console.log()
        });
    }
}
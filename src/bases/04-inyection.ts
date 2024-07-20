import { HttpAdapter, PokeApiAdapter, POkeApiFetchAdapter } from "../api/poke-api.adapter";
import { PokeAPIResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon {
    /**
     *
     */
    // public name: string
    // public id: number
    // constructor(
    //     id: number, name: string
    // ) {
    //     // super();
    //     this.id = id
    //     this.name = name
    // }

    /**
     *
     */

    get imgURL(): string {
        return `http....${this.id}.jpg`
    }

    constructor(
        public readonly id: number,
        public name: string,
        private readonly http: HttpAdapter
    ) { }

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speack() {
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves() {
        const data = await this.http.get<PokeAPIResponse>("https://pokeapi.co/api/v2/pokemon/4")
        console.log(data.moves);

        return data.moves
    }
}
const pokeApiAxios = new PokeApiAdapter()
const pokeApiFetch = new POkeApiFetchAdapter()
export const charmander = new Pokemon(4, "charmander", pokeApiFetch)

// charmander.id = 6
// charmander.name = "lucas"
// console.log(charmander, charmander.imgURL);
// (charmander.scream());
// (charmander.speack());
charmander.getMoves()



export const pokemonId = [, 1, 20, 30, 34, 66]

export const pikachu: Pokemon = {
    id: 1,
    name: "pikachu",
    power: 600
}

interface Pokemon {
    id: number
    name: string
    age?: number
    power?: number
}
console.log(pikachu);

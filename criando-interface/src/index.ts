// Uma interface é outra maneira de     // An interface is another way to 
// declarar um tipo para um objeto,     // declare a type for an object,
// portanto funcionad de forma semelhante   // so it works similarly

// Criando uma interface    // Creating an interface
interface CelestialBody {
    name: string
    mass: number
}

// Interfaces podem ser herdadas ou herdar umas às outras   // Interfaces can be inherited or inherit from others
interface Star extends CelestialBody {
    age: number
    planets: Planet[]
}

interface Planet extends CelestialBody {
    population: number
    createrSatellite: (name: string) => void
}

let sun: Star = {
    name: "Sol",
    mass: 1.989 * (10 ** 30),
    age: 4.603 * (10 ** 9),
    planets: []
}

// classes podem implementar interfaces
// nesse caso ela cria o que chamamos de contrato,
// pois obriga a classe a implementar tudo o que
// foi definido na interface
class MilkWayPlanet implements Planet {
    // em typescript precisamos explicitar os atributos da classe dessa forma
    name: string
    mass: number;
    population: number;

    constructor(name: string, mass: number, population: number) {
        this.name = name
        this.mass = mass
        this.population = population
    }
    createrSatellite!: (name: string) => void
}

// Aliases também podem usar heranças mas co uma 
// sintaxe um pouco diferente
type Asteroid = CelestialBody & {
    size: number
}

// O mesmo é válido para implementação usando Type de objeto
class BigAsteroid implements Asteroid {
    name: string
    mass: number
    size: number

    constructor(n: string, m: number, s: number) {
        this.name = n
        this.mass = m
        this.size = s
    }
}

// Apesar de serem poucas, existem diferenças entre type e interfaces

// Uma delas é a possibilidade de adicionar mais
// propriedades definindo novamente a mesma interface
interface Planet {
    orbitedStar: Star
}

let earth: Planet = {
    name: "Terra",
    mass: 5.972 * Math.pow(10, 24),
    population: 8000000000,
    createrSatellite: (name: string) => {
        //...
    },
    orbitedStar: sun
}


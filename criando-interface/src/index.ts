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
//pois obriga a classe a implementar tudo o que
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


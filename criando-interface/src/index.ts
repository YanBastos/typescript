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

// classes can implement interfaces
// in this case, it creates what we call a contract
// as it forces the class to implement everything that
// was defined in the interface
class MilkWayPlanet implements Planet {
    // in typescript, we nedd to explicitly declare class attributes in this way
    name: string
    mass: number;
    population: number;

    constructor(name: string, mass: number, population: number) {
        this.name = name
        this.mass = mass
        this.population = population
    }
    orbitedStar!: Star
    createrSatellite!: (name: string) => void
}

// Aliases can also use inheritance, but with a 
// slightly different syntax
type Asteroid = CelestialBody & {
    size: number
}

// The same is valid for implemantation using object type
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
// Although few, there are differences between type and interfaces

// One of them is the possibility of adding more 
// properties by redefining the same interface
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


"use strict";
// Uma interface é outra maneira de     // An interface is another way to 
// declarar um tipo para um objeto,     // declare a type for an object,
// portanto funcionad de forma semelhante   // so it works similarly
let sun = {
    name: "Sol",
    mass: 1.989 * (10 ** 30),
    age: 4.603 * (10 ** 9),
    planets: []
};
// classes can implement interfaces
// in this case, it creates what we call a contract
// as it forces the class to implement everything that
// was defined in the interface
class MilkWayPlanet {
    constructor(name, mass, population) {
        this.name = name;
        this.mass = mass;
        this.population = population;
    }
}
// The same is valid for implemantation using object type
class BigAsteroid {
    constructor(n, m, s) {
        this.name = n;
        this.mass = m;
        this.size = s;
    }
}
let earth = {
    name: "Terra",
    mass: 5.972 * Math.pow(10, 24),
    population: 8000000000,
    createrSatellite: (name) => {
        //...
    },
    orbitedStar: sun
};

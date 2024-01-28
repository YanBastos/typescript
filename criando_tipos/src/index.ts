// utilizadno união/union
let option: "Yes" | "no" | "Maybe" // "|" serve como um "ou", ou seja, seu tipo literal é "yes" ou "no"

option = "Maybe" // agraga o valor que será utilizado, já contendo o auto-complete


// ao inves de criar tipos, podemos passar tipos literais ja existentes
let option2: boolean | string | number

option2 = "yan"

//

type Planet = "Mercurio" | "Terra" | "Vênus"

let planet: Planet

planet = "Terra"



let homePlanet: Planet

function checkPlanet(planet: Planet) {
    if (planet === "Terra") {
        console.log(`Estamos no planeta ${planet}`)
    }
}

type GreetingCallback = (name: string) => void

function greet(callbackfn: GreetingCallback) {
    let name = "yan"
    callbackfn(name);
}
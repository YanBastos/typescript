// 1st optional types, is a way of saying that a type may or may not be necessary
function sendSpaceshipEAT(spaceship: { pilot: string, copilot?: string }) {
    // By adding "?", we indicate that the copilot is optional, thus avoiding its typing
    // ...
}

sendSpaceshipEAT({ pilot: 'Marcelo', copilot: 'Yan' });


// 2st optional types, is not sayng that a type

let weed: unknown

input: 'example'
input: 10
input: []

// 3st optional types, is turn of typescript

let smoke: any

input: 'example'
input: 10
input: []

// 4st optional types, is declarate "Never", limited the to nothing 

function verivication(test) {
    if (test) {
    }
    else {

        let _check: never

        let text: _check

        text: ''

        return _check

    }
2
}

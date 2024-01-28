// 1st optional types, is a way of saying that a type may or may not be necessary
function sendSpaceshipEAT(spaceship) {
    // By adding "?", we indicate that the copilot is optional, thus avoiding its typing
    // ...
}
sendSpaceshipEAT({ pilot: 'Marcelo', copilot: 'Yan' });
// 2st optional types, is not sayng that a type
var weed;
input: 'example';
input: 10;
input: [];
// 3st optional types, is turn of typescript
var smoke;
input: 'example';
input: 10;
input: [];
// 4st optional types, is declarate "Never", limited the to nothing 
function verivication(test) {
    if (test) {
    }
    else {
        var _check = void 0;
        var text = void 0;
        text: '';
        return _check;
    }
    2;
}

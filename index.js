var setPilot = function (newPilot, spaceship) {
};
var accelerate0 = function (targetSpeed, spaceship) {
    spaceship.speed = targetSpeed;
};
var sendToMission = function (spaceship) {
    spaceship.inMission = true;
};
var spaceship = {
    name: '',
    pilot: '',
    speed: 0,
    inMission: false,
};
var pilot = "Han Solo";
spaceship.name = "Millenium Falcon";
setPilot(pilot, spaceship),
    accelerate0(50, spaceship),
    sendToMission(spaceship);
console.log(spaceship);
//npx tsc index.ts

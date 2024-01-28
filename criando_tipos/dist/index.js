function sendSpaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("The spaceship ".concat(spaceship.name, ", commanded by Captain ").concat(spaceship.captain, ", has been sent on a mission."));
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reducing speed of ".concat(spaceship.name, " to ").concat(targetSpeed, "..."));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Increasing speed of ".concat(spaceship.name, " to ").concat(targetSpeed, "..."));
    }
    else {
        alert("Maintaining the speed of ".concat(spaceship.name, "..."));
    }
}
var spaceshipName = prompt('Enter the name of the spaceship to be sent:');
var spaceshipCaptain = prompt('Enter the name of the spaceship captain:');
var currentShip = sendSpaceship(spaceshipName, spaceshipCaptain);
var speed = Number(prompt('Enter the speed to which you want to accelerate'));
accelerate(speed, currentShip);

function sendSpaceship(name: string, captain: string) {
  const spaceship = {
    name,
    captain,
    speed: 20,
    inMission: true,
    crew: []
  }

  alert(`The spaceship ${spaceship.name}, commanded by Captain ${spaceship.captain}, has been sent on a mission.`)

  return spaceship
}

function accelerate(targetSpeed: number, spaceship: { name: string; speed: number; }) {
  if (spaceship.speed > targetSpeed) {
    alert(`Reducing speed of ${spaceship.name} to ${targetSpeed}...`)
  } else if (spaceship.speed < targetSpeed) {
    alert(`Increasing speed of ${spaceship.name} to ${targetSpeed}...`)
  } else {
    alert(`Maintaining the speed of ${spaceship.name}...`)
  }
}

const spaceshipName = prompt('Enter the name of the spaceship to be sent:')
const spaceshipCaptain = prompt('Enter the name of the spaceship captain:')

const currentShip = sendSpaceship(spaceshipName, spaceshipCaptain)

const speed = Number(prompt('Enter the speed to which you want to accelerate'))

accelerate(speed, currentShip)

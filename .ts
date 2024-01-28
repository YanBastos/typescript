function sendInMission(spaceship: { 
    name: string, 
    crewLimit: number, 
    crew: string[], 
    inMission: boolean }) {
        
    if (spaceship.inMission) {
      alert(`${spaceship.name} cannot be sent. Spaceship already on a mission.`)
    } else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
      alert(`${spaceship.name} cannot be sent. Insufficient crew.`)
    } else {
      spaceship.inMission = true
  
      alert(`${spaceship.name} sent on the mission!`)
    }
  }
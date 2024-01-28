const spaceships = []; // Used to add spaceships, which may be more than one

function addSpaceship(name, pilot, crewLimit) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    };

    spaceships.push(spaceship);
    alert(`The spaceship ${spaceship.name} has been registered`);
}

function findSpaceship(name) {
    let spaceship = spaceships.find(ship => ship.name === name);

    return spaceship;
}

function addCrewMember(member, spaceship) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert(`${member} cannot be added to the crew, limit reached`);
    } else {
        spaceship.crew.push(member);
        alert(`${member} added to the crew of ${spaceship.name}`);
    }
}

function sendInMission(spaceship) {
    if (spaceship.inMission) {
        alert(`${spaceship.name} cannot be sent, spaceship already on a mission`);
    } else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert(`${spaceship.name} cannot be sent, insufficient crew`);
    } else {
        spaceship.inMission = true;
        alert(`${spaceship.name} sent on the mission`);
    }
}

function firstMenuOption() {
    const name = prompt('What is the name of the spaceship to be registered?');
    const pilot = prompt(`What is the name of the pilot of ${name}`);
    const crewLimit = Number.parseInt(prompt(`How many crew members does ${name} support?`));

    const confirmation = confirm(`Confirm registration of the spaceship ${name}\nPilot: ${pilot}\nCrew Size: ${crewLimit}`);

    if (confirmation) {
        addSpaceship(name, pilot, crewLimit);
    }
}

function secondMenuOption() {
    const member = prompt('What is the name of the crew member?');
    const spaceshipName = prompt(`For which spaceship should ${member} be assigned?`);

    const spaceship = findSpaceship(spaceshipName);

    if (spaceship) {
        const confirmation = confirm(`Confirm the inclusion of ${member} in the crew of ${spaceship.name}?`);

        if (confirmation) {
            addCrewMember(member, spaceship);
        }
    }
}

function thirdMenuOption() {
    const spaceshipName = prompt(`What is the name of the spaceship to be sent?`);

    const spaceship = findSpaceship(spaceshipName);

    if (spaceship) {
        const confirmation = confirm(`Confirm sending ${spaceship.name} on the mission?`);

        if (confirmation) {
            sendInMission(spaceship);
        }
    }
}

function fourthMenuOption() {
    let list = 'Registered spaceships: \n'

    spaceships.forEach(spaceship => {
        list += `
        Spaceship: ${spaceship.name}
        Pilot: ${spaceship.pilot}
        In mission? ${spaceship.inMission ? 'Yes' : "No"}
        Max crew tripulation: ${spaceship.crewLimit}
        Tripulation: ${spaceship.crew.length}
        `

        spaceship.crew.forEach(member => {
            list += `- ${member}\n`
        })
    })

    alert(list)
}

// menu

let userOption = 0


while (userOption !== 5) {
    const menu = `Main Panel 
    1 - Register a new spaceship
    2 - Add cre member
    3 - Send spaceship on a mission
    4 - List registered spaceships
    5 - exit `


    userOption = Number.parseInt(prompt(menu));

    switch (userOption) {
        case 1:
            firstMenuOption();
            break;

        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            alert('Closing the system...');
            break;
            default:
                alert('Invalid option!');
                break
    }
}




type PlanetSituation = 'Habitado' | 'Habitavel' | 'Inabitavel' | 'Inexplorado'

type PlanetCordinates = [number, number, number, number]

type Planet = {
    name: string
    cordinates: PlanetCordinates
    situation: PlanetSituation
    satellites: string[]

}

const planets: Planet[] = []

function addPlanet(name: string, cordinates: PlanetCordinates, situation: PlanetSituation) {
    planets.push({
        name,
        cordinates,
        situation,
        satellites: []
    })
    alert(`O planeta ${name} foi registrado com sucesso`)
}

function findPlanet(name: string) {
    const planet = planets.find(planet => planet.name === name)

    return planet ?? false
}

function updateSituation(situation: PlanetSituation, planet: Planet) {
    planet.situation = situation

    alert(`A situação do planeta ${planet.name} foi atualizada para "${situation}".`)
}


function addSatellite(name: string, planet: Planet) {
    planet.satellites.push(name)

    alert(`O satellite ${name} foi adicionado ao planeta ${planet.name}`)
}

function removeSatellite(name: string, planet: Planet) {
    planet.satellites = planet.satellites.filter(satellite => satellite !== name)

    alert(`O satellite ${name} foi removido do planeta ${planet.name}`)
}


function promptValidSituation() {
    let situation: PlanetSituation | null = null; // Inicialize com null

    let validSituation = false;

    while (!validSituation) {
        const situationInput = prompt('Informe a situação do planeta?\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado');

        switch (situationInput) {
            case '1':
                situation = 'Habitado';
                validSituation = true;
                break;
            case '2':
                situation = 'Habitavel';
                validSituation = true;
                break;
            case '3':
                situation = 'Inabitavel';
                validSituation = true;
                break;
            case '4':
                situation = 'Inexplorado';
                validSituation = true;
                break;
            default:
                alert('Situação inválida!');
                break;
        }
    }

    // Verifica se situation não é null antes de retornar
    if (situation !== null) {
        return situation;
    } else {
        throw new Error('Situação inválida!'); // Lança um erro se situation for null
    }
}


function promptValidPlanet(callback: (planet: Planet) => void) {
    const planetName = prompt('Informe o nome do planeta:')

    if (planetName !== null) {
        const planet = findPlanet(planetName) //erro

        if (planet) {
            callback(planet)
        } else {
            alert('Planeta não encontrado! Retornando ao menu...')
        }
    } else {
        alert(' Entrada inválida')
    }

}

function firstMenuOption() {
    const name = prompt('Informe o nome do planeta:');
    if (name === null || name === undefined) return;

    const coordinateA = Number(prompt('Informe a primeira coordenada:'));
    if (isNaN(coordinateA)) return;

    const coordinateB = Number(prompt('Informe a segunda coordenada:'));
    if (isNaN(coordinateB)) return;

    const coordinateC = Number(prompt('Informe a terceira coordenada:'));
    if (isNaN(coordinateC)) return;

    const coordinateD = Number(prompt('Informe a quarta coordenada:'));
    if (isNaN(coordinateD)) return;

    const situation = promptValidSituation();
    if (situation === null || situation === undefined) return;

    const confirmation = confirm(`Confirma o registro do planeta ${name}?
    Coordenadas: (${coordinateA}, ${coordinateB}, ${coordinateC}, ${coordinateD})
    Situação: ${situation}`)

    if (confirmation) {
        addPlanet(name, [coordinateA, coordinateB, coordinateC, coordinateD], situation) //erro
    }
}

function secondMenuOption() {

    promptValidPlanet(planet => {
        const situation = promptValidSituation()
        updateSituation(situation, planet)
    })
}

function thirdMenuOption() {
    promptValidPlanet(planet => {
        const satellite = prompt('informe o nome do satélite a ser adicionado:');
        if (satellite !== null) { // Verifica se satellite não é null
            addSatellite(satellite, planet);
        } else {
            alert('Entrada inválida! Retornando ao menu...');
        }
    });
}

function fourthMenuOption() {
    promptValidPlanet(planet => {
        const satellite = prompt('Informe o nome do satélite a ser removido:');
        if (satellite !== null) { // Verifica se satellite não é null
            removeSatellite(satellite, planet);
        } else {
            alert('Entrada inválida! Retornando ao menu...');
        }
    });
}


function fifthMenuOption() {
    let list = 'Planetas:/n'


    planets.forEach(planet => {
        const [a, b, c, d] = planet.cordinates

        list == `
        Nome: ${planet.name}
        Cordenadas: (${a},${b},${c},${d})
        Situação: ${planet.situation}
        Nome: ${planet.satellites.length}
        `

        planet.satellites.forEach(satellite => {
            list += `\n Satélite: ${satellite}/n`
        })
    })
    alert(list)
}

let userOption: string | null = "0"

while (userOption !== "6") {
    const menu = ` Menu
    1 -  Registrar um novo planeta
    2 - Atualizar situação do planeta
    3 - Adicionar um satélite ao planeta
    4 -  Remover um satélite do planeta
    5 - Listar planetas
    6 - Sair    
    `

    // userOption = Number.parseInt(prompt(menu)) // erro

    const userInput = prompt(menu);

    if (userInput !== null) {
        userOption = userInput.trim();
    } else {
        userOption = "6";

        switch (userOption) {
            case "1":
                firstMenuOption()
                break
            case "2":
                secondMenuOption()
                break
            case "3":
                thirdMenuOption()
                break
            case "4":
                fourthMenuOption()
                break
            case "5":
                fifthMenuOption()
                break
            case "6":
                alert('Encerramento do sistema...')
                break
            default: alert('Opção inválida! Retornado ao painel principal...')
                break;
        }
    }
}
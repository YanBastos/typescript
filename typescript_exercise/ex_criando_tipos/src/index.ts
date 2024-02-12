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
    let situation: PlanetSituation
    let validSituation = false

    while (!validSituation) {
        const situationInput = prompt('Informe a situação do planeta?\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado')

        switch (situationInput) {
            case '1':
                situation = 'Habitado'
                validSituation = true
                break;
            case '2':
                situation = 'Habitavel'
                validSituation = true
                break;
            case '3':
                situation = 'Inabitavel'
                validSituation = true
                break;
            case '4':
                situation = 'Inexplorado'
                validSituation = true
                break;
            default:
                alert('Situação inválida!')
                break;
        }
    }
}


function promptValidPlanet(callback: (planet: Planet) => void) {
    const planetName = prompt('Informe o nome do planeta:')
    const planet = findPlanet(planetName)

    if (planet) {
        callback(planet)
    } else {
        alert('Planeta não encontrado! Retornando ao menu...')
    }
}

function firstMenuOption() {
    const name = prompt('informe o nome do planeta:')
    const coordinateA = Number(prompt('Informe a primeira coordenada:'))
    const coordinateB = Number(prompt('Informe a segunda coordenada:'))
    const coordinateC = Number(prompt('Informe a terceira coordenada:'))
    const coordinateD = Number(prompt('Informe a quarta coordenada:'))

    const situation = promptValidSituation()

    const confirmation = confirm(`Confirma o registro do planeta ${name}?
    Coordenadas: (${coordinateA}, ${coordinateB}, ${coordinateC}, ${coordinateD})
    Situação: ${situation}`)

    if(confirmation) {
        addPlanet(name, [coordinateA, coordinateB, coordinateC, coordinateD], situation)
    }
}
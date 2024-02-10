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


function promptValidPlanet(callbackfn: (planet: Planet) => void) {
    const planetName= prompt('Informe o nome do planeta')
    const planet = findPlanet(planetName)

    if (planet === null) {
        callbackfn(planet)
    } else { alert("Planeta não encontrado") }
}
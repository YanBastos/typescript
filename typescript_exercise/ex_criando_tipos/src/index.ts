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

function updateSituation(situation: PlanetSituation, planet: Planet){
    planet.situation = situation

    alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}`)
}
"use strict";
const planets = [];
function addPlanet(name, cordinates, situation) {
    planets.push({
        name,
        cordinates,
        situation,
        satellites: []
    });
    alert(`O planeta ${name} foi registrado com sucesso`);
}
function findPlanet(name) {
    const planet = planets.find(planet => planet.name === name);
    return planet !== null && planet !== void 0 ? planet : false;
}
function updateSituation(situation, planet) {
    planet.situation = situation;
    alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}`);
}
function addSatellite(name, planet) {
    planet.satellites.push(name);
    alert(`O satellite ${name} foi adicionado ao planeta ${planet.name}`);
}
function removeSatellite(name, planet) {
    planet.satellites = planet.satellites.filter(satellite => satellite !== name);
    alert(`O satellite ${name} foi removido do planeta ${planet.name}`);
}

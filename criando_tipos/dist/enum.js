// conjunto de constante com nomes atribuidos que ajudam e facilitam de ser referenciado no nosso codigo
var planets;
(function (planets) {
    planets[planets["MERCURY"] = 0] = "MERCURY";
    planets[planets["VENUS"] = 1] = "VENUS";
    planets[planets["HEART"] = 2] = "HEART";
    planets[planets["MARACH"] = 3] = "MARACH";
})(planets || (planets = {}));

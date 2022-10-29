const yargs = require("./crear-persona")
const fs = require("fs");



const crearPersona = (n, e, s) => {

    if (fs.readFileSync("./data/personas.json", "utf8")) {
        let data = fs.readFileSync("./data/personas.json", "utf8");

        /*  obtenemos el archivo json y lo parseamos para poder agregarle un push
         del nuevo dato ingresado y lo sobreescribimos nuevamente */

        data = JSON.parse(data)
        let ingresado = {
            nombre: n,
            edad: e,
            sexo: s,
        }
        data.push(ingresado)
        data = JSON.stringify(data)

        fs.writeFileSync("./data/personas.json", data, "utf8");
    }

    else {

        let ingresado = {
            nombre: n,
            edad: e,
            sexo: s,
        }
        let data = [];
        data.push(ingresado)
        data = JSON.stringify(data)

        fs.writeFileSync("./data/personas.json", data, "utf8")

    }
}


module.exports = {
    crearPersona,
}
const fs = require('fs');

const funGeneros = () => {

    try {
        let masculino = 0;
        let femenino = 0;

        let data = fs.readFileSync("./data/personas.json", "utf8");
        data = JSON.parse(data)

        data.forEach(item => {
            (item.sexo === "masculino") ? masculino++ : femenino++
        })

        console.log(`la cantidad de personas de genero masculino es: ${masculino}`)
        console.log(`la cantidad de personas de genero femeninno es: ${femenino}`)

    } catch (error) {
        console.log("No hay datos ingresados... ejecute node crear-persona.js")
    }
}



funGeneros();
const fs = require('fs');


const funMayMenors = () => {

    let data = fs.readFileSync("./data/personas.json", "utf8");
    data = JSON.parse(data)

    data.forEach(item => {

        if (JSON.parse(item.edad) >= 18) {
            item.estado = "mayor de edad";
        }

        else {
            item.estado = "menor de edad";
        }

    })

    console.log(data);

}


funMayMenors()
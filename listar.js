const fs = require('fs');



const listar = () => {

    let data = fs.readFileSync("./data/personas.json", "utf8");

    data = JSON.parse(data);

    data.forEach(item => console.log(item));


}


listar();
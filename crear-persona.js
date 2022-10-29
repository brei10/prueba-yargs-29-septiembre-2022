
const { crearPersona } = require("./addPerson")


const argv = require('yargs')
    .option('n', {
        alias: 'nombre',
        type: 'string',
        demandOption: true,
        describe: 'escribe -n seguido del nombre'
    })
    .option('e', {
        alias: 'edad',
        type: 'number',
        demandOption: true,
        describe: 'escribe el comando -e seguido de la edad'
    })
    .option('s', {
        alias: 'sexo',
        type: 'string',
        demandOption: true,
        describe: 'escribe -s seguido de femenino o masculino'
    })
    .check((argv, options) => {
        if (argv.s != "masculino" && argv.s != "femenino") {
            throw "porfavor digite masculino o femenino"
        }
        return true;
    })
    .argv;



crearPersona(argv.n, argv.e, argv.s)



module.exports = argv;










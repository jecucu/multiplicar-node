const { crearArchivo, listar } = require('./multiplicar/multiplicar.js');
// const mult = require('./multiplicar/multiplicar.js').crearArchivo;
const { argsv } = require('./multiplicar/yargs.js')

const colors = require('colors/safe')

console.log(argsv)
console.log(argsv._)

let comando = argsv._[0];

switch (comando) {
    case 'listar':
        console.log(listar(argsv.base, argsv.limite));
        break;
    case 'crear':

        crearArchivo(argsv.base, argsv.limite).then(archivo => {
            console.log(`Archivo creado ${archivo.blue}`)
            console.log(`Archivo creado `, colors.red(archivo))
        }).catch(error => {
            console.log(error)
        });
        break;
    default:
        console.log('Comando no valido');

}


// Recibo el parametro por linea de comando (node app.js base=7)
// let argv = process.argv;
// let parametro = argv[2];
// let param = parametro.split('=')[1];


// crearArchivo(param).then(archivo => {
//     console.log(`Archivo creado ${archivo}`)
// }).catch(error => {
//     console.log(error)
// });
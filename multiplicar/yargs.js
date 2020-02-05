const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argsv = require('yargs')
    .command('listar', 'Listar la tabla de multiplicar', {
        opciones
    })
    .command('crear', 'Crea la tabla de multiplicar', {
        opciones
    })
    .help()
    .argv;

module.exports = {
    argsv
};
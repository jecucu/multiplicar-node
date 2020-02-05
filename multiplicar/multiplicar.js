const fs = require('fs');
let data = '';

const colors = require('colors')

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            return reject('No es un numero');
        }
        for (let i = 1; i <= limite; i++) {
            // console.log(`${ base } * ${ i } = ${ i * base }`);
            data += `${ base } * ${ i } = ${ i * base }\n`;
        }
        fs.appendFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) return reject(err);
            return resolve(`tabla-${base}.txt`);
        })
    })
}


let listar = (base, limite = 10) => {
    console.log('*****************'.green);
    console.log(`tabla del ${base}`.green);
    console.log('*****************'.green);
    for (let i = 1; i <= limite; i++) {
        // console.log(`${ base } * ${ i } = ${ i * base }`);
        console.log(`${ base } * ${ i } = ${ i * base }`);
    }

}

module.exports = {
    crearArchivo,
    listar
}
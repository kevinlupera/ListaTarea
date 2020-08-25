const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        description: description
    })
    .command('actualizar', 'Actualizar un elemento por hacer', {
        description: description,
        completado: completado
    })
    .command('borrar', 'Borrar un elemento por hacer', {
        description: description
    })
    .help()
    .argv;

module.exports = {
    argv
}
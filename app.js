//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.description);
        console.log(tarea);
        console.log('Crer por hacer');
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('==========');
            console.log(tarea.descripcion);
            console.log(tarea.completado);
            console.log('==========');
        }
        break;
    case 'actualizar':
        console.log('Actualizar una tarea por hacer');
        let actualizado = porHacer.actualizar(argv.description, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        console.log('Eliminar una tarea por hacer');
        let borrado = porHacer.borrar(argv.description);
        console.log(borrado);
        break;
    default:
        console.log('Comando no es reconocido');
        break;
}
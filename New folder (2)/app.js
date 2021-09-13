const tareas = require('./tareas.json')

const lista = process.argv[2];

switch(lista){
    case 'lista':
        console.log(tareas[1]);
        break;
    case undefined:
        console.log('Atención: Tienes que pasar una acción');
        break;
    default:
        console.log('No entiendo que quieres hacer');
    break
}
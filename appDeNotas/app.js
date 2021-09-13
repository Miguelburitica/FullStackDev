const fs = require("fs")
const funcionesDeTareas = require("./funcionesDeTareas");
const tareas = require("./tareas.json")

const opcion = process.argv[2];
const escribirJSON = (tareasEntrada) => {
    const tareasJSON = JSON.stringify(tareasEntrada)
    fs.writeFileSync("./tareas.json", tareasJSON, null, 4)
}

const guardarTarea = (tareaObj) => {
    
}


switch (opcion) {
    case "listar":
        funcionesDeTareas.listar();
        break;

    case undefined:                                                              
        funcionesDeTareas.alertaUndefined();
        break

    default:
        funcionesDeTareas.noEntender();
        break;
}

escribirJSON()

module.exports = tareas;
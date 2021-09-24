const tareas = require("./tareas.json");

const listar = function (){
    let contador = 0;
    tareas.forEach((elemento) => {
        console.log(++contador + ".");
        console.log(elemento);
    })
}

const alertaUndefined = () => console.log("Atención - Tienes que pasar una acción");

const noEntender = () => console.log("No entiendo qué quieres hacer.");

const leerPorEstado = function (estado) {
    
}

const filtrarPorEstado = () => 


module.exports = {listar, alertaUndefined, noEntender};
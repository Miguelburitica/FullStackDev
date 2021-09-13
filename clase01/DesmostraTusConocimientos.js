function sumatoriaBajoImporte(importes) { //Escribí la función sumatoriaBajoImporte la cual recibiendo un array con importes nos devuelva el resultado final de la suma de los 
    let suma = 0;                         //importes de todos los meses que tienen ganancia, a excepción de los que superen un importe de $ 1.000
    for (let i = 0; i < importes.length; i++) {
        if (importes[i] <= 1000 && importes[i] >= 0) {
            suma += importes[i];
        }
    }
    return suma
}

function asientosDisponibles(asientosLibres, asientoUsuario) {                            //Nos piden que escribamos la función asientosDisponibles(), que tome como parámetro un conjunto de asientos 
    if (asientosLibres.indexOf(asientoUsuario) != -1) {                                   //disponibles y el asiento que quiere ocupar la persona. Nuestra función deberá verificar si el asiento 
        return "Felicitaciones, el asiento número " + asientoUsuario + " está disponible" //solicitado se encuentra disponible y devolverle un mensaje claro y prolijo al cliente como en los ejemplos siguientes:
    }
    else {
        return "Lo sentimos, el asiento número " + asientoUsuario + " está ocupado, pero aún quedan " + asientosLibres.length + " asientos disponibles"
    }
}

function reporteDePasajeros(estacion) {
    let pasajeros = 200;
    let mensajito = [];
    for (let i = 0; i <= estacion; i++) {
        if (i != 5 && i > 0) {
            pasajeros += 20
        } else if (i == 5){
            pasajeros += 40
        }
        mensajito.push("En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren")
    }
    return mensajito
}

console.log(reporteDePasajeros(5))



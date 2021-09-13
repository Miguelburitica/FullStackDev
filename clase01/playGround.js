function asientosDisponibles(asientosLibres, asientoUsuario){
    if (asientosLibres.indexOf(asientoUsuario) != -1) {
        return "Felicitaciones, el asiento número " + asientoUsuario + " está disponible"
    }
    else{
        return "Lo sentimos, el asiento número " + asientoUsuario + " está ocupado, pero aún quedan " + asientosLibres.length + " asientos disponibles"
    }
}


console.log(asientosDisponibles([3, 15, 18, 25], 78))



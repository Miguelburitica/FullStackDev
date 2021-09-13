function cantidadDeMesesConGanancia(unPeriodo) {
    let cantidad = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        if (unPeriodo[i] > 0) {
            cantidad += 1;
        }
    }
    return cantidad;
}

console.log(cantidadDeMesesConGanancia([2, 4, -5, 0, 80]))

 




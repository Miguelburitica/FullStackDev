const papitasIniciales = window.prompt("\t Ingresa el numero de paquetes de papas incial: ");

function maximoPromo(valorInicialAConsiderar) {
    if (valorInicialAConsiderar > 1) {
        let papitasExtras = 0;
        let papitasSobrantes = 0;
        while (valorInicialAConsiderar > 1) {
            papitasExtras = papitasExtras + Math.floor(valorInicialAConsiderar / 3)
            papitasSobrantes = papitasSobrantes + Math.floor(valorInicialAConsiderar % 3)
            valorInicialAConsiderar = Math.floor(valorInicialAConsiderar / 3)
        }
        return papitasExtras + maximoPromo(papitasSobrantes)
    } else {
        return (0);
    }
}

console.log("\t Los paquetes extras de papas producidos a partir de la promoción son: ", maximoPromo(papitasIniciales));
console.log("\t Dejando un total de ", papitasIniciales + maximoPromo(papitasIniciales), " paquetes de papas.");


const TranspuestaMatriz = function(matrizA){
    let matrizT = []
    for (let i = 0; i < matrizA.length; i++) {
        let matrizpT = []
        for (let j = 0; j < matrizA.length; j++) {
            matrizpT.push(matrizA[j][i])
        }
        matrizT.push(matrizpT);
    }
    return matrizT
}

module.exports = TranspuestaMatriz;

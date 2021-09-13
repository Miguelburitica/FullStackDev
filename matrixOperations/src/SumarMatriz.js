const Zeros = require("./Zeros.js")

const SumaMatriz = function (matrizA, matrizB){
    let matrizC = Zeros(matrizA.length)
    for (let i = 0; i < matrizA.length; i++) {
        for (let j = 0; j < matrizB.length; j++) {
            matrizC[i][j] = matrizA[i][j] + matrizB[i][j]
        }
    }
    return matrizC
}

module.exports = SumaMatriz

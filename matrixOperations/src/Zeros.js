const ZerosMatriz = function(n){
    let matrizA = []
    let matrizB = []
    for (let i = 0; i < n; i++) {
        matrizA.push(0)
    }
    for (let j = 0; j < n; j++) {
        matrizB.push(matrizA)
    }
    return matrizB
}

const ZerosArray = function (n){
    let array = []
    for (let i = 0; i < n; i++) {
        array.push(0)        
    }
    return array
}

module.exports = {ZerosMatriz, ZerosArray}

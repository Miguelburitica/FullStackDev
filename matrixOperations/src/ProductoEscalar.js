const ProductoEscalar = function (matrizA, e) {
    let matrizC = []
    let n = matrizA.length;
    let m = matrizA[0].length;
    for (let i = 0; i < n; i++) {
        let matrizpC = []
        for (let j = 0; j < m; j++) {
            matrizpC.push(e * matrizA[i][j])
        }
        matrizC.push(matrizpC);
    }
    return matrizC
}

module.exports = ProductoEscalar;








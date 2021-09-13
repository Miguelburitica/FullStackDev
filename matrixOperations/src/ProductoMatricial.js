const ProductoMatricial = function(m, n = m, p = m, matrizA, matrizB){
    let matrizC = []
    let matrizpC = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let placeHolderMatrizC = 0;
            for (let k = 0; k < p; k++) {
                placeHolderMatrizC += matrizA[i][k] * matrizB[k][j];
            }
            matrizpC.push(placeHolderMatrizC);
        }
        matrizpC = []
    }
    return matrizC
}

console.log(ProductoMatricial(2, 2, 2, [[1, 2], [3, 4]], [[5, 6], [7, 8]]));

module.exports = ProductoMatricial

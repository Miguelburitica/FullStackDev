const MatrixMultiplication = function(matrixA, matrixB, m, n = m, p = m){
    let matrixC = []
    let matrixpC = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let placeHolderMatrixC = 0;
            for (let k = 0; k < p; k++) {
                placeHolderMatrixC += matrixA[i][k] * matrixB[k][j];
            }
            matrixpC.push(placeHolderMatrixC);
        }
        matrixC.push(matrixpC);
        matrixpC = []
    }
    return matrixC
}

module.exports = MatrixMultiplication

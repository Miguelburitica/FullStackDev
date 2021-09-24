const ScalarProduct = function (matrixA, e) {
    let matrixC = []
    let n = matrixA.length;
    let m = matrixA[0].length;
    for (let i = 0; i < n; i++) {
        let matrixpC = []
        for (let j = 0; j < m; j++) {
            matrixpC.push(e * matrixA[i][j])
        }
        matrixC.push(matrixpC);
    }
    return matrixC
}

module.exports = ScalarProduct;








const TransposeMatrix = function(matrixA){
    let matrixT = []
    for (let i = 0; i < matrixA.length; i++) {
        let matrixpT = []
        for (let j = 0; j < matrixA.length; j++) {
            matrixpT.push(matrixA[j][i])
        }
        matrixT.push(matrixpT);
    }
    return matrixT
}

module.exports = TransposeMatrix;

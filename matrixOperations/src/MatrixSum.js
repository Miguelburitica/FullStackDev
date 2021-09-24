const MatrixSum = function (matrixA, matrixB){
    let matrixC = []
    let matrixphC = []
    let x = matrixA.length >= matrixB ? matrixA.length : matrixB.length;
    let y = matrixA[0].length >= matrixB[0].length ? matrixA[0].length : matrixB[0].length;
    
    for (let i = 0; i < x; i++) {
        let matrixpC = 0
        for (let j = 0; j < y; j++) {
            if (matrixA[i] == undefined ){
                matrixpC = 0 + matrixB[i][j]
            } else if(matrixB[i] == undefined){
                matrixpC = matrixA[i][j] + 0;
            } else {
                matrixpC = matrixA[i][j] + matrixB[i][j]
            }
            console.log(matrixpC);
            matrixphC.push(matrixpC);
            matrixpC = 0
        }
        matrixC.push(matrixphC);
        matrixphC = [];
    }
    return matrixC
}

console.log(MatrixSum([[1], [2], [9], [10]], [[3, 4, 5], [6, 7, 8]]));

module.exports = MatrixSum

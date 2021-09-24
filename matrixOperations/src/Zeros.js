const Zeros = function(n, m=n){
    let matrixA = []
    let matrixB = []
    for (let i = 0; i < n; i++) {
        matrixA.push(0)
    }
    for (let j = 0; j < m; j++) {
        matrixB.push(matrixA)
    }
    return matrixB
}

module.exports = Zeros

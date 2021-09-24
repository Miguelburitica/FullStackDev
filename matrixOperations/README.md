# A few matrix's operations

## 1. The scalar product's method

### 1.1 Arguments

```js
    ProductoEscalar(matrixA, e)
```

- $matrixA$ : A not necessary square matrix.
- $e$ : a real number.

### 1.2 Outcome

A new matrix where the scalar product was aplicate with the $e$ factor over $matrixA$.

## 2 The matrix multiplication's method

### 2.1 Arguments

```js
    MatrixMultiplication(matrixA, matrixB, m, n = m, p = m)
```

- $m$ : the number of rows of the first matrix.
- $n$ : the number of columns of the second matrix (optional if your couple of matrices are square, it's enought with the first parameter).
- $p$ : the number of first's columns and the second's rows (optional if your couple of matrices are square, it's enought with the first parameter).
- $matrixA$ : the first matrix, doesn't matter if aren't square, by the way you need have coherent with the other parameters.
- $matrixB$ : the second matrix, doesn't matter if aren't square, by the way you need have coherent with the other parameters.

### 2.2 Outcome

A resulting matrix with dimensions $m \cdot n$

## 3 The matrix sum's method

### 3.1 Arguments

```js
    MatrixSum(matrixA, matrixB)
```

- $matrixA$ : Don't matter the  matrix's dimentions, it's ok.

- $matrixB$ : Don't matter the  matrix's dimentions, it's ok.

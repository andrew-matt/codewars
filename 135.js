function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    const valuesAmount = A.filter(value => value === A[i]).length
    if (valuesAmount % 2 !== 0) {
          return A[i]
    }
  }
}
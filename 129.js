function arrayDiff(a, b) {
  for (let i = 0; i < b.length; i++) {
    a = a.filter(val => val !== b[i])
  }
  return a
}
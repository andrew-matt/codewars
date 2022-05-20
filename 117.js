function digital_root(n) {
  if (n === 0) {
    return 0
  }
  let result = n.toString().split('').reduce((a, b) => +a + +b)
  if (result.toString().length > 1) {
    return digital_root(result)
  }
  return result
}
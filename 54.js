function digitize(n) {
  let array = []
  let string = n.toString()
  for (let i = string.length - 1; i !== -1; i--) {
    array.push(Number(string[i].slice()))
  }
  return array
}
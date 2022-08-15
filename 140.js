function XO(str) {
    let x = 0
    let o = 0
    for (let i = 0; i < str.length; i++) {
      if (str[i].toUpperCase() === 'x'.toUpperCase()) {
        x++
      } else if (str[i].toUpperCase() === 'o'.toUpperCase()) {
        o++
      }
    }
  return x === o
}
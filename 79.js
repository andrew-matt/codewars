function sumArray(array) {
  if (array === null || array === undefined || array.length < 3) {
    return 0
  } else {
  let min = array.reduce((acc, cur) => acc < cur ? acc : cur)
  let max = array.reduce((acc, cur) => acc > cur ? acc : cur)
  return array.reduce((acc, cur) => acc + cur) - min - max  
    }
}
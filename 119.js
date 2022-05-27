function moveZeros(arr) {
  let arr1 = arr.filter(el => el !== 0)
  let arr2 = arr.filter(el => el === 0)
  return arr1.concat(arr2)
}
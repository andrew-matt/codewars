function fakeBin(x){
  let xArr = x.split('')
  for (let i = 0; i < xArr.length; i++) {
    if (Number(xArr[i]) < 5) {
      xArr[i] = 0
    } else {
      xArr[i] = 1
    }
  }
  let xStr = xArr.join('')
  return xStr
}
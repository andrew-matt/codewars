function correct(string) {
let strArr = string.split('')
	for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "5") {
      strArr[i] = "S"
    } else if (strArr[i] === "0") {
      strArr[i] = "O"
    } else if (strArr[i] === "1") {
      strArr[i] = "I"
    }
  }
  return strArr.join('')
}
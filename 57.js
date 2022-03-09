const reverseSeq = n => {
  let arr = [n]
  for (let i = n; i !== 1; i--) {
    arr.push(i - 1)
  }
  return arr
};
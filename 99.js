function findOutlier(integers){
  let evenArr = []
  let oddArr = []
  for (let i = 0; i < integers.length; i++)  {
    if (integers[i] % 2 === 0 || integers[i] % 2 === -0) {
      evenArr.push(integers[i])
    } else {
      oddArr.push(integers[i])
    }
  }
  return evenArr.length > oddArr.length ? oddArr[0] : evenArr[0]
}
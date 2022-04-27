function well(x){
  let newArr = []
  x.forEach(el => el === 'good' && newArr.push(el))
  if (newArr.length > 2) {
    return 'I smell a series!'
  } else if (newArr.length > 0) {
    return 'Publish!'
  } else {
    return 'Fail!'
  }
}
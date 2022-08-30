function isIsogram(str){
  let arr = str.split('')
  
  if (str = '' || str.length === 1) {
    return true
  }
  
  
  for (let i = 0; i < arr.length; i++) {
    if (arr.filter(letter => letter.toLowerCase() === arr[i].toLowerCase()).length > 1) {
      return false
    } 
  }
  
  return true
}
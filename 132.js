function index(array, n){
  if (array.length > n) {
    return Math.pow(array[n], n)
  } else {
    return -1
  }
}
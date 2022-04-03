function enough(cap, on, wait) {
  let a = on + wait
  return a > cap ? a - cap : 0
}
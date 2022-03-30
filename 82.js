function firstNonConsecutive (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 2 === arr[i + 1]) {
      return arr[i + 1]
    }
    }
  return null
  }
const sequenceSum = (begin, end, step) => {
  let result = begin
  let sum = begin
  if (begin > end) {
    return 0
  }
  while ((sum + step) <= end) {
    sum = sum + step
    result = result + sum
  }
  return result
};
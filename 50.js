function countPositivesSumNegatives(input) {
    let result = [0, 0];
    if (input === null || input.length === 0) {
      return [];
    } 
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        result[0]++;
      } else if (input[i] < 0) {
        result[1] += input[i];
      }
    }
  return result;
}
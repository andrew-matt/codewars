function find_average(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  if (array.length === 0) {
    return 0;
  } else {
    return (result / array.length);
  }
}
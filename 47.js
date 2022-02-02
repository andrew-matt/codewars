function century(year) {
  let result = 0;
  if (year % 100 === 0) {
    result = year/100;
  } else {
    result = Math.floor(year/100) + 1;
  }
      return result;
}
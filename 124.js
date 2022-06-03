var humanYearsCatYearsDogYears = function(humanYears) {
  if (humanYears === 1) {
    return [humanYears, 15, 15]
  } else if (humanYears === 2) {
    return [humanYears, 24, 24]
  } else {
    let catYears = (humanYears - 2) * 4
    let dogYears = (humanYears - 2) * 5
    return [humanYears, catYears + 24, dogYears + 24]
  }
}

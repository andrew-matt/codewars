function betterThanAverage(classPoints, yourPoints) {
  let newArray = classPoints;
  newArray.push(yourPoints);
  let sum = 0;
  let average = sum / newArray.length;
  for (let i = 0; i < newArray.length; i++) {
    sum += newArray[i];
    average = sum / newArray.length;
  } return yourPoints > average;
}

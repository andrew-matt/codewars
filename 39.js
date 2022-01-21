function countSheeps(arrayOfSheep) {
  var total = 0;
  for (var i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      total++;
    }
  }
  return total;
}
function getAverage(marks){
  var sum = 0;
  for (var i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
return Math.floor(sum / marks.length);
}
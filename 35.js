function cockroachSpeed(s) {
  var speed1 = s;
  var speed2 = Math.floor(s * 100000 / 3600);
  return speed2;
}
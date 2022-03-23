function countBy(x, n) {
  let z = [x];
  let y = x
  for (let i = 1; i < n; i++) {
    y += x
    z.push(y)
  }

  return z;
}
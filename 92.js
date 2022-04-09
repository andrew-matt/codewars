function expressionMatter(a, b, c) {
  let var1 = a * (b + c)
  let var2 = (a * b * c)
  let var3 = (a + b * c)
  let var4 = (a + b) * c
  let var5 = a + b + c
  let arr = [var1, var2, var3, var4, var5]
  return arr.reduce((acc, cur) => acc > cur ? acc : cur)
}
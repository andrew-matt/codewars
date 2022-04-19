function findDifference(a, b) {
  let aCube = a.reduce((acc, cur) => acc * cur)
  let bCube = b.reduce((acc, cur) => acc * cur)
  return aCube < bCube ? bCube - aCube : aCube - bCube
}
function createPhoneNumber(numbers){
    let firstPart = numbers.slice(0, 3)
    let secondPart = numbers.slice(3, 6)
    let thirdPart = numbers.slice(6, 10)
    return `(${firstPart.join('')}) ${secondPart.join('')}-${thirdPart.join('')}`
}
 function duplicateCount(text) {
        let result = 0;
        let arr = text.split('')
        let charactersString = ''
        for (let i = 0; i < arr.length; i++) {

            if (charactersString.includes(arr[i].toLowerCase())) {
                continue
            }

            let filteredArr = arr.filter(char => char.toLowerCase() === arr[i].toLowerCase())
            charactersString += filteredArr[0].toLowerCase()

            if (filteredArr.length > 1) {
                result++
            }
        }
        return result
    }
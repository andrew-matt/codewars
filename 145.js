    function DNAStrand(dna) {
        let arr = dna.split('')
        for (let i = 0; i < arr.length; i++) {
            switch (arr[i]) {
                case 'A':
                    arr[i] = 'T'
                    break
                case 'T':
                    arr[i] = 'A'
                    break
                case 'C':
                    arr[i] = 'G'
                    break
                case 'G':
                    arr[i] = 'C'
                    break
                default:
                    break
            }
        }
        return arr.join('')
    }

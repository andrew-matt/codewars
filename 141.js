const accum = (s) => s.split('').map((letter, index) => letter.toUpperCase() + letter.toLowerCase().repeat(index)).join('-')
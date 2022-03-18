function likes(names) {
  if (names.length === 0) {
    return 'no one likes this';
  } else if (names.length === 1) {
    return names.join() + ' likes this'
  } else if (names.length === 2) {
    return names.join(' and ') + ' like this'
  } else if (names.length === 3) {
    names[0] += ','
    names[1] += ' and'
    return names.join(' ') + ' like this'
  } else {
    let first = names[0] += ','
    let second = names[1] += ' and'
    let third = names.length - 2 + ' others like this'
    return `${first} ${second} ${third}`
  }
}
function twiceAsOld(dadYearsOld, sonYearsOld) {
  const age = sonYearsOld * 2
  if (age > dadYearsOld) {
    return age - dadYearsOld
  } else {
    return dadYearsOld - age
  }
}
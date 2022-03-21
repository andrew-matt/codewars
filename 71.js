function bonusTime(salary, bonus) {
  return bonus ? '£' + JSON.stringify(salary * 10) : '£' + JSON.stringify(salary)
}
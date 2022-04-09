String.prototype.toAlternatingCase = function () {
  return this.split('').map(el => el === el.toLowerCase() ? el.toUpperCase() : el === el.toUpperCase() ? el.toLowerCase() : el).join('') 
}
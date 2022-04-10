String.prototype.toJadenCase = function () { 
  return this.split(" ").map(item => item.charAt(0).toUpperCase() + item.substring(1)).join(" ");
}

//Convert number to reversed array of digits
function digitize(n) {
  const arr = [];
  [...n + ''].map(item => arr.push(+item));
  return arr.reverse();
}

//return String(n).split('').map(Number).reverse()

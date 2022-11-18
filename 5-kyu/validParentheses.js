function validParentheses(parens){
  let n = 0;
  for(let char of parens){
    if(char === '(') n++;
    if(char === ')') n--;

    if(n < 0 ) return false;
  }
  
  return n === 0;
}

function toCamelCase(str){
  let k = str.split("");
  
  return k.filter((item, i) => {
    if(item == '-' || item == '_'){
      k[i+1] = str.charAt(i+1).toUpperCase();
    }
    return item !== '-' && item !== '_'
  }).join("")
}

//return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());

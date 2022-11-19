function convertToHex(d){
   if (d > 255) return 'FF';
  
  else if (d < 0) return '00';
  
  return d.toString(16).padStart(2, '0').toUpperCase();
}

function rgb(r, g, b){
  return convertToHex(r) + convertToHex(g) + convertToHex(b);
}

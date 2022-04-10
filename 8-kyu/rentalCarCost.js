function rentalCarCost(d) {
  // Your solution here
  let totalCost = 40 * d;
  if(d >= 3)
     totalCost -= (d >= 7) ? 50 : 20;
  
  return totalCost;
}

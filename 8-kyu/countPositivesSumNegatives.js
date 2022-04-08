function countPositivesSumNegatives(input) {
    if(input?.length){
      let posCount = 0, negSum = 0;
      
      input.forEach(item => {
        if(item > 0)
          posCount++;
        else if(item < 0)
          negSum += item;
      })
      
      return (posCount === 0 && negSum === 0) ? [] : [posCount, negSum]
    }
  
  return [];
  }

//(arr && arr.length) ? ([arr.filter(item => item > 0).length, arr.reduce((prev, curr) => prev += (curr < 0) && curr, 0) ]) : []

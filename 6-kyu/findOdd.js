function findOdd(arr) {
 let newArr = [], count = 0, newCount = 0, arrElement;
  for(let i = 0; i < arr.length; i++){

    if(newArr.includes(arr[i])) continue;

    newCount = arr.filter(item => item === arr[i]).length;
    newArr.push(arr[i]);

    if(newCount % 2 === 1 && newCount > count)
    {
      arrElement = arr[i];
      count = newCount;
    }
      

  }
  return arrElement
}

//arr.find((item, index) => arr.filter(el => el == item).length % 2)

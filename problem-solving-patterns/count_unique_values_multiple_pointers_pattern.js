function countUniqueValues(arry1){
  
  let i = 0;
  let j = 1;

  if(arry1.length === 0){
    return 0;
  }
  
  while(j < arry1.length){
    
    if(arry1[i] !== arry1[j]){
      i++;
      arry1[i] = arry1[j];
    }

    j++;
  }
  
  return i + 1;
}
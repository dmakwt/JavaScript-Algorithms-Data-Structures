const linearSearch = (arr, value) => {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === value) return index;
  }

  return -1;
};

console.log(linearSearch([10, 15, 20, 25, 30], 15));

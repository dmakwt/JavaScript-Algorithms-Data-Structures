const binarySearch = (arr, elem) => {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === elem ? middle : -1;
};

console.log(binarySearch([1, 2, 3, 4, 5], 5));

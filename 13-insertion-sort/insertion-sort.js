const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;

    console.log('Before current:', currentVal, ', j: ', j, `[${arr[j]}]`);

    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
      console.log('lol', arr);
    }

    // for (; j >= 0 && arr[j] > currentVal; j--) {
    //   arr[j + 1] = arr[j];
    // }

    arr[j + 1] = currentVal;
    console.log(arr);
    console.log('After current:', currentVal, ', j', j, `[${arr[j]}]`);
  }

  return arr;
};

console.log(insertionSort([1, 3, 2]));

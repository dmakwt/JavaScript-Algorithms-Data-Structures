const getDigit = (num, i) => {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
};

const digitCount = (num) => {
  if (num === 0) return 1;

  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
};

const radixSort = (nums) => {
  let maxDigitsCount = mostDigits(nums);

  for (let k = 0; k < maxDigitsCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
};

console.log(radixSort([2, 3232, 213, 3000, 4902, 9000, 1000]));

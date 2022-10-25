const sameFrequency = (num1, num2) => {
  const freq1 = {};
  const freq2 = {};

  let arr1 = Array.from(num1.toString()).map(Number);
  let arr2 = Array.from(num2.toString()).map(Number);

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let num of arr1) {
    freq1[num] = (freq1[num] || 0) + 1;
  }

  for (let num of arr2) {
    freq2[num] = (freq2[num] || 0) + 1;
  }

  for (let key in freq1) {
    if (!(key in freq2)) {
      return false;
    }

    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }

  return true;
};

console.log(sameFrequency(182, 281));

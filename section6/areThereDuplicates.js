const areThereDuplicates = (...array) => {
  const freq1 = {};

  for (let val of array) {
    freq1[val] = (freq1[val] || 0) + 1;
  }

  for (let key in freq1) {
    if (freq1[key] > 1) {
      return true;
    }
  }

  return false;
};

console.log(areThereDuplicates('a', 'b', 'c', 'a'));

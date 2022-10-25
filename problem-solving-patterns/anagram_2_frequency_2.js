const validAnagram = (str1, str2) => {
  const freq1 = {};
  const freq2 = {};

  for (let letter of str1) {
    freq1[letter] = (freq1[letter] || 0) + 1;
  }

  for (let letter of str2) {
    freq2[letter] = (freq2[letter] || 0) + 1;
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

console.log(validAnagram('true', 'turee'));

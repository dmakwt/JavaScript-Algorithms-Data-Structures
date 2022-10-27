// Helper Method Recursion Pattern

const collectOddValues = (arr) => {
  let result = [];

  function helper(helperInputer) {
    if (helperInputer.length === 0) {
      return;
    }

    if (helperInputer[0] % 2 !== 0) {
      result.push(helperInputer[0]);
    }

    helper(helperInputer.slice(1));
  }

  helper(arr);

  return result;
};

console.log(collectOddValues([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

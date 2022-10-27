// Non-recursive solution (Iterative solution)
const factorial = (num) => {
  let total = 1;

  for (let i = num; i > 1; i--) {
    total *= i;
  }

  return total;
};

console.log(factorial(10));

// Recursive solution
const factorialRe = (num) => {
  if (num === 1) {
    return 1;
  }

  return num * factorialRe(num - 1);
};

console.log(factorialRe(10));

// Fibonacci sequence
const fib = (num) => {
  if (num <= 2) {
    return 1;
  }

  return fib(num - 1) + fib(num - 2);
};

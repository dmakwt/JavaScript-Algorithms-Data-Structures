const power = (base, exponent) => {
  if (exponent === 0) {
    return 1;
  }

  return base * power(base, --exponent);
};

console.log(power(2, 4));

function isValidSSN (value) {
  const expression = /^(?!666|000|9\d{2})\d{3}[- ]{0,1}(?!00)\d{2}[- ]{0,1}(?!0{4})\d{4}$/;
  return expression.test(value);
}

export {
  isValidSSN
};

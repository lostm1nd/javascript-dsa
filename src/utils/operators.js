const higherPrecedence = ['*', '/'];
const lowerProcedence = ['+', '-'];
const allOperators = higherPrecedence.concat(lowerProcedence);

const isOperator = (token) => (
  allOperators.includes(token)
);

const isWithHigherPrecedence = (current, other) => (
  higherPrecedence.includes(current) && lowerProcedence.includes(other)
);

const areWithEqualPrecence = (first, second) => (
  lowerProcedence.includes(first) && lowerProcedence.includes(second) ||
  higherPrecedence.includes(first) && higherPrecedence.includes(second)
);

module.exports = {
  isOperator,
  isWithHigherPrecedence,
  areWithEqualPrecence
};

const isOperator = (token) => (
  token === '+' || token === '-' || token === '*' || token === '/'
);

module.exports = isOperator;

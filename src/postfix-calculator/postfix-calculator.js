const isOperator = require('../utils/is-operator');

const calculate = (opertaror, second, first) => {
  first = +first;
  second = +second;

  switch (opertaror) {
    case '+': return first + second;
    case '-': return first - second;
    case '*': return first * second;
    case '/': return first / second;
    default: throw 'unknown opertaror';
  }
};

const postfixCalculator = (expression) => {
  let tokens = expression.split(' ');

  return tokens.reduce((accumulator, token) => {
    return accumulator.concat(
      isOperator(token) ? calculate(token, accumulator.pop(), accumulator.pop()) : token
    );
  }, []).pop();
};

module.exports = postfixCalculator;

const ops = require('../utils/operators');

const isOperator = ops.isOperator;

const isWithHigherOrEqualPrecedence = (current, previous) => (
  ops.isWithHigherPrecedence(current, previous) || ops.areWithEqualPrecence(current, previous)
);

const isOpeningBrance = (token) => token === '(';

const isClosingBrance = (token) => token === ')';

const infixToPostfix = (expression) => {
  if (!expression) {
    return [];
  }

  let tokens = expression.split(' ');
  let operators = [];
  let postfix = [];

  tokens.forEach((token) => {
    if (isOperator(token) || isOpeningBrance(token)) {
      while (isWithHigherOrEqualPrecedence(operators[operators.length - 1], token)) {
        postfix.push(operators.pop());
      }
      operators.push(token);
    } else if (isClosingBrance(token)) {
      while (!isOpeningBrance(operators[operators.length - 1])) {
        postfix.push(operators.pop());
      }
      operators.pop();
    } else {
      postfix.push(token);
    }
  });

  return postfix.concat(operators.reverse());
};

module.exports = infixToPostfix;

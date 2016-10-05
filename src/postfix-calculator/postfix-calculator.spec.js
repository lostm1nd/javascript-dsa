const expect = require('chai').expect;
const postfixCalculator = require('./postfix-calculator');

describe('Postfix Calculator', () => {
  it('should define a function accepting one argument', () => {
    expect(postfixCalculator).to.be.a('function');
    expect(postfixCalculator.length).to.equal(1, 'it should accept 1 argument');
  });

  it('should correctly calculate (20 22 +) and return the result', () => {
    expect(postfixCalculator('20 22 +')).to.equal(20 + 22);
  });

  it('should correctly calculate (20 22 -) and return the result', () => {
    expect(postfixCalculator('20 22 -')).to.equal(20 - 22);
  });

  it('should correctly calculate (20 22 /) and return the result', () => {
    expect(postfixCalculator('20 22 /')).to.equal(20 / 22);
  });

  it('should correctly calculate (20 22 *) and return the result', () => {
    expect(postfixCalculator('20 22 *')).to.equal(20 * 22);
  });

  it('should correctly calculate (2 3 / 5 4 * + 9 -) and return the result', () => {
    expect(postfixCalculator('2 3 / 5 4 * + 9 -')).to.equal(2 / 3 + 5 * 4 - 9);
  });
});

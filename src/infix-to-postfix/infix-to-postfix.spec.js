const expect = require('chai').expect;
const infixToPostfix = require('./infix-to-postfix');

describe('Infix To Postfix', () => {

  it('should define a function accepting one argument', () => {
    expect(infixToPostfix).to.be.a('function');
    expect(infixToPostfix.length).to.equal(1, 'it should accept 1 argument');
  });

  it('should return an empty array when no expression is passed', () => {
    expect(infixToPostfix()).to.deep.equal([]);
  });

  it('should properly convert 2 + 3', () => {
    expect(infixToPostfix('2 + 3')).to.deep.equal(['2', '3', '+']);
  });

  it('should properly convert 2 - 3', () => {
    expect(infixToPostfix('2 - 3')).to.deep.equal(['2', '3', '-']);
  });

  it('should properly convert 2 + 3 + 5', () => {
    expect(infixToPostfix('2 + 3 + 5')).to.deep.equal(['2', '3', '+', '5', '+']);
  });

  it('should properly convert 2 + 3 - 1', () => {
    expect(infixToPostfix('2 + 3 - 1')).to.deep.equal(['2', '3', '+', '1', '-']);
  });

  it('should properly convert 2 + 3 - 1 + 4 - 5', () => {
    expect(infixToPostfix('2 + 3 - 1 + 4 - 5')).to.deep.equal(['2', '3', '+', '1', '-', '4', '+', '5', '-']);
  });

  it('should properly convert 2 * 3 + 4', () => {
    expect(infixToPostfix('2 * 3 + 4')).to.deep.equal(['2', '3', '*', '4', '+']);
  });

  it('should properly convert 2 + 3 * 4', () => {
    expect(infixToPostfix('2 + 3 * 4')).to.deep.equal(['2', '3', '4', '*', '+']);
  });

  it('should properly convert 2 / 3 - 4', () => {
    expect(infixToPostfix('2 / 3 - 4')).to.deep.equal(['2', '3', '/', '4', '-']);
  });

  it('should properly convert 10 / 2 / 2', () => {
    expect(infixToPostfix('10 / 2 / 2')).to.deep.equal(['10', '2', '/', '2', '/']);
  });

  it('should properly convert 10 / 2 / 2 * 3', () => {
    expect(infixToPostfix('10 / 2 / 2 * 3')).to.deep.equal(['10', '2', '/', '2', '/', '3', '*']);
  });

  it('should properly convert ( 10 + 2 ) * 3', () => {
    expect(infixToPostfix('( 10 + 2 ) * 3')).to.deep.equal(['10', '2', '+', '3', '*']);
  });

  it('should properly convert ( 10 + ( 2 - 1 ) ) * 3', () => {
    expect(infixToPostfix('( 10 + ( 2 - 1 ) ) * 3'))
      .to.deep.equal(['10', '2', '1', '-', '+', '3', '*']);
  });

  it('should properly convert ( 10 + 2 ) * ( 3 - 2 )', () => {
    expect(infixToPostfix('( 10 + 2 ) * ( 3 - 2 )'))
      .to.deep.equal(['10', '2', '+', '3', '2', '-', '*']);
  });

  it('should properly convert ( 10 + 2 - 1 ) * ( 3 - 2 + 4 )', () => {
    expect(infixToPostfix('( 10 + 2 - 1 ) * ( 3 - 2 + 4 )'))
      .to.deep.equal(['10', '2', '+', '1', '-', '3', '2', '-', '4', '+', '*']);
  });

});

const expect = require('chai').expect;
const quicksort = require('./quick-sort');

describe('Quick Sort', () => {
  it('should define a function accepting one argument', () => {
    expect(quicksort).to.be.a('function');
    expect(quicksort.length).to.equal(1, 'it should accept 1 argument');
  });

  it('should return an empty array', () => {
    expect(quicksort([])).to.deep.equal([], 'returns empty array when empty array is passed in');
  });

  it('should return a sorted array with 1 element', () => {
    expect(quicksort([42])).to.deep.equal([42], 'returns [42] when [42] passed in');
  });

  it('should return a sorted array with 2 elements', () => {
    expect(quicksort([42, 11])).to.deep.equal([11, 42]);
  });

  it('should return a sorted array with 3 elements', () => {
    expect(quicksort([42, 11, 23])).to.deep.equal([11, 23, 42]);
  });

  it('should return a sorted array with duplicates', () => {
    expect(quicksort([42, 11, 42, -1, 11, 1]))
      .to.deep.equal([-1, 1, 11, 11, 42, 42]);
  });

  it('should return a sorted array with 10 elements', () => {
    expect(quicksort([42, 11, 23, -1, 1024, 19, 36, 255, 0, 1]))
      .to.deep.equal([-1, 0, 1, 11, 19, 23, 36, 42, 255, 1024]);
  });
});

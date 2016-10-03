const expect = require('chai').expect;
const karatsuba = require('./karatsuba');

describe("Karatsuba multiplication", () => {

  it("should define a function accepting two arguments", () => {
    expect(karatsuba).to.be.a('function');
    expect(karatsuba.length).to.equal(2, 'it should accept 2 arguments');
  });

  it("should return correct result for 1*5", () => {
    let x = 1;
    let y = 5;

    expect(karatsuba(x,y)).to.equal(x * y);
  });

  it("should return correct result for 11*5678", () => {
    let x = 11;
    let y = 5678;

    expect(karatsuba(x,y)).to.equal(x * y);
  });

  it("should return correct result for 1234*5678", () => {
    let x = 1234;
    let y = 5678;

    expect(karatsuba(x,y)).to.equal(x * y);
  });

  it("should return correct result for 66542*567", () => {
    let x = 66542;
    let y = 567;

    expect(karatsuba(x,y)).to.equal(x * y);
  });

});

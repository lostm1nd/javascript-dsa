const BASE = 10;

const karatsuba = (x, y) => {
  let lengthX = x.toString().length;
  let lengthY = y.toString().length;
  let factor = lengthX < lengthY ? Math.trunc(lengthX / 2) : Math.trunc(lengthY / 2);

  if (lengthX === 1 || lengthY === 1) {
    return x * y;
  }

  let x1 = Math.trunc(x / Math.pow(BASE, factor));
  let x2 = x % Math.pow(BASE, factor);
  let y1 = Math.trunc(y / Math.pow(BASE, factor));
  let y2 = y % Math.pow(BASE, factor);

  let z0 = karatsuba(x2, y2);
  let z1 = karatsuba(x1 + x2, y1 + y2);
  let z2 = karatsuba(x1, y1);

  return z2 * Math.pow(BASE, 2 * factor) + ((z1 - z2 - z0) * Math.pow(BASE, factor)) + z0;
};

module.exports = karatsuba;

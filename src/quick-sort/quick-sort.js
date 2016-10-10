const quicksort = (array) => {
  let length = array.length;
  if (length === 0 || length === 1) {
    return array;
  }

  let smaller = [];
  let pivot = array.shift();
  let larger = [];

  array.forEach((el) => el < pivot ? smaller.push(el) : larger.push(el));

  return quicksort(smaller).concat(pivot).concat(quicksort(larger));
};

module.exports = quicksort;

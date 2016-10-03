const mergeSort = (array) => {
  let length = array.length;
  if (length === 0 || length === 1) {
    return array;
  }

  let left = mergeSort(array.slice(0, Math.trunc(length / 2)));
  let right = mergeSort(array.slice(Math.trunc(length / 2)));

  return array.map(() => {
    if (!left.length) {
      return right.shift();
    }

    if (!right.length) {
      return left.shift();
    }

    return left[0] < right[0] ? left.shift() : right.shift();
  });
};

module.exports = mergeSort;

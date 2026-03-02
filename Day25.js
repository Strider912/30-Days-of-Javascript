/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

var flat = function (arr, n) {
  let flattenedArr = [];

  if (n === 0) return arr.slice();

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const nestedArr = flat(arr[i], n - 1);
      flattenedArr.push(...nestedArr);
    } else {
      flattenedArr.push(arr[i]);
    }
  }
  return flattenedArr
};


const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

const result = flat(arr, 5)
console.log({result});
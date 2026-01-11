/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

const arr = [1,2,3,4,5]

const fn = num  => num + 1

var map = function(arr, fn) {
  const newArray = []

  for(let i=0; i<arr.length; i++){
    newArray[i] = fn(arr[i], i)
  }
  
  return newArray
};

console.log(map(arr, fn));        // [ 2, 3, 4, 5, 6 ]
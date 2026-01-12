/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

const arr = [1,2,3,4,5,11,12,13,14,15]

const fn = (item, index, arr) => {
    if(item > 10) return true
    return false
}

var filter = function(arr, fn) {
    const newArray = []

    for(let i=0; i<arr.length; i++){
        const result = fn(arr[i], i)
        if(result) newArray.push(arr[i])
    }

    return newArray
};

console.log(filter(arr,fn));    // [ 11, 12, 13, 14, 15 ]
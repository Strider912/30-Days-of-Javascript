/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

const init = 0
const nums = [1,2,3,4,5]

const fn = (total, currentValue) => total + currentValue

var reduce = function(nums, fn, init) {
    let total = init
    
    for (let i=0; i<nums.length; i++){
        total = fn(total, nums[i])
    }
    return total
};

/* Second Approach:
var reduce = function(nums, fn, init) {
  let val = init;
  nums.forEach(num => {
    val = fn(val, num);
  });
  return val;
};
*/

console.log(reduce(nums, fn, init));            // 15
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function(init) {
    let count = init
    return {
        increment(val1){
          return ++count;
        },
        decrement(val1){
        return --count;
        },
        reset(val1){
        return count = init;
        }
    }
};


/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */


/*
Second Approach
var createCounter = function(init) {
    let count = init
    return {
        increment : increment = () => ++count,
        decrement : decrement = () => --count,
        reset : reset = () => count = init
    }
};

*/
/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timer
    return function(...args) {
        clearTimeout(timer)
        timer = setTimeout(()=> fn(...args), t )
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */

// Test 1:
const log = debounce(console.log, 100)

// log("Hello") //→ timer started
// log("Hello") //→ previous timer cancelled
// log("Hello") //→ previous timer cancelled

// Test 2:
const log2 = debounce(console.log, 100)

log2("Hello 1")
log2("Hello 2")
log2("Hello 3")

setTimeout(()=>{
    log2("Hello after delay")
},200)
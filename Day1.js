/**
 * @return {Function}
 */

// First Solution:
var createHelloWorld = function() {
    
    return function(...args) {
        return 'Hello World'
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

/*
Second Solution:

var createHelloWorld = () => () => "Hello World";

Time complexity: O(1)
Space complexity: O(1)
*/
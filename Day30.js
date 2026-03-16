class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.result = value
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.result += value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.result -= value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.result *= value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if(value === 0){
            throw new Error("Division by zero is not allowed")
        }
        this.result /= value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result **= value   
        return this
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.result
    }
}

// Test Case 1:
const result = new Calculator(10)
  .add(5)
  .subtract(3)
  .getResult();

console.log({result});

// Test Case 2:
const result2 = new Calculator(2)
  .multiply(5)
  .power(2)
  .getResult();

console.log({result2});

// Test Case 3:
const result3 = new Calculator(20)
  .divide(0)
  .getResult();

console.log({result3});
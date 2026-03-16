class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const alreadyExist = this.cache.get(key);
    if (alreadyExist) {
      clearTimeout(alreadyExist.timeoutId);
    }
    const timeoutId = setTimeout(() => {
      this.cache.delete(key);
    }, duration);
    this.cache.set(key, { value, timeoutId });
    return Boolean(alreadyExist);
  }

  get(key) {
    if (this.cache.has(key)) {
      return this.cache.get(key).value;
    }
    return -1;
  }

  count() {
    return this.cache.size;
  }
}

// Test Case 1:

// const cache = new TimeLimitedCache()
// console.log(cache.set(1, 100, 1000)) // false
// console.log(cache.get(1))            // 100
// console.log(cache.count())           // 1
// console.log({cache: this.cache });

// setTimeout(()=>{
//     console.log(cache.get(1))        // -1 (expired)
// },1100)

// Test Case 2:

const cache2 = new TimeLimitedCache()

console.log(cache2.set(1, 42, 500))   // false
console.log(cache2.set(1, 50, 1000))  // true (updated existing key)

console.log(cache2.get(1))            // 50

setTimeout(()=>{
    console.log(cache2.get(1))        // 50 (still valid)
},600)

setTimeout(()=>{
    console.log(cache2.get(1))        // -1 (expired)
    console.log(cache2.count())       // 0
},1200)
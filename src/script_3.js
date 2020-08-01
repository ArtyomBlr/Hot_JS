/* Task 1 */

function doubleValue(value) {
  return 2 * value;
}

function rememberResult(initialValue) {
  return () => {
    initialValue = doubleValue(initialValue);
  };
}

const callWithRememberedResult = rememberResult(2);
callWithRememberedResult(doubleValue); // => 4
callWithRememberedResult(doubleValue); // => 8
callWithRememberedResult(doubleValue); // => 16

/* Task 2 */

function callMaxTimes(numberOfTimes, func) {
  let number = 0;

  function tryToCallFunction() {
    number += 1;

    if (numberOfTimes >= number) {
      func();
    }
    return null;
  }
  return tryToCallFunction;
}

function consoleLog() {
  console.log('abc');
}

const callConsoleLog = callMaxTimes(3, consoleLog);
callConsoleLog(); // => 'abc'
callConsoleLog(); // => 'abc'
callConsoleLog(); // => 'abc'
callConsoleLog(); // => nothing happens

/* Task 3 */

function greet(greeting, name) {
  return console.log(`${greeting} ${name}`);
}

function partial(func, ...args) {
  return function (...nextArgs) {
    return func(...args, ...nextArgs);
  };
}

const sayHelloTo = partial(greet, 'Hello');
sayHelloTo('everyone'); // => 'Hello everyone'

/* Task 4 */

function curry(fn) {
  function toTransform(n, args) {
    return function toTransformFinal(a) {
      return n <= 1 ? fn(...args, a) : toTransform(n - 1, [...args, a]);
    };
  }
  return toTransform(fn.length, []);
}

// function curry(fn) {
//   const argsStore = [];
//   function collect(item) {
//     console.log('item', item);
//     argsStore.push(item);
//     return collect;
//   }
//   collect.toString = function () {
//     console.log('argsStore', argsStore);
//     const result = fn.apply(null, argsStore);
//     return result;
//   };
//   return collect;
// }

function summ1(a, b, c) {
  return a + b + c;
}

const curriedSumm1 = curry(summ1);
console.log(curriedSumm1(1)(2)(3)); // => 6

function summ3(a, b, c) {
  return a * b * c;
}

const curriedSumm3 = curry(summ3);
console.log(curriedSumm3(1)(34)(3)); // => 6

function summ2(a, b, c, d, e) {
  return a + b + c + d + e;
}

const curriedSumm2 = curry(summ2);
console.log(curriedSumm2(1)(2)(3)(4)(5)); // => 15

/* Task 5 */

let timer;

function debounce(fn, delay) {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(fn, delay);
}

function dateNow() {
  console.log(Date.now());
}

// First case
debounce(dateNow, 1000); // => would be called in 1 second

// Second case
debounce(dateNow, 100); // => canceled
debounce(dateNow, 150); // => canceled
debounce(dateNow, 170); // => would be called only last, previous would be canceled

/* Task 6 */

function memoize(fn) {
  return function putInCache(...args) {
    const cache = new Map();
    if (cache.has(args)) {
      return null;
    }
    const result = fn(args);
    cache.set(args, result);
    return result;
  };
}

function summ(a, b, c) {
  return a + b + c;
}

const memoizedSumm = memoize(summ);

console.log(memoizedSumm(1, 2, 3));
console.log(memoizedSumm(1, 2, 3));
memoizedSumm(4, 2, 3);
memoizedSumm(4, 2, 3);

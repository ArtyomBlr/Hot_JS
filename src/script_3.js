/* Task 1 */

function doubleValue(value) {
  return 2 * value;
}

function rememberResult(initialValue) {
  return () => {
    if (typeof initialValue === 'number') {
      initialValue = doubleValue(initialValue);
      return initialValue;
    }
    return null;
  };
}

const callWithRememberedResult = rememberResult(2);
console.log(callWithRememberedResult(doubleValue)); // => 4
console.log(callWithRememberedResult(doubleValue)); // => 8
console.log(callWithRememberedResult(doubleValue)); // => 16

/* Task 2 */

function callMaxTimes(numberOfTimes, func) {
  let number = 0;

  function tryToCallFunction() {
    number += 1;

    if (typeof numberOfTimes === 'number' && typeof func === 'function') {
      return numberOfTimes >= number ? func() : null;
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
  const hasArgs = args.some((elem) => typeof elem === 'string');

  return function (...nextArgs) {
    return hasArgs ? func(...args, ...nextArgs) : null;
  };
}

const sayHelloTo = partial(greet, 'Hello');
sayHelloTo('everyone'); // => 'Hello everyone'

/* Task 4 */

function curry(fn) {
  const argsStore = [];

  if (typeof fn === 'function') {
    const func = function collect(item) {
      argsStore.push(item);
      return collect;
    };

    func.toString = function () {
      const result = fn(...argsStore);
      return result;
    };
    return func;
  }
  return null;
}

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
  if (typeof fn === 'function' && typeof delay === 'number') {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, delay);
  }
  return null;
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
  const cache = {};
  if (typeof fn === 'function') {
    return function putInCache(...args) {
      if (args in cache) {
        return cache[args];
      }
      const result = fn(...args);
      cache[args] = result;
      return result;
    };
  }
}

function summ(a, b, c) {
  return a + b + c;
}

const memoizedSumm = memoize(summ);

console.log(memoizedSumm(1, 2.2, 3.3));
console.log(memoizedSumm(1, 2.2, 3.3));
console.log(memoizedSumm(4, 2, 3));
console.log(memoizedSumm(4, 2, 3));

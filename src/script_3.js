/* Task 1 */

function doubleValue(value) {
  return 2 * value;
}

function rememberResult(initialValue) {
  return () => {
    initialValue = doubleValue(initialValue);
    console.log(initialValue);
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

// /* Task 3 */

// function greet(greeting, name) {
//   return console.log(`${greeting} ${name}`);
// }

// function partial() {
//   return greet();
// }

// const sayHelloTo = partial(greet, 'Hello');
// sayHelloTo('everyone'); // => 'Hello everyone'

/* Task 4 */

// function curry(fn) {
//   // HINT: fn.length should be used to get number of fn arguments
// }

// function summ1(a, b, c) {
//   return a + b + c;
// }

// const curriedSumm1 = curry(summ1);
// curriedSumm1(1)(2)(3); // => 6

// function summ2(a, b, c, d, e) {
//   return a + b + c + d + e;
// }

// const curriedSumm2 = curry(summ2);
// curriedSumm2(1)(2)(3)(4)(5); // => 15

// /* Task 5 */

// function debounce(fn, timeOut) {
//   // HINT: setTimeout and clearTimeout should be used.
// }

// function dateNow() {
//   console.log(Date.now());
// }

// // First case
// debounce(dateNow, 1000); // => would be called in 1 second

// // ...

// // Second case
// debounce(dateNow, 100); // => canceled
// debounce(dateNow, 150); // => canceled
// debounce(dateNow, 170); // => would be called only last, previous would be canceled

// /* Task 6 */

// function memoize(fn) {}

// // Expected result
// function summ(a, b, c) {
//   return a + b + c;
// }

// const memoizedSumm = memoize(summ);

// memoizedSumm(1, 2, 3); // => function summ was called, result 6
// memoizedSumm(1, 2, 3); //
//  => function summ was NOT called, result 6 was remembered for arguments 1, 2, 3 and returned
// // memoizedSumm(4, 2, 3); // => function summ was called, result 9
// // memoizedSumm(4, 2, 3); //
// => function summ was NOT called, result 9 was remembered for arguments 4, 2, 3 and returned

/* Task 1 */

function summ(...args) {
  const result = args.reduce((summary, item) => {
    if (Number(item) && typeof item !== 'boolean') {
      summary += +item;
    }
    return summary;
  });

  return console.log(result);
}

summ(1, '2', '3', 5, 'abc', true);

/* Task 2 */

function summAdvanced(...args) {
  const result = args.reduce((summary, item) => {
    if (typeof item !== 'boolean') {
      const value = +item;
      if (typeof item === 'function') {
        summary += +item();
      } else if (value) {
        summary += value;
      }
    }
    return summary;
  }, 0);
  return console.log(result);
}

function getRandomNumber() {
  return Math.random();
}

function getTen() {
  return 10;
}

function getTenString() {
  return '10';
}

summAdvanced('abc', 1, '2', getTen, getTenString, getRandomNumber, true, true);

/* Task 3 */

function isValueExists(value) {
  return value !== undefined && value !== null;
}

isValueExists(1); // => true
isValueExists(0); // => true
isValueExists('12'); // => true
isValueExists(''); // => true
isValueExists(false); // => true
isValueExists(undefined); // => false
isValueExists(null); // => false

/* Task 4 */

function callWithFunctionResult(funct1, funct2) {
  if (typeof funct2 !== 'function' || typeof funct1 !== 'function') {
    return console.log('please use functions here!');
  }
  return console.log(Number(funct2()) ? funct1(funct2()) : console.log('function value is not a number'));
}

function getFour() {
  return 4;
}

function doubleValue(value) {
  return value * 2;
}

callWithFunctionResult(doubleValue, getFour);

/* Task 5 */

function consoleLog(value) {
  console.log(value);
}

function callWhileStringIsNotEmpty(string, func) {
  if (typeof string !== 'string') {
    return console.log('not a string');
  }

  const strLength = string.length;
  const newString = string.substring(0, strLength - 1);
  func(string);

  return strLength < 1 ? string : callWhileStringIsNotEmpty(newString, func);
}

callWhileStringIsNotEmpty('qwerty', consoleLog);

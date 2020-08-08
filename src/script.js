/* Task 1 */

function summ(...args) {
  return args.reduce((summary, item) => {
    if (Number(item) && typeof item !== 'boolean') {
      summary += +item;
    }
    return summary;
  }, 0);
}

summ(1, '2', '3', 5, 'abc', true);

/* Task 2 */

function summAdvanced(...args) {
  return args.reduce((summary, item) => {
    let value = +item;
    if (typeof item === 'function') {
      value = +item();
    }
    if (value && typeof item !== 'boolean') {
      summary += value;
    }
    return summary;
  }, 0);
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

console.log(summAdvanced('abc', 1, '2', getTen, getTenString, getRandomNumber, true, true));

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
  if (typeof funct2 === 'function' || typeof funct1 === 'function') {
    return Number(funct2()) ? funct1(funct2()) : null;
  }
  return null;
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
  if (typeof string === 'string') {
    const strLength = string.length;
    const newString = string.substring(0, strLength - 1);
    func(string);

    if (strLength > 1) {
      callWhileStringIsNotEmpty(newString, func);
    }
  }
  return string;
}

callWhileStringIsNotEmpty('qwerty', consoleLog);

/* Task 1 */

function summ(...rest) {
  const args = [...rest];
  args.reduce((result, currentValue) => {
    if (+currentValue) {
      result += +currentValue;
    }
    return result;
  });
}

summ(1, '2', '3', 5, 'abc');

/* Task 2 */

function summAdvanced(...rest) {
  const args = [...rest];
  args.reduce((summary, currentValue) => {
    if (typeof currentValue === 'function') {
      summary += +currentValue();
    } else if (+currentValue) {
      summary += +currentValue;
    }
    return summary;
  });
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

summAdvanced('abc', 1, '2', getTen, getTenString, getRandomNumber);

/* Task 3 */

function isValueExists(value) {
  return !(value === undefined || value === null);
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
  return Number(funct2()) ? funct1(funct2()) : console.log('not a function');
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
  const strLength = string.length;

  if (typeof string !== 'string') {
    console.log('string is undefined');
  }

  if (strLength < 1) {
    return string;
  }
  func(string);
  const newString = string.substring(0, strLength - 1);
  return callWhileStringIsNotEmpty(newString, func);
}

callWhileStringIsNotEmpty('qwerty', consoleLog);

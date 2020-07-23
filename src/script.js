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
  if (value === undefined || value === null) {
    return false;
  }
  return true;
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
  return funct1(funct2());
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
  return callWhileStringIsNotEmpty(string.substring(0, strLength - 1), func);
}

// have some troubles with this code (dont understand how to return func with value = string)
callWhileStringIsNotEmpty('qwerty', consoleLog);

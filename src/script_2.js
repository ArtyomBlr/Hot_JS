/* Task 1 */

function chunk(array, number) {
  const newArr = [];

  if (Array.isArray(array)) {
    const arrLen = array.length;
    for (let i = 0; i < arrLen; i += number) {
      newArr.push(array.slice(i, i + number));
    }
  }

  console.log(newArr);
  return newArr;
}

chunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']]
chunk(['a', 'b', 'c', 'd'], 3); // => [['a', 'b', 'c'], ['d']]

/* Task 2 */

function difference(array1, array2) {
  let newArr = [];

  if (Array.isArray(array1) && Array.isArray(array2)) {
    newArr = array1
      .filter((element) => array2.indexOf(element) === -1)
      .concat(array2.filter((element) => array1.indexOf(element) === -1));
  }

  console.log(newArr);
  return newArr;
}

difference([2, 1], [2, 3, 4]); // => [1, 3, 4]

/* Task 3 */

//  how can i fixed this code?

// function findIndex(obj, element) {
//   return obj.findIndex(((item) => item === element), obj);
// }

function findIndex(obj, element) {
  if (!Array.isArray(obj)) {
    console.log('not an array');
  }

  if (obj.length === 0) {
    console.log('there is no params');
  }
  console.log(typeof obj[element] === 'number' ? obj.indexOf(element) : obj.findIndex(element))
  return typeof obj[element] === 'number' ? obj.indexOf(element) : obj.findIndex(element);
}

const numbers = [3, 5, 1, 6, 7];
findIndex(numbers, 1); // => 2

const users = [{ name: 'User1' }, { name: 'User2' }, { name: 'User3' }];

findIndex(users, (user) => user.name === 'User2'); // => 1

/* Task 4 */

function flattenDeep(array) {
  let newArr = [];

  if (Array.isArray(array)) {
    newArr = array.flat(Infinity);
  }

  console.log(newArr);
  return newArr;
}

flattenDeep([1, [2, [3, [4]], 5]]);

/* Task 5 */

function fromPairs(array) {
  let newArr = [];

  if (Array.isArray(array)) {
    newArr = Object.fromEntries(array);
    console.log(newArr);
  }
  return newArr;
}

fromPairs([
  ['a', 1],
  ['b', 2],
]); // => { 'a': 1, 'b': 2 }

/* Task 6 */

function uniq(array) {
  let newArr = [];

  if (Array.isArray(array)) {
    newArr = array.filter((element, index) => array.indexOf(element) === index);
  }

  return newArr;
}

uniq([2, 1, 2, 5, 6, 5, 7]); // => [2, 1, 5, 6, 7]

/* Task 7 */

function every(object, item) {
  let newArr = [];

  if (Array.isArray(object)) {
    newArr = object.every(item);
  }

  console.log(newArr);
  return newArr;
}

const users1 = [
  { name: 'User1', age: 22 },
  { name: 'User2', age: 22 },
  { name: 'User3', age: 23 },
];

every(users1, (user) => user.age === 22); // => false

const users2 = [
  { name: 'User1', age: 22 },
  { name: 'User2', age: 22 },
  { name: 'User3', age: 22 },
];

every(users2, (user) => user.age === 22); // => true

const users3 = [
  { name: 'User1', age: 22 },
  { name: 'User2', age: 23 },
  { name: 'User3', age: 20 },
];

every(users3, (user) => user.age < 24); // => true

/* Task 8 */

function find(object, item) {
  let newArr = [];

  if (Array.isArray(object)) {
    newArr = object.filter(item);
  }

  console.log(newArr);
  return newArr;
}

const users4 = [
  { name: 'User1', age: 22 },
  { name: 'User2', age: 23 },
  { name: 'User3', age: 20 },
];

find(users4, (user) => user.age < 23);
// => [{ name: 'User1', age: 22 }, { name: 'User3', age: 20 }]

/* Task 9 */

function groupBy(object, key) {
  if (!Array.isArray(object)) {
    console.log('not an object');
  }

  return object.reduce((acc, currentValue) => {
    const value = key(currentValue);
    acc[value] = acc[value] || [];
    acc[value].push(currentValue);
    return acc;
  }, {});
}

groupBy(['one', 'two', 'three'], (element) => element.length); // => { '3': ['one', 'two'], '5': ['three'] }

/* Task 10 */

function isEqual(obj1, obj2) {
  if (!Array.isArray(obj1) && !Array.isArray(obj1)) {
    return false;
  }
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

const object1 = {
  a: 1,
  b: {
    c: 3,
    d: {
      e: 5,
    },
  },
};
const object2 = {
  a: 1,
  b: {
    c: 3,
    d: {
      e: 5,
    },
  },
};

isEqual(object1, object2); // => true

const object11 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 5,
    },
  },
};
const object22 = {
  a: 1,
  b: {
    c: 3,
    d: {
      e: 5,
    },
  },
};

isEqual(object11, object22); // => false

const object111 = {
  a: 1,
  b: {
    c: 3,
    d: {
      e: 5,
    },
  },
};
const object222 = {
  a: 1,
  b: {
    c: 3,
    d: {
      e: 6,
    },
  },
};

isEqual(object111, object222); // => false

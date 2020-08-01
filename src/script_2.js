/* Task 1 */

function chunk(array, number) {
  if (Array.isArray(array)) {
    const result = array.reduce((acc, item, i) => {
      const chunkStep = Math.floor(i / number);

      if (!acc[chunkStep]) {
        acc[chunkStep] = [];
      }

      acc[chunkStep].push(item);

      return acc;
    }, []);
    return result;
  }
  return [];
}

chunk(['a', 'b', 'c', 'd'], 2);
chunk(['a', 'b', 'c', 'd'], 3);

/* Task 2 */

function difference(array1, array2) {
  let newArr = [];

  if (Array.isArray(array1) && Array.isArray(array2)) {
    newArr = array1
      .filter((element) => array2.indexOf(element) === -1)
      .concat(array2.filter((element) => array1.indexOf(element) === -1));
  }

  return newArr;
}

difference([2, 1], [2, 3, 4]);

/* Task 3 */

function findIndex(obj, element) {
  if (Array.isArray(obj) && obj.length > 0) {
    return typeof element === 'function' ? obj.findIndex(element) : obj.indexOf(element);
  }
  return [];
}

const numbers = [3, 5, 1, 6, 7];
findIndex(numbers, 1);

const users = [{ name: 'User1' }, { name: 'User2' }, { name: 'User3' }];

findIndex(users, (user) => user.name === 'User2');

/* Task 4 */

function flattenDeep(array) {
  return Array.isArray(array) ? array.flat(Infinity) : [];
}

flattenDeep([1, [2, [3, [4]], 5]]);

/* Task 5 */

function fromPairs(array) {
  return Array.isArray(array) ? Object.fromEntries(array) : {};
}

fromPairs([
  ['a', 1],
  ['b', 2],
]);

/* Task 6 */

function uniq(array) {
  return Array.isArray(array)
    ? array.filter((element, index) => array.indexOf(element) === index)
    : [];
}

uniq([2, 1, 2, 5, 6, 5, 7]);

/* Task 7 */

function every(object, item) {
  return Array.isArray(object) ? object.every(item) : [];
}

const users1 = [
  { name: 'User1', age: 22 },
  { name: 'User2', age: 22 },
  { name: 'User3', age: 23 },
];

every(users1, (user) => user.age === 22);

const users2 = [
  { name: 'User1', age: 22 },
  { name: 'User2', age: 22 },
  { name: 'User3', age: 22 },
];

every(users2, (user) => user.age === 22);

const users3 = [
  { name: 'User1', age: 22 },
  { name: 'User2', age: 23 },
  { name: 'User3', age: 20 },
];

every(users3, (user) => user.age < 24);

/* Task 8 */

function find(object, item) {
  return Array.isArray(object) ? object.filter(item) : [];
}

const users4 = [
  { name: 'User1', age: 22 },
  { name: 'User2', age: 23 },
  { name: 'User3', age: 20 },
];

find(users4, (user) => user.age < 23);

/* Task 9 */

function groupBy(object, key) {
  if (Array.isArray(object) && typeof key === 'function') {
    return object.reduce((acc, currentValue) => {
      const value = key(currentValue);
      acc[value] = acc[value] || [];
      acc[value].push(currentValue);
      return acc;
    }, {});
  }
  return {};
}

groupBy(['one', 'two', 'three'], (element) => element.length);

/* Task 10 */

function isEqual(obj1, obj2) {
  return typeof obj1 === 'object' && typeof obj2 === 'object'
    ? JSON.stringify(obj1) === JSON.stringify(obj2)
    : false;
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

isEqual(object1, object2);

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

isEqual(object11, object22);

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

isEqual(object111, object222);

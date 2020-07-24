/* Task 1 */

function chunk(array, number) {
  const arrLen = array.length;
  const newArr = [];

  if (Array.isArray(array) && array.length) {
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

  if (Array.isArray(array1) && Array.isArray(array1) && array1.length && array2.length) {
    newArr = array1
      .filter((element) => array2.indexOf(element) === -1)
      .concat(array2.filter((element) => array1.indexOf(element) === -1));
  }

  console.log(newArr);
  return newArr;
}

difference([2, 1], [2, 3, 4]); // => [1, 3, 4]

/* Task 3 */

// function findIndex(obj, element) {
//   console.log(obj.findIndex((item) => item === element));
//   return obj.findIndex((item) => item === element);
// }

// const numbers = [3, 5, 1, 6, 7];
// findIndex(numbers, 1); // => 2

// const users = [{ name: 'User1' }, { name: 'User2' }, { name: 'User3' }];

// findIndex(users, (user) => user.name === 'User2'); // => 1

/* Task 4 */

function flattenDeep(array) {
  let newArr = [];

  if (Array.isArray(array) && array.length) {
    newArr = array.flat(Infinity);
  }

  console.log(newArr);
  return newArr;
}

flattenDeep([1, [2, [3, [4]], 5]]);

// /* Task 5 */
// function fromPairs() {
// // TODO: implement function
// }

// // Expected result
// fromPairs([['a', 1], ['b', 2]]); // => { 'a': 1, 'b': 2 }

/* Task 6 */

function uniq(array) {
  let newArr = [];

  if (Array.isArray(array) && array.length) {
    newArr = array.filter((element, index) => array.indexOf(element) === index);
  }

  return newArr;
}

uniq([2, 1, 2, 5, 6, 5, 7]); // => [2, 1, 5, 6, 7]


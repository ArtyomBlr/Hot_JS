/* Task 1 */

function chunk(array, number) {
  const arrLen = array.length;
  const newArr = [];
  for (let i = 0; i < arrLen; i += number) {
    newArr.push(array.slice(i, i + number));
  }
  return newArr;
}

chunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']]
chunk(['a', 'b', 'c', 'd'], 3); // => [['a', 'b', 'c'], ['d']]

/* Task 2 */

// function difference(array1, array2) {
//   const newArr = array1.concat(array2).sort();
//   console.log(newArr);
//   newArr.forEach((element, i, array) => {
//     if (element !== array[i + 1]) {
//       console.log(array[i]);
//     }
//   });
//   return newArr;
// }

// difference([2, 1], [2, 3, 4]); // => [1, 3, 4]

// /* Task 3 */

// function findIndex(obj, element) {
//   console.log(obj.indexOf(element));
//   return obj.indexOf(element);
// }

// const numbers = [3, 5, 1, 6, 7];
// findIndex(numbers, 1); // => 2

// const users = [{ name: 'User1' }, { name: 'User2' }, { name: 'User3' }];

// findIndex(users, (user) => user.name === 'User2'); // => 1

/* Task 4 */

function flattenDeep(array) {
  return array.flat(Infinity);
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
  array.filter((element, index) => array.indexOf(element) === index);
}

uniq([2, 1, 2, 5, 6, 5, 7]); // => [2, 1, 5, 6, 7]

/* Task 7 */

function every(array, age) {
  const newArr = array.every((element) => element === age);
  console.log(newArr);
}

const users = [
  { name: 'User1', age: 22 },
  { name: 'User2', age: 22 },
  { name: 'User3', age: 23 },
];

every(users, (user) => user.age === 22); // => false

const users1 = [
  { name: 'User1', age: 22 },
  { name: 'User2', age: 22 },
  { name: 'User3', age: 22 },
];

every(users1, (user) => user.age === 22); // => true

const users2 = [
  { name: 'User1', age: 22 },
  { name: 'User2', age: 23 },
  { name: 'User3', age: 20 },
];

every(users2, (user) => user.age < 24); // => true

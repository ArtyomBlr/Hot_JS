/* Task 1 */

function createObject(obj) {
  const arrayFromObj = Object.getOwnPropertyNames(obj);
  return arrayFromObj.reduce((acc, key) => {
    if (typeof acc[key] === 'function') {
      return { ...acc, [key]: acc[key].bind(obj) };
    }
    return acc;
  }, obj);
}

const obj1 = {
  testField: 1,
  getTestField() {
    return this.testField;
  },
};

const getTestField1 = obj1.getTestField;
getTestField1.bind(obj1)();

const obj2 = createObject({
  testField: 1,
  getTestField() {
    return this.testField;
  },
});

const getTestField2 = obj2.getTestField;
getTestField2();

/* Task 2 */

function Collection(constructor) {
  let list = [];

  this.readAll = () => console.log(list);

  this.add = (id, name) => {
    const addCollection = new constructor(id, name);
    list.push(addCollection);
  };

  this.get = (element) => {
    const getElement = list.find(element);
    Object.seal(getElement);

    return {
      update(item) {
        item(getElement);
        return this;
      },
      read() {
        return getElement;
      },
      remove() {
        list = list.filter((elem) => elem.id !== getElement.id);
        return getElement;
      },
    };
  };

  this.getBy = (element) => {
    const getElementBy = list.filter(element);

    return {
      update(item) {
        getElementBy.map(item);
      },
      read() {
        return getElementBy;
      },
    };
  };
}

function Dog(id, name) {
  this.id = id;
  this.name = name;
}

const dogsCollection = new Collection(Dog);

dogsCollection.add(1, 'Test name1');
dogsCollection.add(2, 'Test name2');
dogsCollection.add(3, 'Test name3');

dogsCollection.readAll();

const dogsCollectionItem = dogsCollection.get((dog) => dog.id === 1);

dogsCollectionItem
  .update((dog) => {
    dog.name = 'Updated test name 1';
  })
  .update((dog) => {
    dog.someNewField = 'Some new field';
  });

dogsCollectionItem.read();

const dogsCollectionItems = dogsCollection.getBy((dog) => dog.id < 3);

dogsCollectionItems.update((dog, index) => {
  dog.name = `Updated test name ${index}`;
});

dogsCollectionItems.read();

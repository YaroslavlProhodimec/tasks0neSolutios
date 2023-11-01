let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = function (arr) {
  return arr.map((el) => {
    return { fullName: el.name + el.surname, id: el.id };
  });
};
console.log(usersMapped, "usersMapped");
/*
  usersMapped = [
    { fullName: "Вася Пупкин", id: 1 },
    { fullName: "Петя Иванов", id: 2 },
    { fullName: "Маша Петрова", id: 3 }
  ]
  */

console.log(usersMapped[0]?.id); // 1
console.log(usersMapped[0]?.fullName); // Вася Пупкин

let arr = [1, 2, 3];

const shuffle = (array) => {
  // for (let i = 0; i < arr.length; i++) {
  for (let i = array.length - 1; i > 0; i--) {
    let tmp = arr[i];
    let random = Math.floor(Math.random() * (i + 1));
    // console.log(random, "random");
    [array[i], array[random]] = [array[random], array[i]];
    // arr[i] = arr[random];
    // arr[random] = tmp;
  }
  return arr;
};
// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }

// подсчёт вероятности для всех возможных вариантов
let count = {
  123: 0,
  132: 0,
  213: 0,
  231: 0,
  321: 0,
  312: 0,
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join("")]++;
}

// показать количество всех возможных вариантов
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

const getAverageAge = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i].age;
    count += char;
  }
  return count / arr.length;
};
console.log(getAverageAge(arr));

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

function unique(arr) {
  let newObj = {};

  for (let i = 0; i < strings.length; i++) {
    let char = strings[i];
    if (!newObj[char]) {
      newObj[char] = true;
    } else {
      newObj[char] = false;
    }
  }
  return Object.keys(newObj);
}
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

alert(unique(strings)); // кришна, харе, :-O
console.log(unique(strings)); // кришна, харе, :-O

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

const groupById = (arr) => {
  let newObj = {};
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i].id;
    newObj[char] = newObj[char] ? [...arr[i], newObj[char]] : arr[i];
  }
  return newObj;
};
console.log(groupById(users));
// /*
// после вызова у нас должно получиться:
usersById = {
  john: { id: "john", name: "John Smith", age: 20 },
  ann: { id: "ann", name: "Ann Smith", age: 24 },
  pete: { id: "pete", name: "Pete Peterson", age: 31 },
};

// */
const myNumbers = [3, 5, -4, 8, 11, 1, -1, 6];

const x = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    let numberOne = arr[i];
    for (let j = i + 1; j < arr.length - 1; j++) {
      let numberTwo = arr[j];
      if (numberOne + numberTwo === target) {
        return [numberOne, numberTwo];
      }
    }
  }
  return arr;
};
console.log(x(myNumbers, 10));

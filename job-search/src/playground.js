// Spread Operator
// const fruits = ["Apple", "Banana", "Orange"];
// const vegetables = ["Cucumber", "Radish"];

// const mix = [...fruits, ...vegetables];
// console.log(mix);

/*
// JS Object: Properties and Methods
const developer = {
  salary: 1000,
  experience: 4.5,
  techStack: ["Vue", "HTML", "CSS"],
  lookingForWork: true,
  doubleSalary() {
    this.salary = this.salary * 2;
    this.lookingForWork = false;
  },
};
console.log(developer);
developer.doubleSalary();
console.log(developer.salary);
console.log(developer.lookingForWork);
*/

/*
// Multiple Describe Function - Jest
export const evenOrOdd = (number) => {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

export const multiply = (num1, num2) => num1 * num2;
*/

/*
// Map Method -- Array
const numbers = [1, 2, 3, 4, 5];

const square = numbers.map((number) => {
  return number * number;
});

console.log(square);
*/

/*
let n = "1" + 1; // '11'
n = n - 1; //10
console.log(n);
*/

/*
//ES6 Review: Dynamic Object Properties
const favoriteFood = "sushi";

const goodFood = {
  [favoriteFood]: true,
  //square bracket[] --is a special syntax in JS to wrap the key in sq bracket --this syntax tells JS look in a name of favoriteFood and then find its corresponding value then substitute the value as a property in an object--output: {sushi: true}
  //dynamic object properties --result of some other thing in our program or it can vary and it can be set from another source--e.g we could get data from the user(or in API) and then assign it to a variable and then set that as the object property.
};
console.log(goodFood);
*/

/*
//Axios Package --HTTP Request
const axios = require("axios"); // importing axios in old importing syntax

const url = "http://127.0.0.1:3000/jobs"; // axios to hit endpoint

axios.get(url).then((response) => {
  console.log(response.data);
}); // get method --use to make axios a request to a given url --return a promise as this is an async operation
// then method --handles the response object and the response object(represents the entire HTTP response) does is store our data that we got from our endpoint and other info such as response status and all additional details about how the request actually went --represents what to do when the promise resolves or when the request completes
// data property --get the actual response from the server e.g the actual array of jobs --on the response object there is a data property
*/

/*
// ES6 Review Async and Await Syntax
const axios = require("axios"); // importing axios in old importing syntax

const url = "http://127.0.0.1:3000/jobs"; // axios to hit endpoint

// Promise-Based then syntax
const fetchJobVer1 = () => {
  axios.get(url).then((response) => {
    console.log(response.data);
  });
};

// Async/Await Syntax
const fetchJobVer2 = async () => {
  const response = await axios.get(url);
  console.log(response.data);
};
fetchJobVer2();


// 1
console.log("Test start");

// 4
setTimeout(() => console.log("0 sec timer"), 0);

// 3
Promise.resolve("Resolved Promise 1").then((res) => console.log(res)); // allows us to build a promise --create a promise that is immediately has a success value(fulfilled) --this will executed first before timer because of microtasks queue

Promise.resolve("Resolved Promise 2").then((res) => {
  for (let i = 0; i < 10; i++) console.log(res);
});

// 2
console.log("Test end");
*/

/*
// Slice Method
const sushi = [
  "Tuna",
  "Salmon",
  "Yellowtail",
  "Eel",
  "Shrimp",
  "Octupos",
  "Uni",
];

console.log(sushi.slice(2)); // [ 'Yellowtail', 'Eel', 'Shrimp', 'Octupos', 'Uni' ] --1 argument
console.log(sushi.slice(2, 4)); // [ 'Yellowtail', 'Eel' ] --2 argument
*/

/*
// REVIEW: Array Sets

// Arrays --order
// Object --association
// Sets --uniqueness --prohibits duplication --unordered --a lot easier to finf whether an element exists in a set compared to an array

const number = new Set();
number.add(5);
number.add(10);
number.add(15);

number.add(5);
number.add(15);

number.add(25);
console.log(number);
*/

/*
// Filter Array
const numbers = [1, 3, 5, 7, 2, 9, 11, 6];

console.log(numbers.filter((number) => number > 6));

const jobs = [
  { title: "Angular Developer", organization: "Microsoft" },
  { title: "Programmer", organization: "Google" },
  { title: "Developer", organization: "Microsoft" },
];

console.log(jobs.filter((job) => job.organization === "Microsoft"));

// CLOSURES
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();
// 46

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

h();
f();
// 1554

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();
*/

// REACTIVITY
let a = 1;
let b = 2;
let c = a + b;
console.log(c); // 3 ---JS works is it evaluate the right side of the equal sign first (1 + 2).

// JS does not establish a connection with variable C in terms of saying C is going to be equal to whatever A and B is. A and B are just placeholders for actual number.

a = 8; // --if value of A change to 8, the value of c is not going to change to 10 to reflect the value of 8 + value of 3.

console.log(c); // 3 ---- The new value of A + existing value of B is not going to update, instead the value of C is going to be its original value at the time C was assigned which is 3.

// **THEREFORE: c is not reactive --it is not reacting to the changes in A and B because this syntax in JS(vanilla) does not mean connect C to whatever value A + whatever value B. It just simply does a one time SUM of the present value A + the present value of B at the time C was assigned

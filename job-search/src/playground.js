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

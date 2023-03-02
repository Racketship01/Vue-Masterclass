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
/*
let a = 1;
let b = 2;
let c = a + b;
console.log(c); // 3 ---JS works is it evaluate the right side of the equal sign first (1 + 2).

// JS does not establish a connection with variable C in terms of saying C is going to be equal to whatever A and B is. A and B are just placeholders for actual number.

a = 8; // --if value of A change to 8, the value of c is not going to change to 10 to reflect the value of 8 + value of 3.

console.log(c); // 3 ---- The new value of A + existing value of B is not going to update, instead the value of C is going to be its original value at the time C was assigned which is 3.

// **THEREFORE: c is not reactive --it is not reacting to the changes in A and B because this syntax in JS(vanilla) does not mean connect C to whatever value A + whatever value B. It just simply does a one time SUM of the present value A + the present value of B at the time C was assigned
*/

/*
//------- REF Function
const { ref } = require("vue"); // older way of importing exporting from another file as we are working with a plain JS file and depending on the version of Node, we may not necessarily have the import syntax available here because we dont have webPack running through this file

// ref() --returns a reactive object (plain JS object)that is able to deal with reactivity and hides the value that we passed in under its value property
let a = ref(1);
let b = ref(2);
// {value: 1, otherMethods} --value property gives us the original value that we pass in
console.log(a.value);
console.log(b.value); // verify that we can access data


let c = a.value + b.value;
console.log(c); // 1 + 2 = 3

a.value = 10;
console.log(c); // 3 --original value is non-reactive, we can acces it and reuse it but does not add reactivity behavior


let c = ref(a.value + b.value); // ref(3) --this syntax will  be differ from above as the c will now going to return a reactive object not the sum of a.value and b.value
console.log(c.value); // 3

a.value = 10;
console.log(c.value); // 3 --original value is non reactive even tho we change the value of a to 10
*/

/*
//--------Vue Computed Function from Vue Library

const { ref, computed } = require("vue");

let a = ref(1);
let b = ref(2);

// **computed() --keeping track of changes and re-evaluating whenever see a changes then rerun the computed function
let c = computed(() => a.value + b.value); // computed function returns a reactive object, exact kinds of object in A and B which is going to be a JS object with a value property set to the computation.
console.log(c); // reactive object
console.log(c.value); // 3

a.value = 10; //--tie the computation of C based on the reactivity of A and B as those values changes, then update C (similar idea to the computed property in a component)
console.log(c.value); // 12

b.value = 15;
console.log(c.value); // 25
*/

/*
//----------One More Example with Another Primitive
const { ref, computed, reactive, toRef, toRefs } = require("vue");

// ---------(String)
/*
const name = ref("Boris");
console.log(name.value); // Boris

const title = computed(() => name.value + " the Great!");
console.log(title.value); // Boris the Great!

name.value = "Peter";
console.log(title.value); // Peter the Great!
*/

// ------------(Object)
const person = ref({
  name: "Boris",
  other: (this.name = "Peter"),
});

console.log(person); // reactivity object that ref function being returned

console.log(person.value); // { name: 'Boris', other: (this.name = "Peter") } --returned a JS object as the value property under person object

const title = computed(() => person.value.name + " the Great!");
console.log(title.value); // Boris the Great!

person.value.name = "Peter";
console.log(title.value); // Peter the Great!

/*
let title1 = person.name + " the Great!";
console.log(title1); // Boris the Great!

person.name = "Peter";
console.log(title1); // Boris the Great!

title1 = person.other + " the Great!";
console.log(title1); // Peter the Great!
*/

// -------Reactive Function

const person1 = reactive({
  name: "Boris",
  other: (this.name = "Peter"),
});

const title1 = computed(() => person.name + " the Great!");
console.log(title1.value); // Boris the Great!

person1.name = "Peter";
console.log(title1.value); // Peter the Great!

//----------Multiple Properties in Reactive Object
const person2 = reactive({
  firstName: "Boris",
  lastName: "Martin",
});

const title2 = computed(
  () => `${person2.firstName} ${person2.lastName} the Great!`
);
console.log(title2.value); // Boris Martin the Great!

person2.firstName = "Peter";
console.log(title2.value); // Peter Martin the Great!

person2.lastName = "Ford";
console.log(title2.value); // Peter Ford the Great!

//---------Multiple Level of Reactivity
const person3 = reactive({
  firstName: "Boris",
  lastName: "Martin",
});

const title3 = computed(
  () => `${person3.firstName} ${person3.lastName} the Great!`
);
const titleLength3 = computed(() => title.value.length);
console.log(title3.value); // Boris Martin the Great!
console.log(titleLength3.value); // 25

person3.firstName = "Petersss";
console.log(title3.value); // Petersss Martin the Great!
console.log(titleLength3.value); // 28 --triggers change whenever theres a changes in reactivity object(person3) being run at the title3 computed function

person3.lastName = "Ford";
console.log(title3.value); // Peter Ford the Great!

//--------Destructuring Problems
const person4 = reactive({
  firstName: "Boris",
  lastName: "Martin",
});

const { firstName, lastName } = person4; // when destructuring from an object, vue is going to give us the original values --we lose the reactivity of the whole person object --we go from an object to a primitive and reactive function is not for primitive data type --therefore whenever we change a property in an reactive object it will not rerun because it does not have a reference or a link to the original reactive object

const title4 = computed(() => `${firstName} ${lastName} the Great!`);

console.log(title4.value); // Boris Martin the Great!

person4.firstName = "Petersss";
console.log(title4.value); // Boris Martin the Great!

person4.lastName = "Ford";
console.log(title4.value); // Boris Martin the Great!

// -------toRef Function

const person5 = reactive({
  firstName1: "Boris",
  lastName1: "Martin",
});

const firstName1 = toRef(person5, "firstName1"); //  1st argument: existing reactive object ---2nd argument: string representing property that we want to make a reactive property
const lastName1 = toRef(person5, "lastName1"); // returns its own reactive object that can be able to get references to reactive object properties and make them reactive

const title5 = computed(
  () => `${firstName1.value} ${lastName1.value} the Great!`
);

console.log(title5.value); // Boris Martin the Great!

person5.firstName = "Petersss";
console.log(title5.value); // Petersss Martin the Great!

person5.lastName = "Ford";
console.log(title5.value); // Petersss Ford the Great!

// -------toRefs Function

const person6 = reactive({
  firstName2: "Boris",
  lastName2: "Martin",
});

const { firstName2, lastName2 } = toRefs(person6); //accepts a reactive object and going to return another reactive object where every individual property is going to be reactive with value property as reference
// firstName2 -- {value: 'Boris'}
// lastName2 -- {value: 'Boris'}

const title6 = computed(
  () => `${firstName2.value} ${lastName2.value} the Great!`
);

console.log(title6.value); // Boris Martin the Great!

person6.firstName = "Petersss";
console.log(title6.value); // Petersss Martin the Great!

person6.lastName = "Ford";
console.log(title6.value); // Petersss Ford the Great!

// other example
const refPerson = toRefs(person6);

console.log(person6.firstName2); // "Boris "--simply take the firstName2 from person reactive object as a regular old reference to the string

console.log(refPerson.firstName2); // returns a another reactive object that wraps a value that is dynamically changing
/* 


# How we discuss?

- If do not have proper idea and not give attention, feel bit challenging in React

1. Answer in chatbox
2. Font/Zooming
3. If do not undrstand one, do not move forword
4. If overload, immediate stop
5. I expect you have idea about If-Else & For Loop

⚠️Disclaimer: I am not expert, only try to ensure your smooth react journey.

![https://prnt.sc/DrsNj_5LGqWS](https://i.postimg.cc/rsw8H5DP/Yellow-Black-Cricket-Tutorial-You-Tube-Thumbnail-1.jpg)

# JS----

```js
let name = "Subroto"; // String Literal
let age = 32; // Number Literal
let isApproved = false; // Boolean Literal
let typeUndefined; // Type undefined.
let typeUndefined = undefined; // Type undefined explicit declared.
let typeNull = null; // Type null. We use null when we want to clear the value of the variable.

console.log(typeof typeString); // string
console.log(typeof typeNumber); // number
```

# Falsy values (False)

if(falsyValue) {...}

```js
  false
  undefined
  null
  0
  '' (empty string)
  NaN (Not a Number)
```

# Javascript Array[], Object{}

```js
const persons = ["Rasel", "Ajoy", "Touhida"]; // Array [square brackets]
const personDetails = {firstName:"Atiqur", lastName:"Rahaman", age: 29, eyeColor:"Black"}; // Object {curly braces}

// You can access a JavaScript object like this:
person.name; or person["name"]; // It can also be accessed like this
```

# Destructuring

# Array Destructuring

```js
const [a, b] = ["Rakib", "Enam"];
```

# Object Destructuring

```js
const { name, age } = { name: "Pavel", age: 28 };
```

Can use a different variable name.

```js
const { name: name1, age } = { name: "Pavel", age: 28 };

console.log(name1); // Output: Pavel
console.log(age); // Output: 28
```

# Template Literals

```js
const name = "DoICT";
const greeting = `Hello, ${name}!`;
```

# Spread operator (...): copy all or part of an existing array or object into another array or object.

```js
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];

// numbersCombined = [...numbersOne, singleElement] // 2nd item is not array
const numbersCombined = [...numbersOne, ...numbersTwo]; // 1, 2, 3, 4, 5, 6

let dataObj = { name: "Subroto", dept: "ICT", dist: "Kushtia" };
dataObj = { ...dataObj, name: "kamal" }; // Output: {name:'Kamal', dept:'ICT', dist:'Kushtia'}

// Example 1
const name = "BD";
const person = { name: "John", age: 30, city: "New York" };
const clonePerson = { ...person, name }; // {name: 'BD', age: 30, city: 'New York'}

// Example 2
const address = "India";
const person = { name: "John", age: 30, city: "New York" };
const clonePerson = { ...person, address }; // {name: 'John', age: 30, city: 'New York', address: 'India'}
```

# Var, Let, Const -------------ES6------

var: function scope, not a block scope. Can be updated and re-declared in scope
let: block scope. bounded by {}, can be updated but cannot be re-declared in scope

```js
let a = 10;
let a = 10; // It is not allowed
a = 10; // It is allowed
```

```js
const person = {
  name: "Ronik",
  age: 30,
};

// Changing the property of the object
person.age = 31; // This is allowed

// Adding a new property
person.city = "Khulna"; // This is also allowed

// Trying to reassign the object itself
person = {}; // This will cause an error
```

const: block scope, maintain constant values. can't be updated or re-declared in scope

# Arrow Function

Conciseness: Arrow functions are more concise, especially when the function body is a single expression.
If the body is more than one line or requires multiple statements, you can use curly braces {} and include a return statement.

```js
// Regular function
function add(a, b) {
  return a + b;
}

// Regular function same as before
const add = function (a, b) {
  return a + b;
};
```

```js
const add = (a, b) => a + b;

const square = (a) => a * a;

console.log(add(2, 3)); // Function Call
```

# The Rest Operator

Whatever we pass to a rest operator that convert to an array

```js
function sum(...args) {
  //   console.log(args); // array(1, 2, 3, 1)
  return args.reduce((a, c) => a + c);
}

console.log(sum(1, 2, 3, 1));
```

# Default Parameters

```js
function interest(principal, rate = 3.5, years = 6) {
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000));
```

# Debugging

1. Console
2. Debugging Pointer on Browser
3. Debugging Pointer on Code

# Map - Commonly used to create a new array by applying a function to each element of an existing array.

It works with arrays, but you can also use it with objects in a slightly different way.

```js
const array1 = [1, 2, 3, 4];
// arr.push(4);
// console.log(arr);
const map1 = array1.map((x) => x * x);
console.log(map1);
```

```js
const users = [
  { id: 1, name: "Mahafuj", age: 25 },
  { id: 2, name: "Saiful", age: 30 },
  { id: 3, name: "Jahangir", age: 35 },
];

// Using map to create an array of names
const userNames = users.map((user) => user.name);

console.log(userNames); // Output: ['Alice', 'Bob', 'Charlie']
```

# Filter Array ----------------

Each iteration pass an element and if function return true that element keep in filtering

```javascript1
const filtered = [12, 5, 8, 130, 44].filter((value) => value > 50); // here value is arg, return value>50
const filtered = [12, 5, 8, 130, 44].filter((value) => {return value > 50;});
const filtered = [12, 5, 8, 130, 44].filter((value) => {value > 50}); // Error, if use {} then must need to give return; function must have a return value eight explecit or implecit (one statement)
```

```js
array.filter(function())
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6); // Who follow condition remain here; arror function(loop iterate for every array item)
console.log(result); // Expected output: Array ["exuberant", "destruction", "present"]
```

```js
let cities = [
  { name: "Los Angeles", population: 3792621 },
  { name: "New York", population: 8175133 },
  { name: "Chicago", population: 2695598 },
  { name: "Houston", population: 2099451 },
  { name: "Philadelphia", population: 1526006 },
];
// arrow function
const bigCities = cities.filter((city) => city.population > 3000000); // arrow function

// Regular function
let bigCities = cities.filter(function (e) {
  return e.population > 3000000;
});
```

# import/export -------

Named exports: are constructed using curly braces. Default: exports are not
https://prnt.sc/Ck-jB_DR7v_r

```js
// in person.js
const name = "Jesse 33";
const age = 40;
export { name, age };

// in message.js
const message = () => {
  const name = "Jesse";
  const age = 40;
  return name + " is " + age + "years old.";
};
export default message;
```

```html
<script type="module">
  import message from "./message.js";
  import { name, age } from "./person.js";
  console.log(message());
  console.log(name);
</script>
```

Modules: only work with the HTTP(s) protocol. A web-page opened via the file://protocol cannot use import / export.

## React Js-- Import/Export

```js
import "bootstrap/dist/css/bootstrap.css"; // node_modules import
import "./index.css"; // Direct File import
import Form from "./components/Form"; // Module Import
import { useState } from "react"; // Module Destructring Import
import { BsFillCalendarFill } from "react-icons/bs"; // Module Destructring Import
```

# Reduce()--- Callback function's return value will be the accumulator of next iteration what ever the return value we set.

```js
array.reduce(callbackFn, initialValue)
array.reduce(function(total, currentValue, currentIndex*, arr*), initialValue*)
```

- \* optional, On the first call, total is initialValue if the latter is specified; otherwise its value is array[0] in that case 5 ta element thakle 4 bar itaration hobe.

```js
const arr = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
); // currentValue oi iteration er value
console.log(sumWithInitial); // Expected output: 10
```

# React----

JSX,
React Components,
React Props,
React Conditionals,
useState,
useEffect

# Last Note: Only Project is Real

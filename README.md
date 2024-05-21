# JavaScript Basic

FireFox: SpiderMonkey<br>
Chrome: v8

### Node: C++ (v8) - Ryan Dahl

### ECMAScript/ES6 - 2015

### In Console of browser

```js
console.log("Hello World");
alert("yo");
```

# Ch-2 Basics

## 2.1 Variables

| Primitives | Reference types |
| :--------- | :-------------- |
| String     | Objects         |
| Numbers    | Array           |
| Boolean    | Function        |
| Symbol     |                 |
| undefined  |                 |
| null       |                 |

```js
let name = "Subroto"; // String Literal
let age = 32; // Number Literal
let isApproved = false; // Boolean Literal
let typeUndefined; // Type undefined.
let typeUndefined = undefined; // Type undefined explicit declared.
let typeNull = null; // Type null. We use null when we want to clear the value of the variable.
```

```js
let typeString = "String";
let typeNumber = 4;

console.log(typeof typeString); // string
console.log(typeof typeNumber); // number

typeString = 15;
typeNumber = "I am a string now";

console.log(typeof typeString); // number
console.log(typeof typeNumber); // string

// This is what we call a dynamic language, the type of this variables will be determined at runtime, base on the value er assign to them.

let typeNull = null;
console.log(typeof typeNull); // object
```

## 2.2 Object

```js
let person = {
  name: "Subroto",
  age: 37,
  height: 1.8,
};
console.log(person);

// We have to ways to work with this properties
// Dot Notation: Short and more consise is default Choise
person.name = "Goutom";
console.log(person.name);

// Bracket Notation: When we do not know the property untill runtime
person["name"]; // We pass a string that determines the name of the target property.
console.log(person["name"]);

let selection = "age";
person[selection]; // with the Bracket Notation we can use a variable which holds a string with the property name we want to access.
console.log(person[selection]);
```

## 2.3 Arrays

```js
let myArray = []; // This is whats is called an Array literal.

let selectedColors = ["red", "green"];
console.log(selectedColors);

selectedColors[2] = "yellow"; // With this syntax we are creating a new object i the array at index 2. If we jump a position it will create a <1 empty item> in that position.

console.log(typeof selectedColors); // An array is of type object.
console.log(selectedColors.length); // An array as several properties pre defined. The length property returns the number of items in an array.
```

## 2.4 Function

```js
// Performing a task
function greet(firstName, lastName) {
  console.log("Hello " + firstName + " " + lastName);
}

// Calculating a value
function square(number) {
  return number * number;
}

greet("Subroto", "Biswas");
console.log(square(3));
```

# Ch-3 Operators

## 3.1 Comparison Operators

An expression with a comparison operator will return a boolean value

```js
let x = 5;

console.log(x == "5");
console.log(x === 5);
console.log(x != "5");
console.log(x !== 5);
console.log(x > 5);
console.log(x < 5);
console.log(x >= 5);
console.log(x <= 5);
```

## 3.2 Equality Operators

```js
console.log(1 === 1); // true, because we are comparing the same type to the same value
console.log("1" === 1); // false, because we are comparing different types, a string to number.
```

## 3.3 Ternary Operator

```js
let costumerPoints = 90;
let typeCostumer = costumerPoints > 100 ? "gold" : "silver";
console.log(typeCostumer);
```

## 3.4 Logical Operators

Logical operators are used to determine the logic between variables or values. To make decisions on multiple conditions.<br>
These are the logical operators

- && (and operator) With the and operator both conditions or operator have to be true.
- || (or operator) With the or operator only one of the conditions has to be true.
- ! (not operator) The not operator converts true to false and vice-versa.

```js
// Falsy values (False)
    false
    undefined
    null
    0
    '' (empty string)
    NaN (Not a Number)

// Truthy: Anything not Falsy


console.log(false || true) // This will return true
console.log(false || 'Miguel') // This will return true because a non empty string is a Truthy value.
console.log(false || -1) // This will return true because any number different of 0 is a Truthy value.
console.log(false || 1 || 2) // This returns 1 because is the first Truthy operand.

// When using the '||' or operator the evaluation starts in the first operand, and stops in the first Truthy value it finds, if there are any. This is called short-circuiting

// A real world example to use this could be for default values.
// For example if a user picks a color we that color, if we does not pick a color we use the default value.

let userColor = 'red'
let defaultColor = 'blue'
console.log(userColor || defaultColor) // This basically means that if we have a value for the user color we use that, if we don't we use the default color.

userColor = undefined
console.log(userColor || defaultColor) // Here the user did not pick a color, the variable user is set to undefined, so we will use the default color.
```

**Very Important**
&&: ager value true hole porer ta show korbe
||: ager ta na thakle porer ta dekhabe. Default

```js
// isValid && "Valid Person" // isValid true hole Target show
// userColor || defaultColor // userColor false hole Target show
"Subroto" || "Goutotm" || "Amit"; // Subroto
```

[Quiz](https://github.com/jmschp/mosh-ultimate-javascript-mastery-series-part-1/blob/main/03%20Operators/11-%20Quiz.md)

# Ch-4 Control Flow

## 4.1 For...in (object) & For...of (array)

```js
// for-in (Itarate over properties of Object: key)
const person = {
  name: "Subroto",
  age: 30,
};

for (let key in person) console.log(key, person[key]);

// for-of (Itareate of elements/item of array: value)
const colors = ["red", "green", "blue"];

for (let value of colors) console.log(color);
```

## Exercise 1: Write a function that takes two numbers and returns the maximum of the two.

```js
// const max = (a, b) => (a > b ? a : b); // Need to keep before call

let number = max(99, 9);
console.log(number);

// It works after call
function max(a, b) {
  return a > b ? a : b;
}
```

## Exercise 2: Create a function that returns true if a images is in landscape format and false if is in portrait format.

```js
console.log(isLandscape(555, 4443));

function isLandscape(width, height) {
  return width > height;
}
```

## Exercise 3: FizzBuzz

```js
// Divisible by 3 => FIzz
// Divisible by 5 => Buzz
// Divisible by thoth 3/5 =>FuzzBuzz
// Not divisible by any => input
// Not a number => 'Not a number'

const output = fizzBuzz(true);
console.log(output);

function fizzBuzz(input) {
  if (typeof input != "number") return NaN;

  if (input % 3 == 0 && input % 5 == 0) return "FuzzBuzz";

  if (input % 3 == 0) return "Fuzz";

  if (input % 5 == 0) return "Buzz";

  return input;
}
```

## Exercise 4: Car Speed / Demerit Points

- ALways avoid magic number ie.70 because someone confuse by this codding and later on if you want to change this number you have to change it several places.
- Default variable declearation should be with const, if you have a situation to reassign value then use let.

```js
// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// More then 12 points -> License suspended

const output = checkSpeed(87);
console.log(output);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) return "Ok";

  const point = Math.floor((speed - speedLimit) / kmPerPoint);
  return point >= 12 ? "License Suspended" : "Point: " + point;
}
```

## Exercise 5: Even and Odd Numbers

```js
showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}
```

## Exercise 6: Count Truthy

```js
// Falsy(6): false, 0, "", null, undifine, NaN
const array = [1, 2, "", 5, false];

console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let value of array) {
    if (value) count++;
  }
  return count;
}
```

## Exercise 7: Pass an object to that function, and it should and is should display all the properties of the object that are of type string.

```js
const movie = {
  title: "3 idots",
  releaseYear: 2024,
  rating: 4.5,
  director: "Raz Kumar H",
};

shoeProperties(movie);

function shoeProperties(obj) {
  for (const key in obj) {
    if (typeof obj[key] == "string") console.log(key, obj[key]);
  }
}
```

## Exercise 8: Create a function that will sum all the multiples of 3 and 5 from 0 the limit argument passed.

```js
// Multiples of 3: 3, 6, 9 + Multiples of 5: 5, 10 = 33

console.log(sum(10));

function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum = sum + i;
    }
  }

  return sum;
}
```

## Exercise 9: Calculate the grade of the student. First calculate the average from an array of grade

- Single Responsibility Principle. Create function calcalateAverate(). If later on we need to find another average then we can use this function

```js
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const array = [50, 100, 90]; // average

console.log(calculationGrade(array));

function calculationGrade(marks) {
  const average = calcalateAverate(marks);

  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 70) return "C";
  if (average >= 60) return "D";
  return "F";
}

function calcalateAverate(array) {
  let total = 0;
  for (const value of array) total = total + value;

  return total / array.length;
}
```

## Exercise 10: Stars

```js
showStars(2);

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let j = 1; j <= row; j++) pattern += "*";
    console.log(pattern);
  }
}
```

## Exercise 11: Prime Numbers

- When there is nexted loop is a indication that we can extract the logic and put it somewhere else in a different function.

```js
showPrimes(20);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    isPrime(number) && console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}
```

# Ch-5: Objects

## 5.1 Basic

Object with collection of related items in key-value pairs. Value could be anything ie. number, string, boolean, function, another object etc. Object can be pass any function where all items will be avaiable.

```js
// Object - With object litaral {}
const circle = {
  radius: 1,
  location: {
    x: 10,
    y: 20,
  },
  isVisible: true,
  draw: function () {
    console.log("Draw");
  },
  move: function () {
    console.log("Move");
  },
};

circle.draw();
```

## 5.2 Factory Function: Produce javascript object

```js
// Factory Function
function createCircle(radius) {
  return {
    radius, // readius: readius
    draw() {
      console.log("Draw " + radius);
    },
  };
}

const circle1 = createCircle(5);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);
```

## 5.3 Constructor Functions

- this keyword return from here under the hood.

```js
// Pascal Notation
function Circle(radius) {
  this.radius = radius;
  this.draw = function draw() {
    console.log("Draw");
  };
}

// To create a new object using this function
const circle = new Circle(5);
console.log(circle);
```

## 5.4 Dynamic Nature of Objects

-In JavaScript object are dynamic, once they are created we can add new properties or methods to it.

- In javascript functions are Objects

```js
const circle = {
  radius: 1,
};

// const circle = {} // error, but we can change properties

circle.color = "Yellow";

delete circle.color;

console.log(circle);
```

## 5.5 Object store in address

In using object they are not stored in the variable. They are stored somewhere in the memory, and the address (or the reference) of that place in memory is store in the variable.

- Primitives are copied by their value.
- Objects are copied by their reference.

```js
let x = { value: 10 };
let y = x;

x.value = 20;

console.log(x, y);

// Another example
let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(increase(obj)); // Undefine
console.log(obj);
```

## 5.6 Math [See](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

```js
// Pi property
const pi = Math.PI;
console.log(pi);

// Random method
console.log(Math.random());

// Max method
console.log(Math.max(1, 2, 5, 4, 7, 9, 6));
```

## 5.7 String

```js
// String Primitive
const message1 = "   hi, this is a message   ";
console.log(typeof message1); // Returns "string".

// String Object
const message2 = new String("hi, this is another message");
console.log(typeof message2); // Returns "object".
```

## Template Literals. Good for email template ``

```js
const message = `This is
my
first don't message`;
console.log(message);
// Output: This is
my
first don't message

// Another Example
const name = "Subroto";
const message = `Hi ${name} ${2 + 3}
How are you?`;
console.log(message); // Hi Subroto 5
// How are you?
```

## 5.8 Date

```js
const now = new Date();

console.log(now.getDate()); // Get the day of the month.

console.log(now.setFullYear(2029)); // to set to a different date.

console.log(now.toDateString()); // Converts date object to string.

console.log(now.toTimeString()); // Return the time component of the date object.

console.log(now.toISOString()); // 2024-05-17T15:01:22.899Z
```

## Exercise 1: Address Object

```js
const address = {
  street: "NS Road",
  city: "Kushtia",
  zipCode: "7021",
};

showAddress(address);

function showAddress(address) {
  for (const key in address) {
    console.log(key, address[key]);
  }
}
```

## Exercise 2: Create object with Factory and Constructor Functions

- Constructor is used Pascal Notation

```js
const address1 = createAddress("CR Datto", "Rajbari", "7022"); // Factory
const address2 = new Address("MG Road", "Delhi", "7023"); // Constructor

console.log(address1); // Factory
console.log(address2); // Constructor

// Factory Function
function createAddress(street, city, zip) {
  return {
    street,
    city,
    zipCode: zip,
  };
}

// Constructor Function
function Address(street, city, zip) {
  this.street = street;
  this.city = city;
  this.zipCode = zip;
}
```

## Exercise 4: Create object with object literal Blog Post Object

```js
// title
// body
// author
// views
// comments
//      (author, body)
// isLive

const post = {
  title: "My Title",
  body: "This is the body of post.",
  author: 5,
  views: 4455,
  comments: [
    { author: "Fahim", body: "I am good" },
    { author: "Jamil", body: "You are here" },
  ],
  isLive: true,
};

console.log(post);
```

## Exercise 5: Blog Post with Constructor Functions

```js
let post = new Post("a", "b", "c");

console.log(post);

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}
```

## Exercise 6: Price Range Object

```js
let priceRanges = [
  { label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$", tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
  { label: "$$$", tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 30 },
];
```

# Ch-6: Arrays

- Array is object in js. We can access property and method using (.) notetion.

## 6.1 Adding array

The splice() method adds new items to an array. Splice-সংযুক্ত করান<br>
The slice() method slices out a piece of an array. Slice - টুকরা বা ফালি

```js
const numbers = [3, 4];

// End: adds a new element to an array (at the end)
numbers.push(5, 6); // 3, 4 => 3, 4, 1, 2

// Begining: adds a new element to an array (at the beginning)
numbers.unshift(1, 2); // 3, 4 => 1, 2, 3, 4

// Middle | (start index, remove item number, item)
numbers.splice(2, 0, "a", "b");
// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1); // Banana,Orange,Apple,Mango=>Orange,Apple,Mango

console.log(numbers);
```

## 6.2 Finding Elements (Primitives)

```js
const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf(1));
console.log(numbers.indexOf(1, 2));
console.log(numbers.lastIndexOf(1));

console.log(numbers.includes(1));
```

##

```js
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
];

const course = courses.find(function (course) {
  return course.name === "a";
});

console.log(course);
```

## 6.3 Finding Elements (Object)

```js
// arr.find(callback(element[, index[, array]])[, thisArg])
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
];

const course = courses.find(function (course) {
  return course.name === "a";
});

console.log(course);

// Using arrow function
const course = courses.find((course) => course.name === "b");

console.log(course);
```

## 6.4 Removing Elements

```js
const numbers = [1, 2, 3, 4];

// End: removes the last element from an array
const last = numbers.pop();

// Begining: Shifting is equivalent to popping, but on first element instead of the last.
const first = numbers.shift(); // Banana,Orange,Apple,Mango => Orange,Apple,Mango

// Middle | (start index, delete index, item)
numbers.splice(1, 2);

console.log(numbers); // Output: [1, 4]
```

## 6.5 Emptying an Array

```js
let numbers = [1, 2, 3, 4];

// Solution 1 (better)
numbers = [];

// Solution 2 (best)
numbers.length = 0;

// Solution 3
numbers.splice(0, numbers.length);

console.log(numbers);
```

## 6.6 Combining and Slicing Arrays & The Spread Operator

```js
const first = [1, 2, 3];
const second = [4, 5, 6];

// Solution1: Concate
const combined = first.concat(second);

// Solution2: Spread (Best)
const combined = [...second, "a", ...first];

const sliced = combined.slice(2, 4); // slice(start, end)
console.log(combined);
```

## 6.7 Iterating an Array

```js
const numbers = [1, 2, 3];

for (const number of numbers) {
  console.log(number);
}

numbers.forEach((number, index) => console.log(index, number));
```

## 6.8 Joining Arrays

```js
const numbers = [1, 2, 3];

const joined = numbers.join(",");

const message = "This is my first message";
const parts = message.split(" ");
console.log(parts);

const combined = parts.join("-");
console.log(combined); // This-is-my-first-message (Used in url slug)
```

## 6.9 Sorting Arrays

```js
// Premitive types
const numbers = [2, 3, 1];

numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

// For array of objects
const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javaScript" },
  { id: 3, name: "ZavaScript" },
  { id: 4, name: "aavaScript" },
];

courses.sort(function (a, b) {
  // a<b => -1
  // a>b => 1
  // a===b => 0
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1; // Exchange
  if (nameA > nameB) return 1; // No Exchange
  return 0; // No Exchange

  // we can do this with this. in one line
  return nameA - nameB; // a=2, b=3; a-b=1, a=4, b=1 a-b=-3
});

console.log(courses);
```

## 6.10 Testing the Elements of an Array

```js
const numbers = [1, 2, -1, 3];

// every() - All element follow condition
// some() - At leaset one element follow condition

const allPositive = numbers.every(function (value) {
  return value >= 0;
}); // False

const atLeastOnePositive = numbers.some(function (value) {
  return value >= 0;
}); // True

console.log(atLeastOnePositive);
```

## 6.11 Filter

- **Filter and Map method return new array, not modify original one**
- For a certain element if callback function return true then that element remain in filter

```js
const numbers = [1, 2, -1, 3];
// For a certain element if callback function return true then that element remain in filter
const filtered = numbers.filter((number) => number >= 0);

console.log(filtered);
```

## 6.12 Mapping

We can map an item of an array to something else

```js
const numbers = [1, 2, -1, 3];

// We can map an item of an array to something else
const items = numbers.map((n) => "<li>" + n + "</li>");

// Array to Object.
const items = filtered.map((n) => {
  return { value: n };
});

// Array to Object. in sort (First bracket need to provide to separate code block{} and object litarel {})
const items = numbers.map((n) => ({ value: n }));

const html = "<ul>" + items.join("") + "</ul>";

console.log(html);

// Filter and Map method return new array not modify original one
// Chaining
const numbers = [1, 2, -1, 3];

const items = numbers
  .filter((number) => number >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);

console.log(numbers, items);
```

## 6.13 Reducing an Array

- Reduce to a single value. Callback function's return value will be the accumulator of next iteration what ever the return value we set.

```js
const numbers = [1, 2, -1, 3];

// Rounds
// a = 0, c=1 => a=1
// a = 1, c=2 => a=3
// a = 3, c=-1 => a=2
// a = 2, c=3 => a=5

// If inital value is omitted. Just one stpe ahead
// a = 1, c=2 => a=3
// a = 3, c=-1 => a=2
// a = 2, c=3 => a=5

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

// in Short
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum); // output: 5
```

## Exercise 1- Array from Range

```js
const numbers = arrayFromRange(-6, -5);

console.log(numbers);

function arrayFromRange(min, max) {
  let index = 0;
  const array = [];
  for (let item = min; item <= max; item++) {
    array[index++] = item;
  }

  return array;
}

function arrayFromRange(min, max) {
  const array = [];
  for (let item = min; item <= max; item++) {
    array.push(item);
  }

  return array;
}
```

## Exercise 2- Includes an item in array

```js
const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 44));

function includes(array, searchElement) {
  return array.some(function (value) {
    return value === searchElement;
  });
}

// Solution 2
function includes(array, searchElement) {
  for (const element of array) if (element === searchElement) return true;
  return false;
}

// Solution 3
console.log(numbers.includes(-4));
```

## Exercise 3- There is an array we exclude its element that we find in another array.

```js
const numbers = [1, 2, 3, 4];

const output = except(numbers, [4, 2, 1]);

console.log(output);

function except(numbers, excluded) {
  const output = [];
  for (const element of numbers)
    if (!excluded.includes(element)) output.push(element);

  return output;
}
```

## Exercise 4 - Moving an Element

```js
// My Solution
const numbers = [1, 2, 3, 4];

const output = move(numbers, 2, 3);

console.log(output);

function move(numbers, index, offset) {
  index--;
  if (offset < 0 || offset >= numbers.length) return undefined;

  const targetElement = numbers[index];

  for (let i = index; i < offset; i++) {
    numbers[i] = numbers[i + 1];
  }

  numbers[offset] = targetElement;

  return numbers;
}

// Mosh Solution
const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, 0);

console.log(output);

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("Invalid Offset");
    return;
  }

  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}
```

## Exercise 5 - Count Occurrences (using reduce method)

- array.reduce() method, Its manin work is reduce an array to a single value

```js
// My Simple solution
const numbers = [1, 2, 3, 4, 1, 1];

const output = countOccurrences(numbers, 1);

console.log(output);

function countOccurrences(array, searchElement) {
  let output = 0;
  for (const element of array) if (element === searchElement) output++;

  return output;
}

// Using array.reduce() method, Its manin work is reduce an array to a single value
const numbers = [1, 2, 3, 4, 1, 2, 1];

const output = countOccurrences(numbers, 3);

console.log(output);

function countOccurrences(array, searchElement) {
  const initialValue = 0;
  return array.reduce((accumulator, currentValue) => {
    if (currentValue == searchElement) accumulator = accumulator + 1;
    return accumulator;
  }, initialValue);
}

// Mosh: Very Smart
function countOccurrences(array, searchElement) {
  return array.reduce((accumulator, currentValue) => {
    const occurence = currentValue === searchElement ? 1 : 0;
    return accumulator + occurence;
  }, 0);
}
```

## Exercise 6 - Get Max

- When array have a single output think about reduce method

```js
const numbers = [7, 2, 3, 22, 1, 2, 1, 57, 5];

const max = getMax(numbers);

console.log(max);

// Normal Function
function getMax(array) {
  if (array.length === 0) return undefined;

  let max = array[0];
  for (const element of array) if (max < element) max = element;

  return max;
}

// Reduce Method
function getMax(array) {
  if (array.length === 0) return undefined;

  return array.reduce((acc, currentValue) =>
    acc < currentValue ? currentValue : acc
  );
}
```

## Exercise 7 - Movies (Super important for react/next)

- All the movies in 2018 with rating > 4
- Sort them by their rating
- Desending order. ie. 4.7 top
- Pick their title only

```js
const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

filteredMovieTitles = movies
  .filter((movie) => movie.year == 2018 && movie.rating > 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((movie) => movie.title);

console.log(filteredMovieTitles);
```

# Ch-7: Functions

## 7.1- Function Declarations vs Expressions

```js
// Function declaration
function walk() {
  console.log("walk");
}

// Anonymous Function Expression
let run = function () {
  console.log("run");
};

// Named Function Expression
const jump = function jump() {
  console.log("jump");
};

walk();
run();
jump();

// We can referent a function expression
const move = run;

move();
```

## 7.2 - Hoisting

- Hoisting is JavaScript's default behavior of moving declarations to the top.
- The key difference between Function Declaration and Function Expression is that:<br>
  Function declarations can be called before being declared<br>
  Function expression can not, it's the same as using a variable.

- The reason for this is when our JavaScript engine runs this code, it moves all function declarations to the top.<br>
  Its called Hoisting. The process of moving Function Declarations to the top of the file, and it is made automatically by the Javascript engine.

```js
walk(); // No Error
run(); // error
// Function declaration
function walk() {
  console.log("walk");
}

// Anonymous Function Expression
let run = function () {
  console.log("run");
};

run(); // No Error
```

## 7.3 - Arguments

Every function in JavaScript as a special object called arguments.

```js
function sum() {
  // console.log(arguments); // 1, 2, 3, 10
  let total = 0;
  for (const value of arguments) {
    total += value;
  }

  return total;
}

console.log(sum(1, 2, 3, 10));
```

## 7.4- The Rest Operator

- If we want a function with varying number of parameters we can use the rest operator. It should not be mistaken by the spread operator
- A function's last parameter can be prefixed with ... which will cause all remaining (user supplied) arguments to be placed within a "standard" JavaScript array.
- Only the last parameter can be a "rest parameter".

```js
function sum(...args) {
  //   console.log(args); // array(1, 2, 3, 1)
  return args.reduce((a, c) => a + c);
}

console.log(sum(1, 2, 3, 1));
```

## 7.5- Default Parameters

Once we give a paramter a default value, all the following parameters should also have a default value.

```js
function interest(principal, rate = 3.5, years = 6) {
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000));

// If you do not give default value in last then you can do this tricks
function interest(principal, rate = 3.5, years) {
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000, undefined, 5));
```

## 7.6- Getters and Setters

- Make any method that can be use as property

```js
const person = {
  firstName: "Subroto",
  lastName: "Biswas",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" "); // Taking as string and make it array

    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = "Goutom Biswass"; // Setter: passing "Goutom Biswass" as argument

console.log(person.fullName); // Getter: no need to use fullName()
```

## 7.7- Try and Catch

- When encounter throw new Error() then stop executing rest of code of that method and control goes to catch block

```js
const person = {
  firstName: "Subroto",
  lastName: "Biswas",
  set fullName(value) {
    // console.log(typeof value);
    if (typeof value !== "string") throw new Error("Value is not a stiring.");

    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error("Enter a first and last name");

    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person.fullName = ""; // person.fullName = true;
} catch (error) {
  alert(error); // Not show in console
}

console.log(person);
```

## 7.8- Local vs Global Scope

```js
const color = "red"; // This variable has global scope. We can acesses it anywhere

function start() {
  const message = "hi"; // This variable is only accessible inside of the function. The scope of this constant is limited to the block in which it is define.
  const color = "blue"; // If we define a new variable "color" with local scope, it will override the variable with global scope. Local scope take precedence over global scope.
  console.log(color);
  if (true) {
    const another = "bye"; // This const it is only visible in the if block
  }
  // console.log(another); // If we try to log the "another" outside of the if block, we will have a Reference Error.

  for (let i = 0; i < 5; i++) {
    console.log(i); // The variable i is only accessible in the for loop code block.
  }
}

start();
```

## 7.9- Let vs Var

- var ---> Creates functions scope variables
- let & const ---> Create block scope variables

## 7.10- The this Keyword

This references the object that is executing the current function.<br>
If that function is part of na object we call that function a method.<br>
method ---> this references that object itself <br>

If that function is a regular function, not part of na object.<br>
function ---> this references the global object (which is the window object in browsers and global in node)

```js
// method -> obj
// function -> global (window, global)

const video = {
  title: "a",
  play() {
    console.log(this);
  },
};

// obj function
video.stop = function () {
  console.log(this);
};

// global function | // Here this is referencing the global object (window in browser, global in node)
function playVideo() {
  console.log(this);
}

// Constructor function, Pascal Case
function Video(title) {
  this.title = title;
  console.log(this);
}

// video.stop();
// playVideo();
const v = new Video("B"); //{new empty object by new keyword},  This video is different form top video object

// Another illustration of this
const video = {
  title: "myTitle",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      // If we use a function as a callback function for the forEach method, the this keyword references the global object.
      console.log(tag, this.title);
    }, this); // As a second argument we can pass this keyword. So the this in the callback function references the object itself and not the global object.
  },
};

video.showTags();
```

## 7.11- Changing this

```js
// Another example
function playVideo() {
  console.log(this);
}

playVideo.call({ name: "Subroto" });
playVideo.apply({ name: "Subroto" });
const fn = playVideo.bind({ name: "Subroto" });
fn();

playVideo.bind({ name: "Subroto1" })();

// Another way
// arrow function inharate this from the containing function
const video = {
  title: "myTitle",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(tag, this.title);
    });
  },
};

video.showTags();
```

##

```js

```

##

```js

```

##

```js

```

##

```js

```

##

```js

```

##

```js

```

##

```js

```

##

```js

```

##

```js

```

##

```js

```

##

```js

```

##

```js

```

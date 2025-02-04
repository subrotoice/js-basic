# Chapters

[Ch-1: Introduction](https://github.com/subrotoice/js-basic#ch-1-introduction)<br>
[Ch-2: Javascript Basics](https://github.com/subrotoice/js-basic#ch-2-javascript-basics)<br>

- 2.1 Variables
- 2.2 Object
- 2.3 Arrays
- 2.4 Function
- 2.5 Map and Set

[Ch-3: Operators](https://github.com/subrotoice/js-basic#ch-3-operators)<br>

- 3.1 Comparison Operators
- 3.2 Equality Operators
- 3.3 Ternary Operator
- 3.4 Logical Operators

[Ch-4: Control Flow](https://github.com/subrotoice/js-basic#ch-4-control-flow)<br>

- 4.1 For...in (object) & For...of (array)

[Ch-5: Objects & Class](https://github.com/subrotoice/js-basic#ch-5-objects--class)<br>

- 5.1 Basic
- 5.2 Factory Function: Return javascript object
- 5.3 Factory Function with Private Data
- 5.4 Constructor Functions
- 5.5 Different between Factory and Constructor function
- 5.6 In JavaScript, there are 6 ways to create objects.
- 5.7 Dynamic Nature of Objects
- 5.8 Object store in address
- 5.9 Declaring a Class
- 5.10 Creating an Object (Instance of a Class)
- 5.11 Adding Static Methods and Properties
- 5.12 Inheritance
- 5.13 Math
- 5.14 String
- 5.15 Date

[Ch-6: Arrays](https://github.com/subrotoice/js-basic#ch-6-arrays)<br>

- 6.1 Adding array
- 6.2 Finding Elements (Primitives)
- 6.3 Finding Elements (Object)
- 6.4 Removing Elements
- 6.5 Emptying an Array
- 6.6 Combining and Slicing Arrays & The Spread Operator
- 6.7 Iterating an Array
- 6.8 Joining Arrays
- 6.9 Sorting Arrays
- 6.10 Testing the Elements of an Array
- 6.11 Filter
- 6.12 Mapping
- 6.13 Reducing an Array

[Ch-7: Functions](https://github.com/subrotoice/js-basic#ch-7-functions)<br>

- 7.1- Function Declarations vs Expressions
- 7.2 - Hoisting
- 7.3 - Arguments
- 7.4- The Rest Operator
- 7.5- Default Parameters
- 7.6- Getters and Setters
- 7.7- Try and Catch
- 7.8- Local vs Global Scope
- 7.9- Let vs Var
- 7.10- The this Keyword
- 7.11- Changing this

[Ch-8: ES6 Tooling](https://github.com/subrotoice/js-basic#ch-8-es6-tooling)<br>

- 8.1 Modules
- 8.2 CommonJS Modules (only for Node.js)
- 8.3 ES6 Modules
- 8.4 ES6 Tooling
- 8.5 Babel - 3 packeg need to install
- 8.6 WebPack (Transpile + Combine all js + Minify )
- 5 useful cheat sheets for Javascript

[JS - React](https://gist.github.com/subrotoice/98eb2fcbcef23c733cd36e0575c2e37c)

# Ch-1: Introduction

FireFox: SpiderMonkey<br>
Chrome: v8

### Node: C++ (v8) - Ryan Dahl

### ECMAScript/ES6 - 2015

### In Console of browser

```js
console.log("Hello World");
alert("yo");
```

# Ch-2: Javascript Basics

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

## 2.5 Map and Set

Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type. Any keys, objects can be keys.
Object key is converted to string. [See](https://prnt.sc/lj18S9Th3HIt)

- new Map() – creates the map.
- map.set(key, value) – stores the value by the key.
- map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
- map.has(key) – returns true if the key exists, false otherwise.
- map.delete(key) – removes the element (the key/value pair) by the key.
- map.clear() – removes everything from the map.
- map.size – returns the current element count.

```js
let map = new Map();

map.set("1", "str1"); // a string key
map.set(1, "num1"); // a numeric key
map.set(true, "bool1"); // a boolean key

map.has("1"); // True

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert(map.get(1)); // 'num1'
alert(map.get("1")); // 'str1'

alert(map.size); // 3
```

Map can also use objects as keys.

```js
let john = { name: "John" };
// for every user, let's store their visits count
let visitsCountMap = new Map();
// john is the key for the map
visitsCountMap.set(john, 123);

console.log(visitsCountMap.get(john)); // 123
console.log(visitsCountMap); // Map(1) { { name: 'John' } => 123 }
```

### Iteration over Map

For looping over a map, there are 3 methods:

map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

```js
let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

for (let vegi of recipeMap.keys()) console.log(vegi);
for (let vegi of recipeMap.values()) console.log(vegi);
for (let vegi of recipeMap.entries()) console.log(vegi);
for ((let entry of recipeMap)) console.log(vegi); // Same
// the same as of recipeMap.entries()

// cucumber
// tomatoes
// onion

// 500
// 350
// 50

// [ 'cucumber', 500 ]
// [ 'tomatoes', 350 ]
// [ 'onion', 50 ]
```

### Map from array

When a Map is created, we can pass an array with key/value pairs for initialization

```js
// array of [key, value] pairs
let map = new Map([
  ["1", "str1"],
  [1, "num1"],
  [true, "bool1"],
]);

console.log(map.get(1));
```

### Map from object

If we have a plain object, and we’d like to create a Map from it, then we can use built-in method Object.entries(obj) that returns an array of key/value pairs for an object.

```js
let obj = {
  name: "John",
  age: 30,
};
// Obj to two dimentional array
console.log(Object.entries(obj)); // [ [ 'name', 'John' ], [ 'age', 30 ] ]

let map = new Map(Object.entries(obj));

console.log(map.get("name")); // John
```

### **Object.fromEntries: Map to Object**

```jsx
let map = new Map();
map.set("banana", 1);
map.set("orange", 2);
map.set("meat", 4);

// Convert to array with key/value
console.log(map.entries()); // { [ 'banana', 1 ], [ 'orange', 2 ], [ 'meat', 4 ] }
let obj = Object.fromEntries(map.entries()); // make a plain object (*)
let obj1 = Object.fromEntries(map); // Same

console.log(obj); // 2
```

### **Set**

A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

- new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
- set.add(value) – adds a value, returns the set itself.
- set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
- set.has(value) – returns true if the value exists in the set, otherwise false.
- set.clear() – removes everything from the set.
- set.size – is the elements count.

```js
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

set.has(mary); // true

// set keeps only unique values
console.log(set.size); // 3

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}
```

### **Iteration over Set**

```js
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) console.log(value);
```

# Ch-3: Operators

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

# Ch-4: Control Flow

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

# Ch-5: Objects & Class

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

## 5.2 Factory Function: Return javascript object

It doesn't require the use of new.

1. Basic Factory Function

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

### 5.3 Factory Function with Private Data

You can also use factory functions to create objects with private data by using closures.

```javascript
function createCounter() {
  let count = 0; // Private variable

  return {
    increment() {
      count++;
      console.log(`Count is now: ${count}`);
    },
    getCount() {
      return count;
    },
  };
}

const counter1 = createCounter();
counter1.increment(); // Output: Count is now: 1
counter1.increment(); // Output: Count is now: 2
console.log(counter1.getCount()); // Output: 2
```

In this example:

- The `count` variable is private and can only be accessed or modified through the methods `increment` and `getCount`.
- This encapsulation is achieved using closures, where the returned object retains access to the `count` variable even after the `createCounter` function has finished executing.

## 5.4 Constructor Functions

A constructor function is just a regular function, but when used with the `new` keyword, it creates a new object, sets `this` to that object, and returns the object automatically.

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

This approach was the standard way to implement object-oriented patterns in JavaScript before the introduction of the `class` syntax in ES6.

## 5.5 Different between Factory and Constructor function

- A factory function is a regular function without using the `new` keyword that returns an object.
- A constructor function is also a regular function but is intended to be used with the `new` keyword. It creates a new object, assigns `this` to that object, and returns it.

  ```javascript
  // Constructor Function
  function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function () {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
      );
    };
  }

  const person = new Person("Alice", 30);
  ```

- **Factory Functions**:

  - Offer more flexibility and are simpler, especially for smaller, more straightforward objects.
  - Easier to handle private data using closures.

- **Constructor Functions**:

  - Better suited for scenarios where you want to create multiple instances with shared methods (using prototypes).
  - Align more closely with traditional object-oriented programming and support inheritance.

## 5.6 In JavaScript, there are 6 ways to create objects.

1. Object Literal Notation

```js
let obj = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Hello!");
  },
};
```

2. Using new Object()

```js
let obj = new Object();
obj.name = "John";
obj.age = 30;
obj.greet = function () {
  console.log("Hello!");
};
```

3. Using a Constructor Function

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("Hello!");
  };
}

let person1 = new Person("John", 30);
```

4. Using ES6 class Syntax

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello!");
  }
}

let person1 = new Person("John", 30);
```

5. Using Object.create() | Not So Imp

6. Using Factory Functions

```js
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet() {
      console.log("Hello!");
    },
  };
}

let person1 = createPerson("John", 30);
```

## 5.7 Dynamic Nature of Objects

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

## 5.8 Object store in address

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

## Class

In JavaScript, you can create and declare classes and objects using the `class` syntax, which is a template for creating objects. The objects created from a class are called instances. Here’s a basic guide to creating and declaring classes and objects in JavaScript:

### 5.9 Declaring a Class

You can declare a class using the `class` keyword. A class can have a constructor method, which is a special method for creating and initializing an object created with a class.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method inside the class
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}
```

In this example:

- The `Person` class is declared with a constructor that takes `name` and `age` as parameters.
- The `greet` method is defined to display a message using the class properties.

#### Ideal JavaScript and TypeScript Class

```js
/**
 * Represents a customizable Animal with various characteristics and behaviors.
 * This class demonstrates key JavaScript class features in an understandable way.
 */
class Animal {
  // 1. Static Property: Belongs to the class itself, not instances.
  static speciesCount = 0;

  // 2. Private Class Fields (Newer JavaScript feature - prefixed with #):
  //    Encapsulates data, making it only accessible within the class.
  #secretTrait = "unknown";
  #isMammal; // Will be set by the constructor

  /**
   * 3. Constructor: Special method for creating and initializing objects
   * created with a class.
   * @param {string} name - The name of the animal.
   * @param {string} sound - The sound the animal makes.
   * @param {number} age - The age of the animal in years.
   * @param {boolean} isMammal - True if the animal is a mammal, false otherwise.
   */
  constructor(name, sound, age, isMammal) {
    // 4. Instance Properties: Data specific to each object instance.
    this.name = name;
    this.sound = sound;
    this.age = age;
    this.#isMammal = isMammal; // Initialize private field
    Animal.speciesCount++; // Increment static property on each new instance
  }

  // 5. Getter (Instance Method): Allows controlled access to instance properties.
  //    Can also be used for computed properties.
  get description() {
    return `${this.name} is a ${this.age}-year-old animal that says "${this.sound}".`;
  }

  // 6. Setter (Instance Method): Allows controlled modification of instance properties.
  set secret(trait) {
    if (typeof trait === "string" && trait.length > 0) {
      this.#secretTrait = trait;
    } else {
      console.warn("Invalid secret trait. Must be a non-empty string.");
    }
  }

  // 7. Public Instance Method: Behavior that instances of the class can perform.
  makeSound() {
    console.log(`${this.name} says ${this.sound}!`);
  }

  // 8. Private Instance Method (Newer JavaScript feature - prefixed with #):
  //    Helper method intended for internal use within the class.
  #getMammalStatus() {
    return this.#isMammal ? "a mammal" : "not a mammal";
  }

  // 9. Public Instance Method utilizing a private method.
  getDetailedInfo() {
    const mammalStatus = this.#getMammalStatus(); // Calling the private method
    return `${this.name} (${this.age} years old) says "${
      this.sound
    }". It is ${mammalStatus}. Its secret is: ${this.#secretTrait}.`;
  }

  // 10. Static Method: Belongs to the class, not instances.
  //     Often used for utility functions related to the class.
  static getAnimalCount() {
    return `There are currently ${Animal.speciesCount} animals created.`;
  }

  // 11. Method for demonstrating method chaining
  grow(years) {
    this.age += years;
    console.log(
      `${this.name} grew by ${years} years. Now ${this.age} years old.`
    );
    return this; // Return 'this' to allow chaining
  }
}

/**
 * 12. Inheritance: Creating a new class that inherits properties and methods
 * from an existing class (the "parent" or "base" class).
 */
class Dog extends Animal {
  constructor(name, age, breed) {
    // 13. super() call: Must be called in the constructor of a subclass
    //     before 'this' is used. It calls the parent class's constructor.
    super(name, "Woof", age, true); // Dogs are always mammals, make sound "Woof"
    this.breed = breed; // New instance property specific to Dog
  }

  // 14. Method Overriding: Providing a specific implementation of a method
  //     that is already defined in the parent class.
  makeSound() {
    console.log(`${this.name} the ${this.breed} barks: WOOF WOOF!`);
  }

  // New method specific to Dog class
  fetchBall() {
    console.log(`${this.name} fetches the ball!`);
  }
}

// --- Demonstrating the Class Features ---

console.log("--- Animal Class Demonstrations ---");

// Accessing a static property
console.log(Animal.getAnimalCount()); // Output: There are currently 0 animals created.

// Creating instances of Animal
const lion = new Animal("Simba", "Roar", 5, true);
const snake = new Animal("Kaa", "Hiss", 2, false);

// Accessing instance properties
console.log(`Lion's name: ${lion.name}`);
console.log(`Snake's sound: ${snake.sound}`);

// Calling instance methods
lion.makeSound(); // Output: Simba says Roar!
snake.makeSound(); // Output: Kaa says Hiss!

// Accessing a getter
console.log(lion.description); // Output: Simba is a 5-year-old animal that says "Roar".

// Using a setter (modifying a private field)
lion.secret = "King of the Jungle";
// lion.#secretTrait; // Error: Private field '#secretTrait' must be declared in an enclosing class
// snake.secret = 123; // Warns: Invalid secret trait...

// Calling a public method that uses a private method and private field
console.log(lion.getDetailedInfo()); // Output: Simba (5 years old) says "Roar". It is a mammal. Its secret is: King of the Jungle.
console.log(snake.getDetailedInfo()); // Output: Kaa (2 years old) says "Hiss". It is not a mammal. Its secret is: unknown.

// Accessing a static method
console.log(Animal.getAnimalCount()); // Output: There are currently 2 animals created.

// Demonstrating method chaining
lion.grow(2).makeSound(); // Output: Simba grew by 2 years. Now 7 years old. \n Simba says Roar!

console.log("\n--- Dog Class (Inheritance) Demonstrations ---");

// Creating an instance of Dog (inherits from Animal)
const buddy = new Dog("Buddy", 3, "Golden Retriever");

// Accessing inherited properties
console.log(`Buddy's name: ${buddy.name}`);
console.log(`Buddy's age: ${buddy.age}`);
console.log(`Buddy's breed: ${buddy.breed}`); // Specific to Dog class

// Calling an overridden method
buddy.makeSound(); // Output: Buddy the Golden Retriever barks: WOOF WOOF! (Overridden)

// Calling an inherited method (that wasn't overridden)
console.log(buddy.description); // Output: Buddy is a 3-year-old animal that says "Woof".

// Calling a new method specific to Dog
buddy.fetchBall(); // Output: Buddy fetches the ball!

// Verify static count again
console.log(Animal.getAnimalCount()); // Output: There are currently 3 animals created.
```

**TypeScript**

```ts
/**
 * Represents a customizable Animal with various characteristics and behaviors.
 * This class demonstrates key TypeScript class features, including type annotations.
 */
class Animal {
  // 1. Static Property: Belongs to the class itself, not instances.
  //    Type annotation `number` ensures it holds a number.
  static speciesCount: number = 0;

  // 2. Private Class Fields (Native TS and JS feature):
  //    Encapsulates data, making it only accessible within the class.
  //    Type annotations `string` and `boolean`.
  #secretTrait: string = "unknown";
  #isMammal: boolean; // Will be set by the constructor

  // 3. Public Instance Properties (explicitly declared with type annotations)
  name: string;
  sound: string;
  age: number;

  /**
   * 4. Constructor: Special method for creating and initializing objects
   * created with a class.
   * @param {string} name - The name of the animal.
   * @param {string} sound - The sound the animal makes.
   * @param {number} age - The age of the animal in years.
   * @param {boolean} isMammal - True if the animal is a mammal, false otherwise.
   */
  constructor(name: string, sound: string, age: number, isMammal: boolean) {
    // 5. Instance Properties: Data specific to each object instance.
    //    Assigned from constructor parameters, types are inferred or explicitly declared above.
    this.name = name;
    this.sound = sound;
    this.age = age;
    this.#isMammal = isMammal; // Initialize private field
    Animal.speciesCount++; // Increment static property on each new instance
  }

  // 6. Getter (Instance Method): Allows controlled access to instance properties.
  //    Return type annotation `string`.
  get description(): string {
    return `${this.name} is a ${this.age}-year-old animal that says "${this.sound}".`;
  }

  // 7. Setter (Instance Method): Allows controlled modification of instance properties.
  //    Parameter type annotation `string`.
  set secret(trait: string) {
    if (typeof trait === "string" && trait.length > 0) {
      this.#secretTrait = trait;
    } else {
      console.warn("Invalid secret trait. Must be a non-empty string.");
    }
  }

  // 8. Public Instance Method: Behavior that instances of the class can perform.
  //    Return type annotation `void` as it doesn't return a value.
  makeSound(): void {
    console.log(`${this.name} says ${this.sound}!`);
  }

  // 9. Private Instance Method:
  //    Helper method intended for internal use within the class.
  //    Return type annotation `string`.
  #getMammalStatus(): string {
    return this.#isMammal ? "a mammal" : "not a mammal";
  }

  // 10. Public Instance Method utilizing a private method.
  //     Return type annotation `string`.
  getDetailedInfo(): string {
    const mammalStatus = this.#getMammalStatus(); // Calling the private method
    return `${this.name} (${this.age} years old) says "${
      this.sound
    }". It is ${mammalStatus}. Its secret is: ${this.#secretTrait}.`;
  }

  // 11. Static Method: Belongs to the class, not instances.
  //     Return type annotation `string`.
  static getAnimalCount(): string {
    return `There are currently ${Animal.speciesCount} animals created.`;
  }

  // 12. Method for demonstrating method chaining
  //     Return type annotation `this` for fluent chaining.
  grow(years: number): this {
    this.age += years;
    console.log(
      `${this.name} grew by ${years} years. Now ${this.age} years old.`
    );
    return this; // Return 'this' to allow chaining
  }
}

/**
 * 13. Inheritance: Creating a new class that inherits properties and methods
 * from an existing class (the "parent" or "base" class).
 */
class Dog extends Animal {
  // New instance property specific to Dog, with type annotation.
  breed: string;

  constructor(name: string, age: number, breed: string) {
    // 14. super() call: Must be called in the constructor of a subclass
    //     before 'this' is used. It calls the parent class's constructor.
    //     Arguments are type-checked according to Animal's constructor.
    super(name, "Woof", age, true); // Dogs are always mammals, make sound "Woof"
    this.breed = breed; // Initialize new instance property
  }

  // 15. Method Overriding: Providing a specific implementation of a method
  //     that is already defined in the parent class.
  //     Type signature must be compatible with the parent method.
  makeSound(): void {
    console.log(`${this.name} the ${this.breed} barks: WOOF WOOF!`);
  }

  // 16. New method specific to Dog class
  fetchBall(): void {
    console.log(`${this.name} fetches the ball!`);
  }
}

// --- Demonstrating the Class Features with TypeScript's Type Safety ---

console.log("--- Animal Class Demonstrations ---");

// Accessing a static property
console.log(Animal.getAnimalCount());

// Creating instances of Animal
const lion = new Animal("Simba", "Roar", 5, true);
const snake = new Animal("Kaa", "Hiss", 2, false);

// Type checking in action:
// const invalidAnimal = new Animal("Cat", "Meow", "three", true); // TS Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// Accessing instance properties
console.log(`Lion's name: ${lion.name}`);
console.log(`Snake's sound: ${snake.sound}`);

// Calling instance methods
lion.makeSound();
snake.makeSound();

// Accessing a getter
console.log(lion.description);

// Using a setter (modifying a private field)
lion.secret = "King of the Jungle";
// lion.#secretTrait; // TS Error: Property '#secretTrait' is not accessible outside class 'Animal' because it has a private identifier.
// snake.secret = 123; // TS Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// Calling a public method that uses a private method and private field
console.log(lion.getDetailedInfo());
console.log(snake.getDetailedInfo());

// Accessing a static method
console.log(Animal.getAnimalCount());

// Demonstrating method chaining
lion.grow(2).makeSound();

console.log("\n--- Dog Class (Inheritance) Demonstrations ---");

// Creating an instance of Dog (inherits from Animal)
const buddy = new Dog("Buddy", 3, "Golden Retriever");

// Accessing inherited properties
console.log(`Buddy's name: ${buddy.name}`);
console.log(`Buddy's age: ${buddy.age}`);
console.log(`Buddy's breed: ${buddy.breed}`); // Specific to Dog class

// Calling an overridden method
buddy.makeSound();

// Calling an inherited method (that wasn't overridden)
console.log(buddy.description);

// Calling a new method specific to Dog
buddy.fetchBall();

// Verify static count again
console.log(Animal.getAnimalCount());
```

### 5.10 Creating an Object (Instance of a Class)

You can create an object from a class using the `new` keyword.

```javascript
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// Accessing properties
console.log(person1.name); // Output: Alice
console.log(person2.age); // Output: 25

// Calling methods
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.
```

Here:

- `person1` and `person2` are objects created from the `Person` class.
- The properties `name` and `age` are initialized with values provided during the object creation.

### 5.11 Adding Static Methods and Properties

Static methods and properties belong to the class itself rather than to instances of the class.

```javascript
class Calculator {
  static add(a, b) {
    return a + b;
  }
}

console.log(Calculator.add(5, 3)); // Output: 8
```

- The `add` method is a static method that can be called on the class itself, not on instances.

### 5.12 Inheritance

You can create a new class that inherits from an existing class using the `extends` keyword.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex", "German Shepherd");
dog.speak(); // Output: Rex barks.
```

- The `Dog` class extends the `Animal` class, inheriting its properties and methods.
- The `super` keyword is used to call the constructor of the parent class.

### Summary

- **Class Declaration:** Define a class with properties and methods.
- **Object Creation:** Create objects (instances) using the `new` keyword.
- **Static Methods:** Define methods that belong to the class itself.
- **Inheritance:** Create new classes based on existing ones using `extends`.

This is the modern way to work with classes and objects in JavaScript, which aligns with object-oriented programming principles.

## 5.13 Math [See](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

```js
// Pi property
const pi = Math.PI;
console.log(pi);

// Random method
console.log(Math.random());

// Max method
console.log(Math.max(1, 2, 5, 4, 7, 9, 6));
```

## 5.14 String

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

## 5.15 Date

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
The slice() method slices out a piece of an array. Slice - কেটে নেওয়া

```js
const numbers = [3, 4];

// End: adds a new element to an array (at the end)
numbers.push(5, 6); // 3, 4 => 3, 4, 5, 6

// Begining: adds a new element to an array (at the beginning)
numbers.unshift(1, 2); // 3, 4 => 1, 2, 3, 4

// Middle | (start index, items you want to remove, adding items)
// splice(from where, how many, [?new adding items])
numbers.splice(2, 0, "a", "b"); // So, it do both delete and adding

// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1); // Banana, Orange, Apple, Mango => Orange, Apple, Mango

console.log(numbers);
```

## 6.2 Finding Elements (Primitives)

```js
const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf(1));
console.log(numbers.indexOf(1, 2)); // array.indexOf(item, start)
console.log(numbers.lastIndexOf(1));

console.log(numbers.includes(1));
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
const first = numbers.shift(); // Banana, Orange, Apple, Mango => Orange, Apple, Mango

// Middle | (start index, items you want to remove, adding items)
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

The slice() method in JavaScript is used to extract a section of an array or string and return it as a new array or string without modifying the original. <br>
array.slice(start, end)<br>
start Optional, Default is 0, Negative numbers select from the end of the array.<br>
end Optional, End position, Default is last element, Negative numbers select from the end of the array.

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
console.log(numbers); // [ 1, 2, 3 ]

let arr = [1, 2, 15];
// the method reorders the content of arr
arr.sort();
console.log(arr); // 1, 15, 2
```

The items are sorted as **strings** by default.
Literally, all elements are converted to strings for comparisons. For strings, lexicographic ordering is applied and indeed "2" > "15".
To use our own sorting order, we need to supply a function as the argument of arr.sort().

```js
let arr = [1, 2, 15, 4];

arr.sort(function (a, b) {
  // a: arr[i+1], b: arr[i]
  console.log("a: " + a + " - " + "b:" + b, arr);
  return a - b;
});
console.log(arr);
```

```js
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

```js
const people = [
  { name: "Alice", age: 32 },
  { name: "Bob", age: 24 },
  { name: "Charlie", age: 29 },
  { name: "Diana", age: 35 },
];

people.sort(function (a, b) {
  return a.age - b.age;
});
console.log(people);
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

- Reduce to a single value. Callback function's return value will be the next iteration what ever the return value we set.

```js
const numbers = [1, 2, -1, 3];

// Rounds: accumulator a, currentValue c  => accumulator a (Next iteration)
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

## Array methods in short

```js
// forEach
[1, 2, 3].forEach((num) => console.log(num)); // 1 2 3

// map
let squares = [1, 2, 3].map((num) => num * 2); // [2, 4, 6]

// filter
let evens = [1, 2, 3, 4].filter((num) => num % 2 === 0); // [2, 4]

// reduce
let sum = [1, 2, 3, 4].reduce((acc, num) => acc + num, 0); // 10

// find
let firstEven = [1, 2, 3, 4].find((num) => num % 2 === 0); // 2

// findIndex
let firstEvenIndex = [1, 2, 3, 4].findIndex((num) => num % 2 === 0); // 1

// indexOf
let index = [1, 2, 3, 1].indexOf(1); // 0

// includes
let hasTwo = [1, 2, 3].includes(2); // true

// some
let hasEven = [1, 2, 3].some((num) => num % 2 === 0); // true

// every
let allEven = [2, 4, 6].every((num) => num % 2 === 0); // true

// slice(start, [end])
let part = [1, 2, 3, 4].slice(1, 3); // [2, 3]

// splice
let arr = [1, 2, 3, 4];
arr.splice(1, 2); // [2, 3], arr becomes [1, 4]

// concat
let combined = [1, 2].concat([3, 4]); // [1, 2, 3, 4]

// join
let joined = [1, 2, 3].join("-"); // "1-2-3"

// reverse
let reversed = [1, 2, 3].reverse(); // [3, 2, 1]

// sort
let sorted = [3, 1, 2].sort(); // [1, 2, 3]

// push
let nums = [1, 2];
nums.push(3); // nums becomes [1, 2, 3]

// pop
let last = nums.pop(); // last is 3, nums becomes [1, 2]

// shift
let first = nums.shift(); // first is 1, nums becomes [2]

// unshift
nums.unshift(0); // nums becomes [0, 2]

// flat
let flatArr = [1, [2, 3], [4, [5]]].flat(2); // [1, 2, 3, 4, 5]

// flatMap
let flatMapped = [1, 2, 3].flatMap((num) => [num, num * 2]); // [1, 2, 2, 4, 3, 6]

// fill
let filled = new Array(3).fill(0); // [0, 0, 0]

// from
let arrayFrom = Array.from("123"); // ['1', '2', '3']

// isArray
let isArray = Array.isArray([1, 2, 3]); // true

// of
let arrayOf = Array.of(1, 2, 3); // [1, 2, 3]

// copyWithin
let copyArr = [1, 2, 3, 4];
copyArr.copyWithin(1, 2); // [1, 3, 4, 4]

// entries
let iterator = [1, 2, 3].entries();
for (let entry of iterator) console.log(entry); // [0, 1] [1, 2] [2, 3]

// keys
let keyIterator = [1, 2, 3].keys();
for (let key of keyIterator) console.log(key); // 0 1 2

// values
let valueIterator = [1, 2, 3].values();
for (let value of valueIterator) console.log(value); // 1 2 3
```

## Exercise 1: Array from Range

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

## Exercise 2: Includes an item in array

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

## Exercise 3: There is an array we exclude its element that we find in another array.

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

- Whatever we pass to a rest operator that convert to an array
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

- When encounter error then throw new Error() and stop executing rest of code of that method and then control goes to catch block.

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

## Exercise 1- Sum of Arguments. sum(1, 2, 3, 6) / sum([1, 2, 3, 6])

```js
// My Solution
console.log(sum(1, 2, 3, 6));

function sum(...rest) {
  if (Array.isArray(rest[0])) return rest[0].reduce((a, c) => a + c);
  return rest.reduce((a, c) => a + c);
}

// Mosh
console.log(sum([2, 2, 3, 2]));
function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];
  return items.reduce((a, c) => a + c);
}
```

## Exercise 2- Area of Circle.js

```js
const circle = {
  radius: 2,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

console.log(circle.area);
```

## Exercise 3- Error Handling

```js
const numbers = [1, 2, 3, 4];

try {
  const count = countOccurrences("", 1);
  console.log(count);
} catch (error) {
  console.log(error.message);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array))
    throw new Error(`Item is not an array its ${typeof array}`);

  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0);
}
```

# Ch-8: ES6 Tooling

## 8.1 Modules

Modularity of code

- Maintainability
- Reuse
- Abstract (Sometimes we return some property)

ES5

- AMD > Browser
- CommonJS > Node.js
- UMD > Browser / Node.js
- ES6

- ES6 Modules
  We need to learn CommonJS(Node.js) and ES6 Modules(Browser)

## 8.2 CommonJS Modules (only for Node.js)

- Cohesion: Think are highly related they go together.

```js
// index.js (Import)
// like: circle = module.exports
const circle = require("./circle"); // Common js format

circle(20); // Default exports works here
circle.nameExportSquare(4); // nameExports works here
console.log(circle.personObj); // NameExports works here
```

```js
// circle.js (Exports)
// Code Blok 1
const circle = (arg) => console.log("Argument Circle " + arg);

// Code Blok 2
const square = (arg) => console.log("Argument Square " + arg);

// Code Blok 3
const personObj = { name: "Subroto", value: 1 };

// By default everyting is define here is private this way we are making public. we can keep 4th property private
// here exports is an object it can add any property to it
module.exports = circle; // Default Exports
module.exports.nameExportSquare = square; // Name Export, Exporting nameExportSquare() function
module.exports.personObj = personObj; // Name Export, Exporting personObj object
```

## 8.3 ES6 Modules

```js
// index.js (circle from default export, {personObj, square} name export)
import circle, { personObj, square } from "./circle.js";

circle(20); // Default exports works here
square(47); // Name exports
console.log(personObj);
```

```js
// circle.js
// Code Blok 1
const circle = (arg) => console.log("Argument Circle " + arg);

// Code Blok 2
const square = (arg) => console.log("Argument Square " + arg);

// Code Blok 3
const personObj = { name: "Subroto", value: 1 };

// ES6 Modules
export default circle; // Default Exports
export { square, personObj }; // Name exports
```

## 8.4 ES6 Tooling

1. Transpiler: Translator + Compiler
   ModernJs -> Babel -> ES5
2. Bundler
   file1.js + file2.js + file3.js -> WebPack -> bundle.js

Initializing package.json

```bash
npm init --yes
```

## 8.5 Babel - 3 packeg need to install

```bash
npm i babel-cli@6.26.0 babel-core@6.26.0 babel-preset-env@1.6.1 --save-dev
```

```bash
npm i babel-cli // Active command link like npm
babel-core // Main files for transpiling
babel-preset-env // All modern ES6 plugin for transfering. It include all
--save-dev // Development depedency. It will not included in production only in development computer
```

Here "npm run babel" is typing command "babel --presets env index.js -o build/index.js" <br>
its mean -o: Ouptup folder and file

```js
  "scripts": {
    "babel": "babel --presets env index.js -o build/index.js"
  }
```

```js
// index.js
const i = "Ok";
```

"npm run babel"

```js
// build/index.js
"use strict";

var i = "Ok";
```

## 8.6 WebPack (Transpile + Combine all js + Minify )

**All we do in 8.5 Babel to illustrate how babel works. In real life project we do not do this. If you use webpack then it autometically include this**<br>

Move all js file in src/ folder <br>
Install webpack-cli as devDependencies

```bash
npm i -D @webpack-cli/generators // Generate package.json, package-lock.json, node_modules
```

Create dist/main.js

```bash
npm run build
```

Add -w (watch) then you need not to build every time. Just after adding -w run "npm run build" then change in src file will bundel in dist/main.js

```bash
"scripts": {
  "build": "webpack --mode=production --node-env=production -w",
}
```

NB: If we install any packeg globally(-g). So that we can use it in any project.

# 5 useful cheat sheets for Javascript

### Array Methods

```javascript
[1, 2, 3].length; // 3
[1, 2, 3].push(4); // [1, 2, 3, 4] *
[1, 2, 3].unshift(0); // [0, 1, 2, 3] *
[1, 2, 3].pop(); // [1, 2]
[1, 2, 3].shift(); // [2, 3] *
[1, 2, 3].at(2); // 3
[1, 2, 3].indexOf(3); // 2
[1, 2, 3].includes(3); // true
[1, 2, 3].map((num) => num * 2); // [2, 4, 6]
[1, 2, 3].filter((num) => num > 1); // [2, 3]
[1, 2, 3].every((num) => num > 0); // true
[1, 2, 3].some((num) => num > 2); // true
[1, 2, 3].fill(0); // [0, 0, 0]
[1, 2, 3].reduce((acc, num) => acc + num, 0); // 6
[1, 2, 3].concat([4, 5]); // [1, 2, 3, 4, 5]
[1, 2, 3].reverse(); // [3, 2, 1]
[1, 2, 3].sort(); // [1, 2, 3]
[1, 2, 3].join("-"); // "1-2-3"
[1, 2, 3].flat(); // [1, 2, 3]
[1, 2, 3].find((num) => num === 1); // 1
[1, 2, 3].findIndex((num) => num === 2); // 1
[1, 2, 3].toString(); // "1,2,3"
[1, 2, 3].toLocaleString(); // "1,2,3"
[1, 2, 3].slice(1, 2); // [2]
[1, 2, 3].splice(1, 1, "a"); // [1, 'a', 3]
Array.isArray([1, 2, 3]); // true
Array.from("123"); // ['1', '2', '3']
```

```javascript
"JavaScript".length; // 10
"JavaScript"[2]; // 'v'
"JavaScript".charAt(2); // 'v'
"JavaScript".charCodeAt(2); // 118
"JavaScript".indexOf("S"); // 4
"JavaScript".toLowerCase(); // 'javascript'
"JavaScript".toUpperCase(); // 'JAVASCRIPT'
"JavaScript".slice(2, 5); // 'vaS'
"JavaScript".substring(2, 5); // 'vaS'
"JavaScript".substr(2, 2); // 'va'
"JavaScript".concat(" Dev"); // 'JavaScript Dev'
"JavaScript Dev".split(" "); // ['JavaScript', 'Dev']
"JavaScript Dev".includes("Dev"); // true
"Java Dev".replace("Dev", "JS"); // 'Java JS'
"Java Dev".replaceAll("Dev", "JS"); // 'Java JS'
"JavaScript Dev".trim(); // 'JavaScript Dev'
"JavaScript Dev".trimStart(); // 'JavaScript Dev'
"JavaScript Dev".trimEnd(); // 'JavaScript Dev'
"Dev".padStart(10, "*"); // '*******Dev'
"Dev".padEnd(10, "*"); // 'Dev*******'
"JavaScript Dev".startsWith("Java"); // true
"JavaScript Dev".endsWith("Dev"); // true
"JavaScript Dev".repeat(3); // 'JavaScript DevJavaScript DevJavaScript Dev'
"JavaScript Dev".indexOf("JavaScript"); // 0
"JavaScript Dev".lastIndexOf("Dev"); // 11
"JavaScript Dev".search("Dev"); // 11
"JavaScript Dev".includes("Dev"); // true
```

### Date Methods

```javascript
const date = new Date();
//? 2023-04-25T19:27:35.363Z
new Date(1682452894553);
//? Sun Apr 25 2023 00:00:00 GMT+0200
new Date("2023-04-25");
//? Sun Apr 25 2023 00:00:00 GMT+0200
new Date("2023-04-25T01:10:00");
//? Sun Apr 25 2023 01:10:00 GMT+0200
new Date(2023, 3, 25, 1, 10, 0, 0);
//? Tue Apr 25 2023 01:10:00 GMT+0200
// year, month, day, hour, min, sec, misc

// Get Date Methods
date.getFullYear(); //? 2023
date.getMonth(); //? 3
date.getDate(); //? 25
date.getDay(); //? 2
date.getHours(); //? 21
date.getMinutes(); //? 27
date.getSeconds(); //? 35
date.getMilliseconds(); //? 363
date.getTime(); //? 1682452895363
date.getTimezoneOffset(); //? -120

// Set Date Methods
date.setFullYear(2023); //? set year
date.setMonth(11); //? set month
date.setDate(1); //? set date
date.setHours(10); //? set hours
date.setMinutes(20); //? set minutes
date.setSeconds(20); //? set seconds
date.setMilliseconds(20); //? set milliseconds
date.setTime(1680153156131); //? set time (milliseconds since Jan 1, 1970)

// Conversion
date.toString(); //? Tue Apr 25 2023 21:27:35 GMT+0200 (Central European Summer Time)
date.toDateString(); //? Tue Apr 25 2023
date.toTimeString(); //? 21:27:35 GMT+0200 (Central European Summer Time)
date.toISOString(); //? 2023-04-25T19:27:35.363Z
date.toLocaleString(); //? 4/25/2023, 9:27:35 PM
date.toLocaleDateString(); //? 4/25/2023
date.toLocaleTimeString(); //? 9:27:35 PM
date.getTime(); //? 1682452895363
```

### DOM Methods

#### Accessing Elements

```javascript
document.getElementById("id"); //? find element by its id
document.getElementsByClassName("class"); //? find elements by class
document.getElementsByTagName("tag"); //? find elements by tag name
document.querySelector("selector"); //? find first element matching selector
document.querySelectorAll("selector"); //? find all elements matching selector
```

#### Creating/Appending Elements

```javascript
document.createElement("name"); //? create element node
document.createTextNode("text"); //? create text node
elem.appendChild(child); //? append child to element
elem.removeChild(child); //? remove child from element
elem.replaceChild(newChild, oldChild); //? replace child with new child
```

#### Modifying Elements

```javascript
elem.innerHTML = "<h2>outerHTML</h2>"; //? set HTML
elem.innerText = "inner text"; //? set inner text
elem.textContent = "text content"; //? set text content
elem.style.color = "blue"; //? set style
elem.outerHTML = "<p>learn with <strong>Athreos</strong></p>"; //? replace HTML
```

#### Accessing Parent, Children, Siblings

```javascript
elem.parentElement; //? access parent element
elem.children; //? access element children
elem.firstElementChild; //? access first child
elem.lastElementChild; //? access last child
elem.nextElementSibling; //? access next sibling
elem.previousElementSibling; //? access previous sibling
```

#### Modifying Attributes

```javascript
elem.getAttribute("attr"); //? get attribute value
elem.setAttribute("attr", "value"); //? set attribute value
elem.removeAttribute("attr"); //? remove attribute
```

#### Modifying Element Classes

```javascript
elem.classList.add("my-class"); //? add class
elem.classList.remove("my-class"); //? remove class
elem.classList.toggle("my-class"); //? toggle class
elem.classList.contains("my-class"); //? check for class
```

<!-- [![d1P0SPp.md.jpg](https://iili.io/d1P0SPp.md.jpg)](https://freeimage.host/i/d1P0SPp)
[![d1P08VR.md.jpg](https://iili.io/d1P08VR.md.jpg)](https://freeimage.host/i/d1P08VR)
[![d1P0vov.md.jpg](https://iili.io/d1P0vov.md.jpg)](https://freeimage.host/i/d1P0vov)
[![d1P0eDJ.md.jpg](https://iili.io/d1P0eDJ.md.jpg)](https://freeimage.host/i/d1P0eDJ)
[![d1P0gKN.md.jpg](https://iili.io/d1P0gKN.md.jpg)](https://freeimage.host/i/d1P0gKN)
[![d1P0rlI.md.jpg](https://iili.io/d1P0rlI.md.jpg)](https://freeimage.host/i/d1P0rlI)
[![d1P0sNs.md.jpg](https://iili.io/d1P0sNs.md.jpg)](https://freeimage.host/i/d1P0sNs) -->

[![d1P0iRn.md.jpg](https://iili.io/d1P0iRn.md.jpg)](https://freeimage.host/i/d1P0iRn)

### DOM Events (Event Listeners)

```javascript
document.addEventListener("click", (event) => {
  console.log("Click Event", event);
});

// unregister event listener
document.removeEventListener("click", (event) => {
  console.log("Unregistered Event", event);
});
```

[![d1P0LDG.md.jpg](https://iili.io/d1P0LDG.md.jpg)](https://freeimage.host/i/d1P0LDG)

# 25 js Problem solving [YouTube](https://www.youtube.com/watch?v=qJGR9lLcRc0)

1 - Given a string, reverse each word in the sentence<br>
2 - How to check if an object is an array or not? Provide some code.<br>
3 - How to empty an array in JavaScript?<br>
4 - How would you check if a number is an integer?<br>
5 - Make this work : duplicate([1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5, 1, 2, 3 ,4, 5]<br>

Functions ---------------<br>
6 - Write a JavaScript function that reverse a number<br>
7 - Write a JavaScript function that checks whether a passed string is palindrome or not<br>
8 - Write a js function that returns a passed string with letters in alphabetical order<br>
9 - Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case<br>
10 - Write a JavaScript function which accepts an argument and returns the type<br>

---

11: Write a javascript function to get the number of occurrences of each letter in specified string?<br>
12: Sum element of an array<br>
13: Sum only numbers of an array<br>
14: Filter out all Female<br>
15: Find Type of Element<br>
16: Find most frequent element of an Array<br>
17: Write a js program to shuffle an array.<br>
18: Palindrome<br>
19: Write a js program to compute the union of two arrays. ex: union([1, 2, 3], [4, 5, 6]) => [1, 2, 3, 4, 5, 6]

## Problem 1: Given a string, reverse each word in the sentence

Bangladesh is a beautiful Country => hsedalgnaB si a lufituaeb yrtnuoC

```js
let sentence = "Bangladesh is a beautiful Country";
let words = sentence.split(" "); // hsedalgnaB si a lufituaeb yrtnuoC

let newReverseWords = words.map((word) => word.split("").reverse().join(""));
// ['hsedalgnaB', 'si', 'a', 'lufituaeb', 'yrtnuoC']

console.log(newReverseWords.join(" ")); // hsedalgnaB si a lufituaeb yrtnuoC
```

## Problem 2: How to check if an object is an array or not? Provide some code.

typeof will not work. both [], {} are object by typeof

```js
let arr = [1, 2, 3];
checkArray([]);
checkArray({});
checkArray(arr);

function checkArray(input) {
  console.log(Array.isArray(input));
}
```

## Problem 3: How to empty an array in JavaScript?

```js
let arr = [1, 2, 3];

// Method 1
arr = [];

// Method 2
arr.length = 0;

// Method 3
arr.splice(0, arr.length);

console.log(arr);
```

## Problem 4: How would you check if a number is an integer?

```js
function checkInt(input) {
  return typeof input == "string";
}

function checkIntWithNumberClass(input) {
  return Number.isInteger(input);
}

function checkIntWithLogic(input) {
  if (input % 1 == 0) return "Integer";

  return "Not Integer";
}

console.log(checkInt(33));
console.log(checkIntWithLogic("ds"));
console.log(checkIntWithNumberClass(55));
```

## Problem 5: Make this work : duplicate([1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5, 1, 2, 3 ,4, 5]

```js
let arr = [1, 2, 3, 4];

function duplicateArrayElement(arr) {
  return [...arr, ...arr];
}

function duplicateArrayElementWithConcat(arr) {
  return arr.concat(arr);
}

console.log(duplicateArrayElement(arr));
console.log(duplicateArrayElementWithConcat(arr));
```

## Problem 6: Write a JavaScript function that reverse a number?

```js
function reverseNumber(num) {
  let reverseNumber = 0;

  while (num != 0) {
    reverseNumber = reverseNumber * 10 + (num % 10);
    num = parseInt(num / 10);
  }

  return reverseNumber;
}

console.log(reverseNumber(1236));
```

## Problem 7: Write a JavaScript function that checks whether a passed string is palindrome or not?

```js
function isPalindrome(str) {
  let strRev = str.split("").reverse().join("");
  return str === strRev;
}

console.log(isPalindrome("abcba"));
console.log(isPalindrome("abcba1"));
```

## Problem 8: Write a js function that returns a passed string with letters in alphabetical order

```js
function isPalindrome(str) {
  let strRev = str.split("").sort().join("");
  return strRev;
  //   return str.split("").sort().join("");
}

console.log(isPalindrome("abcba"));
```

## Problem 9: Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

```js
function capitalized(str) {
  let strArr = str.split(" ");
  let capitalizedStr = strArr.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  );
  return capitalizedStr;
}

console.log(capitalized("My name is subroto BisWas"));
```

## Problem 10: Write a JavaScript function which accepts an argument and returns the type

```js
// typeof is a easy solution
```

## Problem 11: Write a javascript function to get the number of occurrences of each letter in specified string?

```js
// Solution 1: My Self
function occurrenceOfChar(input) {
  let inputArr = input.split("");
  let output = [];

  inputArr.map((c) => {
    if (output[c]) {
      output[c] = output[c] + 1;
    } else output[c] = 1;

    return c + ": " + output[c];
  });

  return output;
}

let result = occurrenceOfChar("appleccd");

Object.entries(result).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
```

```js
// Solutioin 2
function occurrenceOfChar(input) {
  let occurrence = {};

  input.split("").forEach((element) => {
    if (occurrence.hasOwnProperty(element)) occurrence[element]++;
    else occurrence[element] = 1;
  });

  return occurrence;
}

console.log(occurrenceOfChar("appleccd"));
```

## Problem 12: Sum element of an array

```js
var arr = [1, 2, 3, 4, 5, 6];
var sum = 0;

arr.forEach((element) => (sum += element));

console.log(sum);
```

## Problem 13: Sum only numbers of an array

```js
var arr = ["Myname", 2, "t", 4, "test", 6, 10];
var sum = 0;

arr.forEach((element) => {
  if (typeof element === "number") {
    sum += element;
  }
});

console.log(sum);
```

## Problem 14: Filter out all Female

```js
var users = [
  { name: "Subroto", genter: "Male" },
  { name: "Kumar", genter: "Male" },
  { name: "Biswas", genter: "Male" },
  { name: "Sobita", genter: "Female" },
  { name: "Srabonee", genter: "Female" },
  { name: "Kanon", genter: "Male" },
];

var newUsers = users.filter((user) => user.genter == "Male");

console.log(newUsers);
```

## Problem 15: Find Type of Element

```js
function itemType(element) {
  if (Array.isArray(element)) return "array";
  return typeof element;
}

console.log(itemType([]));
console.log(itemType({}));
console.log(itemType(22));
console.log(itemType("stringOk"));
console.log(itemType(true));
console.log(itemType(undefined));
console.log(itemType(function () {}));
```

## Problem 16: Find most frequent element of an Array

```js
function freq(input) {
  if (!Array.isArray(input)) return "Item not array";

  let tempObj = {};

  input.forEach(function (element) {
    if (tempObj.hasOwnProperty(element)) tempObj[element]++;
    else tempObj[element] = 1;
  });

  //   debugger;
  return Object.keys(tempObj).reduce((acc, curr) => {
    return tempObj[curr] > tempObj[acc] ? curr : acc;
  });
}

console.log(freq([1, 2, 3, 4, 5, 6, 2, 3, 2, 4, 2, 6, 7, 4, 4, 4, 4]));
```

## Problem 17: Write a js program to shuffle an array.

```js
function shuffle(input) {
  console.log(input);
  let l = input.length;
  // console.log(l);

  for (let i = l - 1; i >= 0; i--) {
    let randomNumber = Math.floor(Math.random() * (i + 1));
    let temp = input[randomNumber];
    input[randomNumber] = input[i];
    input[i] = temp;
  }

  console.log(input);
}

console.log(shuffle([1, 2, 3, 4, 5]));
```

## Problem 18: Palindrome

```js
function palindrome(input) {
  var length = input.length;
  if (length == 1) return true;

  if (input[0] != input[length - 1]) return false;
  var subStr = input.slice(1, length - 1);
  return palindrome(subStr);
}

console.log(palindrome("madam"));
```

## Problem 19: Write a js program to compute the union of two arrays. ex: union([1, 2, 3], [4, 5, 6]) => [1, 2, 3, 4, 5, 6]

```js
function union(arr1, arr2) {
  return [...new Set(arr1.concat(arr2))];
}

console.log(union([1, 2, 6, 3], [4, 5, 3]));
```

## Problem :

```js

```

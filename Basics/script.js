// Basic JavaScript examples
//console.log("Hello, welcome to my website!");
//window.alert("Hello, welcome to my website!");
//document.getElementById("myhead").textContent = "Hello";
/*let age = 20;
console.log(typeof age);
console.log("My age is " + age); or console.log(`My age is ${age}`);
let name = "John";
console.log(`My name is ` + name);
document.getElementById("p1").textContent = `My name is ${name} and my age is ${age}.`);
*/
/*
let username = prompt("Please enter your name:");
console.log(username);
or better way
let username;
document.getElementById("submit1").onclick = function() {
    username = document.getElementById("username").value;
    console.log(username);
    document.getElementById("p1").textContent = `Hello, ${username}!`;
}
*/
/*
Math = built-in object in JavaScript that provides various mathematical functions and constants.

let x = 5;
let y = 3;

Math.floor(4.7); // returns 4
Math.ceil(4.2); // returns 5
Math.round(4.5); // returns 5
Math.trunc(4.7); // returns 4
Math.max(x, y); // returns 5
Math.min(x, y); // returns 3
Math.sqrt(16); // returns 4
Math.pow(2, 3); // returns 8
Math.abs(-5); // returns 5
Math.sign(-10); // returns -1
Math.sin(Math.PI / 2); // returns 1
Math.cos(0); // returns 1
Math.tan(Math.PI / 4); // returns 1
let random = Math.random(); // returns a random number between 0 and 1
let randomInt = Math.floor(Math.random() * 10) + 1; // returns a random integer between 1 and 10
*/
/*
conversions
let x = 5;
x = Number(x); // converts x to a number
x = String(x); // converts x to a string
x = Boolean(x); // converts x to a boolean
*/
/*
checked = property of an HTML input element of type checkbox that indicates whether the checkbox is currently checked or not.
It returns a boolean value (true or false) based on the state of the checkbox.
if (mycheckbox.checked) {
    console.log("Checkbox is checked");
}
*/
/*
Ternary operator = a shorthand way of writing an if-else statement in JavaScript.
condition ? expressionIfTrue : expressionIfFalse;
let purchaseAmount = 150;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`);
*/
/*
string methods
let str = "Hello, World!";
console.log(str.length);
console.log(str.repeat(3));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.substring(0, 5));
console.log(str.indexOf("World"));
console.log(str.replace("World", "Universe"));
console.log(str.split(","));
console.log(str.trim());
console.log(str.includes("Hello"));
console.log(str.charAt(0));
console.log(str.indexOf("o"));
console.log(str.lastIndexOf("o"));
console.log(str.startsWith("Hello"));
console.log(str.endsWith("!"));
console.log(str.padStart(15, "*"));
console.log(str.padEnd(15, "*"));
*/
/*
const fullname = "John Doe";
let firstName = fullname.slice(0, fullname.indexOf(" "));
let lastName = fullname.slice(fullname.indexOf(" ") + 1);
*/
/*
method chaining
let username = "gus TAvo";
let formattedUsername = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();
console.log(formattedUsername);
*/
/*
$$Same as C++$$
if, else if, else statements
switch statement
while, do-while loops
for loop
for each = for (let item of array) {}
*/
/*
Array methods
let arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.pop();
arr.shift(); // removes the first element
arr.unshift(0); // adds an element to the beginning of the array
arr.splice(2, 1); // removes 1 element at index 2
arr.slice(1, 4); // returns a new array with elements from index 1 to 3
arr.indexOf(3); // returns the index of the first occurrence of 3
arr.includes(4); // returns true if 4 is in the array
arr.join(","); // returns a string with all elements joined by a comma
arr.sort(); // sorts the array in ascending order
arr.reverse(); // reverses the order of the array
let newArr = arr.map(x => x * 2); // returns a new array with each element multiplied by 2
let filteredArr = arr.filter(x => x > 3); // returns a new array with elements greater than 3
*/
/*
spread operator ... spreads the items
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArr = [...arr1, ...arr2];
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let combinedObj = { ...obj1, ...obj2 };
*/
/*
rest parameters ...args bundles the items
function sum(...numbers) {
    let result = 0;
    for (let num of numbers) {
        result += num;
    }
    return result;
}
console.log(sum(1, 2, 3)); // returns 6
*/
/*
Callback function = a function passed into another function as an argument,
which is then invoked inside the outer function to complete some kind of routine or action.
function goodbye(callback) {
    console.log("Goodbye!");
    callback();
}
function leave() {
    console.log("Leaving...");
}
goodbye(leave);
*/
/*
forEach method = executes a provided function once for each array element.
This changes the original array, while map and filter return new arrays without modifying the original.
let arr = [1, 2, 3, 4, 5];
arr.forEach(display);
function display(item) {
    console.log(item);
}

let fruits = ["apple", "banana", "cherry"];
fruits.forEach(uppercase);
fruits.forEach(display);
function uppercase(item, index, array) {
    array[index] = item.toUpperCase();
}
function display(item) {
    console.log(item);
}
*/
/*
const dates = ["2024-01-01", "2024-02-14", "2024-03-17"];
const formattedDates = dates.map(formatDates);
console.log(formattedDates);
function formatDates(date) {
    const parts = date.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}
*/
/*
const ages = [16, 17, 18, 19, 20, 21];
const adults = ages.filter(isAdult);
const minors = ages.filter(isMinor);
console.log("Adults:", adults);
console.log("Minors:", minors);
function isAdult(age) {
    return age >= 18;
}
function isMinor(age) {
    return age < 18;
}
*/
/*
const grades = [85, 92, 78, 90, 88];
const maximum = grades.reduce(getMax);
console.log("Maximum grade:", maximum);
function getMax(accumulator, current) {
    return Math.max(accumulator, current);
}
*/
/*
Function expressions = functions that are assigned to variables.
They can be anonymous (without a name) or named.
const number = [1, 2, 3, 4, 5];
const squared = number.map(function(element) {
    return element * element;
});
console.log(squared);
Arrow functions = a shorter syntax for writing function expressions.
const squared = number.map((element) => Math.pow(element, 2));
const evenNumbers = number.filter((element) => element % 2 === 0);
*/
/*
Objects = collections of key-value pairs that represent real-world entities or concepts.
const person = {
    FirstName: "John",
    LastName: "Doe",
    Age: 30,
    FullName: function() {
        return `${this.FirstName} ${this.LastName}`;
    }
};
console.log(person.FullName());
console.log(person.Age);
*/
/*
Constructor functions = special functions used to create and initialize objects.
function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function() {
        console.log(`The ${this.color} ${this.make} ${this.model} is driving.`);
    }
}
const Car1 = new Car("Toyota", "Camry", 2020, "red");
const Car2 = new Car("Honda", "Civic", 2019, "blue");
Car1.drive();
Car2.drive();
*/
/*
Classes = a blueprint for creating objects with predefined properties and methods.
class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    displayInfo() {
        console.log(`Product: ${this.name}, Price: $${this.price}, Category: ${this.category}`);
    }
}
const product1 = new Product("Laptop", 999.99, "Electronics");
const product2 = new Product("Coffee Maker", 49.99, "Home Appliances");
product1.displayInfo();
product2.displayInfo();
*/
alert('Hello World');
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');

// var, let, const
// var should not be used anymore
// const cannot be changed, let can be changed

const age = 30;

console.log(age);

let score = 9;
score = 10;
console.log(score);

// Primitive Data Types
// Strings, Numbers, Boolean, null, undefined, symbol
// Symbol is uncommon

const nameof = 'John';
const ageof = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof nameof);
console.log(typeof ageof);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

// Concatenation
console.log('My name is ' + nameof + ' and I am ' + ageof + ".");

// Temple String
const hello = `My name is ${nameof} and I am ${ageof}.`;

console.log(hello);

// String Properities and Methods

const s = "Hello World";
const t = 'technology, computers, it, code';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toUpperCase());

console.log(s.split(''))

console.log(t.split(', '));

/* Multi
line
comment */

// Arrays

// Array constructor. Not used often.
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

// New way to do Arrays!

const fruits = ['apples', 'oranges', 'pears', 10, true];

fruits[3] = 'grapes';                       // Changes the value of the fourth item.

fruits.push('mangos');                      // Adds item at end of array.

fruits.unshift('strawberries');             // Addsitem at beginning of array.

fruits.pop();                               // Removes last item of array.

console.log(Array.isArray(fruits));         // Confirms if it's an array.
console.log(fruits);                        // Logs all of the items of array.
console.log(fruits[1]);                     // Logs the second item of array.
console.log(fruits.indexOf('oranges'));     // Logs the index of an item in an array.

// Object Literals

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);
console.log(person.firstName, person.lastName);     // Dot syntax. Can log individual objects inthe index.
console.log(person.hobbies[1]);
console.log(person.address.city);

// Destrocturing

const { firstName, lastName, address: { city } } = person;

console.log(firstName);
console.log(city);

person.email = "john@email.com";                    // Add properties.

// Arrays of objeccts.

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isComplete: true
    },
    {
        id: 2,
        text: 'Meeting with Boss',
        isComplete: true
    },
    {
        id: 3,
        text: 'Dentist Appointment',
        isComplete: false
    },
];

console.log(todos);
console.log(todos[1].text);


const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// Simple "For" Loops
for(let i = 0; i < 10; i++) {
    console.log(`For Loop Number: ${i}`);
}

// "While" Loops
let o = 0;
while(o < 10) {
    console.log(`While Loop Number: ${o}`);
    o++;
}

// Array Loops

for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

for(let todo of todos) {                        // Less ugly way to do it.
    console.log(todo);
    console.log(todo.text);
}

// High Order Array Methods
// forEach, map, filter

todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    return todo.isComplete === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted);

// Conditionals

const q = 4;
const w = 11;

if(q > 5 || w > 10) {
    console.log(`q is more than 5 or w is more than 10`);
} else if (x > 10) {
    console.log(`x is greater than 10`);
} else {
    console.log(`x is less than 10`);
}

// || - or, && - and
// Turniary conditions

const c = 10;

const color = c > 10 ? 'red' : 'blue';

console.log(color);

// Switch conditions

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

// Functions
function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}

console.log(addNums(5, 5));

const addNumbers = (number1 = 1, number2 = 1) => {
    return number1 + number2;
}

console.log(addNumbers(7,5));

const addNumberis = (number1 = 1, number2 = 1) => number1 + number2;

console.log(addNumberis(9, 6));
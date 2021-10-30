let name = 'Jose'; // String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
let middleName = undefined;
let selectedColor = null; // When you want to clear the variable.

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a name (1name)
// Cannot contain s a space or hyphen (-)

console.log(name);

// This is best practice.
let firstName = 'Jose';
let lastName = 'Esquivel';

// Also can be - let firstName = "Jose", lastName = "Esquivel";

isApproved = false;

console.log(isApproved);

console.log(firstName, lastName);

// This is my first Javascript code.
console.log('As white as the Capital riots.');

const interestRate = 0.3;
//interestRate = 1; - This can lead to an error.
console.log(interestRate);

// Primitives or Value types
// Strings, Number, Boolean, Undefined, and Null

let person = {
    anotherName: 'Luis',
    anotherAge: 28
};

// Dot Notaion
person.anotherName = "John";

// Bracket Notation
person['anotherAge'] = "31";

console.log(person.anotherName);

// ARRAYS

let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors[0]);

function greet(name) {
    console.log('Hello ' + name + '!');
}

greet('Juan');
greet('Maria');

function greetAgain(name, lastName) {
    console.log("Hello " + name + ' ' + lastName + '!');
}

greetAgain('Marcela', 'Garcia');


function square(number) {
    return number * number;
}

console.log(square(2));


const interestRate = 0.3; // Use Constant when you don't need to reassign.
interestRate = 1; // CANNOT REASSIGN A CONSTANT
console.log(interestRate);

// OBJECT

let human = {
    id: 'John',
    cycle: '25'
};

// Dot Notation
human.id = 'Mosh';  //  To be concise.

// Bracket Notation
let selection = 'id';
human[selection] = Nany;  //  If we don't know what property is the user choosing.

console.log(human.id);

// FUNCTIONS

// Performs a task
function greet(name, lastNAme) {  // Setting up a variable in the function creates a parameter only used in that function. 
    console.log('Hello ' + name);
}

greet('Twelve');  // Twelve is an argument
greet('Jack', 'Thunder');

// Calculates a value.
Function square(number) {
    return number * number;
}

// let number = square(2);
console.log(square(2));


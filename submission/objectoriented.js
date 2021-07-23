// Constructor Function

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate Object

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person1, person2.firstName, person1.dob.getFullYear());

console.log(person1.getBirthYear());
console.log(person1.getFullName());

// THE DOM!

console.log(window);

alert(1);

// Single Elment
document.getElementById('my-form');

// console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));

// Multiple Element

console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByClassName('li'));
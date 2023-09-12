// Class
class Person {
    constructor(username, email, password, firstname, lastname, dob, termcheck) {
        this.username = username
        this.email = email
        this.password = password
        this.firstName = firstname;
        this.lastName = lastname;
        this.dob = new Date(dob);
        this.termCheck = termcheck
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

const username = document.getElementById("username").value
const email = document.getElementById("email").value
const password = document.getElementById("password").value
const firstName = document.getElementById("firstname").value
const lastName = document.getElementById("lastname").value
const dob = document.getElementById("dob").value
const termCheck = document.getElementById("termcheck").checked

const submitButton = document.getElementById("submit")

// Events
submitButton.addEventListener("click", () => {

    if (validateemail(email) == false) {
        alert('Must enter a valid email.')
        event.preventDefault()
    }

    if (!termCheck.checked) {
        alert('Must accept the terms of use')
        event.preventDefault()
    }
    
    console.log(new Person(username, email, password, firstName, lastName, dob, termCheck))
})

// Functions
function validateemail(input) {
    let validRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (input.match(validRegex)) {
        return true
    }
    else {
        return false
    }
}
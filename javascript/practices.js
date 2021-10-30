let person = {
    name: "Armuro",
    age: 25,
    occupation: "Gundam Pilot",
    home: {
        location: 'Colony',
        territory: 'Side 7',
    }
}

console.log("DOT NOTATION");
console.log(person.occupation);
console.log(person.home.territory);
// -------------------------------------------

let selection = 'id';
[selection] = 'John',

console.log("WHEN YOU DON'T KNOW THE PROPERTY.")
console.log("selection")
// -------------------------------------------

console.log('FOR LOOP')
for (let i = 0; i < 5; i++) {
    if (i % 2 !== 0) console.log(i);
}

console.log('WHILE LOOP')
let a = 0;
while (a < 10) {
    let text = "The number is " + a;
    a++;
    console.log(text);
}
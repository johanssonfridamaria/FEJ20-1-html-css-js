// SCOPE

let age = 33;  //global scope
// let age = 55;

if(true) {
    let age = 55; //local scope
    let name = 'Joakim';
    // console.log('Inne i 1a kodblocket', age);
    // console.log('Inne i 1a kodblocket', name);

    if(true) {
        let age = 100; //local scope
        let name = 'Jeanette';
        // console.log('Inne i kodblock 1.2', age);
        // console.log('Inne i kodblock 1.2', name);
        var globalt = 'var';
    }
}


// console.log('Utanför något block', age);
// console.log('Utanför något block', name);
// console.log('Utanför något block', globalt);



// FUNCTIONS

// deklarera en funktion

// function hej() {
//     console.log('Hej på dig');
// };

// const greet = function() {
//     console.log('Hur är lääääääget?');
// };

// köra en funktion
// hej();
// greet();

let letName = 'Jeanette';

// const greet = function(name) {
//     console.log(`Hej ${name} hur är läget?`)
// }

// greet('Joakim');
// greet(letName);



// const calc = function(num1 = 0, num2 = 0) {
//     console.log(num1 + num2);
// }

// calc(10, 5);
// calc(350, 2000);
// calc();

// const calc = function(num1 = 0, num2 = 0) {
//     return num1 + num2;
// }

// let sum = calc(10, 15);
// console.log(sum)



// ARROW FUNCTIONS


const greet = name => {
    console.log(`Hej ${name} hur är läget?`)
}

const calc = (num1 = 0, num2 = 0) => num1 + num2;


let sum = calc(10, 15);
// console.log(sum)



// CALLBACK FUNCTIONS

const minFunktion = (callbackFunction) => {
    let val = 25;
    callbackFunction(val);
}

minFunktion(värdet => {
    // console.log(värdet);
})



let names = ['Joakim', 'Jeanette', 'Jack', 'Colin', 'Vince', 'Liam', 'Wille'];

names.forEach(name => {
    // console.log(name);
})



//  METHODS
let myName = names[0];
// console.log(myName);

let upper = myName.toUpperCase();
// console.log(upper);

let user = {
    firstName: 'Joakim',
    lastName: 'Wahlström',
    fullName() {
        // console.log(this)
        return this.firstName + ' ' + this.lastName;
    }
}

let fullName = user.fullName();
console.log(fullName)
// user.fullName();


// Datatyper

let string = 'text';
console.log(typeof string);

let number = 3;
console.log(typeof number);

let boolean = true;
console.log(typeof boolean);

let object = {};
console.log(typeof object);

let array = [];
console.log(typeof array);

let letUndefined;
console.log(typeof letUndefined);

let letNull = null;
console.log(typeof letNull);



// Object
let obj = {
    // Här inne kan vi deklarera vilka datatyper vi vill
    string: 'en string i objektet',
    number: 3,
    bool: true,
    nestedObj: {
        string: 'en string i ett "objekt" i ett objekt'
    },
    array: [1, 2, 3, 4]
}

// Hämta ut värdet från ett objekt

let objString = obj.string;
console.log(objString);
console.log(obj.nestedObj.string);
console.log(obj.array[2]);


let arr = ['noll', 'ett', 'två', 'tre'];

console.log(arr[0]);

arr.push('fyra');
console.log(arr);

console.log(arr.indexOf('tre'));
console.log(arr.length);

arr.splice(3, 1);

// arr.forEach(siffra => {
//     console.log(siffra)
// })

for(let i = 0; i < arr.length; i++) {
    if(arr[i] == 'två') {
        console.log('nu är vi på nummer 2')
    } else {
        console.log(arr[i]);
    }
}

let bool = false;

if (bool === true) {
    console.log('bool är sant')
} else {
    console.log('bool är falskt')
}


// Funktioner

// const hello = function() {
//     console.log('Hello World');
// }

const hello = () => console.log('Hello World');

hello();


// const greet = function(name) {
//     console.log('Hej ' + name + ' hur mår du?');
// }

const greet = name => console.log('Hej ' + name + ' hur mår du?');

greet('Lasse');


// const calc = function(numberOne, numberTwo) {
//     return numberOne + numberTwo
// }

const calc = (numberOne, numberTwo) => numberOne + numberTwo;

console.log(calc(1,5));


// const tip = function(sum, percent) {
//     percent = percent / 100
//     let total = sum + sum * percent
//     return total;
// }

const tip = (sum, percent) => {
    percent = percent / 100
    let total = sum + sum * percent
    return total;
}

console.log(tip(2500, 7))


const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const output = document.querySelector('#output');
const output2 = document.querySelector('#output2');

const changeColor = color => {
    output.classList.remove('red', 'green', 'blue');
    output.classList.add(color);
}


red.addEventListener('click', () => {
    changeColor('red');
})
green.addEventListener('click', () => {
    changeColor('green');
})
green.addEventListener('mouseenter', () => {
    output2.classList.toggle('d-none');
})
blue.addEventListener('click', () => {
    changeColor('blue');
    output2.classList.toggle('d-none');
})

output2.addEventListener('mousemove', (e) => {
    // output2.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+',40)'
    output2.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`
})
output2.addEventListener('click', (e) => {
    output2.innerHTML = 
    `
    rgb(${e.offsetX},${e.offsetY},40)
    `;
    document.querySelector('body').style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`
})



// Classer

class Bil {
    constructor(färg, hjul = 4) {
        this.color = färg;
        this.wheels = hjul;
        this.seats = 5;
        this.model = 'sedan'
        this.gearbox = 0
    }


    gearUp() {
        this.gearbox ++
        console.log(this.gearbox)
        return this
    }
    gearDown() {
        this.gearbox --
        console.log(this.gearbox)
        return this
    }
}


let blåBil = new Bil('blå');

console.log(blåBil)

let rödBil = new Bil('röd', 3);

console.log(rödBil);


rödBil.gearUp().gearUp().gearUp().gearUp().gearUp().gearUp().gearDown()

blåBil.gearDown()

blåBil.gearUp().gearUp()
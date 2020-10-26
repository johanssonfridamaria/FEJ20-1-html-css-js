const form = document.querySelector('#form');
const nr1 = document.querySelector('#nr1');
const nr2 = document.querySelector('#nr2');
const output = document.querySelector('#output');
const output2 = document.querySelector('#output2');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');

let operator = 'minus'
let sum;

const showSum = () => {
    output.innerHTML = 
    `
    <h1>${sum}</h1>
    `
}

plus.addEventListener('click', () => {
    sum = Number(nr1.value) + Number(nr2.value);
    showSum()
    operator = 'plus'
})
minus.addEventListener('click', () => {
    sum = Number(nr1.value) - Number(nr2.value);
    showSum()
    operator = 'minus'

})



form.addEventListener('submit', e => {
    e.preventDefault();


    switch (operator) {
        case 'plus':
            sum = Number(nr1.value) + Number(nr2.value);
            break;
        case 'minus':
            sum = Number(nr1.value) - Number(nr2.value);
            break;
    
        default:
            break;
    }

    showSum();

})

// KOMMENTARER!!!!!

one.addEventListener('click', () => {
    nr1.value += '1'
    output2.innerText += '1'
})
two.addEventListener('click', () => {
    output2.innerText += '2'
    nr1.value += '2'
})
three.addEventListener('click', () => {
    output2.innerText += '3'
    nr1.value += '3'
})
four.addEventListener('click', () => {
    output2.innerText += '4'
    nr1.value += '4'
})
five.addEventListener('click', () => {
    output2.innerText += '5'
    nr1.value += '5'
})
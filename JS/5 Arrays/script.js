// Vi vill hålla samma datattyp inuti en array
const array = [0, 1, 2, 3, 4];

// Det här är inte best practice
const multiArray = ['12', 12, true, {firstName: 'Joakim'}];

const users = [
    { firstName: 'Joakim', lastName: 'Wahlström', age: 33 },
    { firstName: 'Jeanette', lastName: 'Wahlström', age: 32 },
    { firstName: 'Jack', lastName: 'Wahlström', age: 5 }   
];

const names = ['Joakim', 'Jeanette', 'Jack'];

console.log(names);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

console.log(users[0].firstName);


// Lågg till i början av en array
names.unshift('Colin');
console.log('med unshift: ' + names);

// Ta bort i början av en array
names.shift();
console.log('med shift: ' + names);

// Lägga till i slutet av en array
names.push('Colin');
console.log('med push: ' + names);

// Ta bort i slutet av en array
names.pop();
console.log('med pop: ' + names);

// Ändra ett epecifikt värde
names[1] = 'Nytt Namn';
console.log('Ändrat: ' + names);

console.log(names.indexOf('Jack'));

console.log(names.length);


const enTillArray = names.concat(['Colin', 'Jeanette']);

console.log(enTillArray);

console.log(names.concat(['Colin', 'Jeanette']));


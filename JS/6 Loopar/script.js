const namesArray = ['Joakim', 'Jeanette', 'Jack', 'Colin', 'Vince', 'Liam', 'Wille'];

const usersArray = [
    {name: 'Joakim', email: 'joakim@lexicon.se', age: 33, status: true},
    {name: 'Jeanette', email: 'Jeanette@lexicon.se', age: 33, status: false},
    {name: 'Jack', email: 'Jack@lexicon.se', age: 24, status: true},
    {name: 'Colin', email: 'Colin@lexicon.se', age: 44, status: false},
    {name: 'Vince', email: 'Vince@lexicon.se', age: 21, status: false},
    {name: 'Liam', email: 'Liam@lexicon.se', age: 5, status: true},
    {name: 'Wille', email: 'Wille@lexicon.se', age: 54, status: false}
]

let numberOfUsers = 0;

// FOR loopar

// loopar ett givet antal gånger
for (let i = 0; i < 5; i++) {
    // console.log(i);
    // console.log(i, namesArray[i]);
}

// Loopar igenom en hel array
for(let i = 0 ; i < namesArray.length ; i++) {
    // console.log(i, namesArray[i]);
}
// for(let i = 0 ; i < usersArray.length ; i++) {
//     console.log(usersArray[i].name);
// }


// FOR OF loopar

for( name of namesArray ) {
    // console.log(name);
}
for ( user of usersArray ) {
    // console.log(user);
    // console.log(user.email);
}



// WHILE loopar

let i = 1;

while (i < 5) {
    // console.log('while: ' + i);
    i++;
}

// console.log('i är ' + i);

// DO WHILE

do {
    // console.log('do while: ' + i);
    i++;
} while(i < 8);

// console.log('i är ' + i);



//  HIGH ORDER ARRAY METHODS

// FOREACH loopar
namesArray.forEach(function(name) {
    // console.log(name);
})

namesArray.forEach(name => {
    // console.log(name);
})

usersArray.forEach(function(user) {
    // console.log(user);
})

usersArray.forEach(user => {
    // console.log(user.name, user.age, user.email);
    numberOfUsers ++;
})

// console.log(numberOfUsers);


// MAP

const userEmails = usersArray.map(user => {
    return user.email;
})

console.log(userEmails);

// FILTER

const loggedIn = usersArray.filter(user => {
    return user.status === true;
})

console.log(loggedIn);
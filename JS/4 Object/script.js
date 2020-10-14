const user = {
    firstName: 'Joakim',
    lastName: 'Wahlström',
    age: 33,
    address: {
        street: 'en gata',
        nr: 12,
        zipCode: '72345',
        city: 'Västerås'
    },
    phoneNumbers: [
        '076-0254452',
        '070-2469697'
    ],
    isActive: true
}

let key = 'age';

console.log(user);
console.log(user.firstName);
console.log(user['lastName']);
console.log(user[key]);

console.log(`Användaren heter ${user.firstName} och bor i ${user.address.city}.`);


user.firstName = 'Jeanette';

console.log(user.firstName);

user.email = 'joakim.wahlstrom@lexicon.se';
console.log(user);


const { firstName, lastName, address: { city } } = user;

console.log(firstName);
console.log(lastName);
console.log(city);
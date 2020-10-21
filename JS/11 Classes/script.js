// Deklarera ett Javascript objekt
const jsObj = {}

const obj1 = {
    id: '1',
    firstName: 'Joakim',
    LastName: 'Wahlström',
    email: 'joakim.wahlström@lexicon.se',
    loggedIn: false,
    login: function() {
        this.loggedIn = true;
        console.log(`${this.firstName} has logged in`)
    },
    logout() {
        this.loggedIn = false;
        console.log(`${this.firstName} has logged out`)
    }
}

// obj1.login();
// console.log(obj1.loggedIn)
// obj1.logout();
// console.log(obj1.loggedIn)

// const obj2 = {
//     id: '2',
// }


// Deklarera en Javascript class
class JsClass {}

class Class1 {
    firstName = 'Joakim'
}

let cls1 = new Class1();
let cls2 = new Class1();

// console.log(cls1, cls2)



class User {
    constructor(first = 'förnamn', last = 'efternamn') {
        this.firstName = first;
        this.lastName = last;
        this.loggedIn = false;
    }
    login() {
        this.loggedIn = true;
        console.log(`${this.firstName} has logged in`)
        return this;
    }
    logout() {
        this.loggedIn = false;
        console.log(`${this.firstName} has logged out`)
        return this;

    }
    funk() {
        console.log(`${this.firstName} gjorde precis något coolt`)
        return this;

    }
}

let userOne = new User('Joakim', 'Wahlström');
let userTwo = new User();

// console.log(obj1);
// console.log(userOne, userTwo);

// userOne.login();
// userTwo.login();

// userOne.login().funk().logout();


// Class Inheritance

class Admin extends User {
    removeUser(user) {
        users = users.filter(u => {
            return u.firstName != user.firstName;
        })
    }
}

let admin = new Admin('Admin', 'Wahlström');

let users = [userOne, userTwo, admin]

// admin.login();

console.log(users)

admin.removeUser(userTwo);
console.log(users)




// Prototype

// Det här motsvarar Constructor
function PrototypeUser(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.loggedIn = false
    this.login = function() {
        this.loggedIn = true
        console.log(`${this.firstName} has logged in`)
    }
}

PrototypeUser.prototype.logout = function() {
    this.loggedIn = false;
    console.log(`${this.firstName} has logged out`)
}

PrototypeUser.prototype.funk = function() {
    console.log(`${this.firstName} gjorde precis något coolt`)
}


let userThree = new PrototypeUser('Jack', 'Wahlström');
userThree.login()

console.log(userThree)

userThree.logout()
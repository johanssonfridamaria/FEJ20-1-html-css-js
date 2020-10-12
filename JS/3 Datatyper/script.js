/*

    Javascript Datatyper
    ---------------------------------------------------------
    String      =   Text
    Number      =   Tal, decimaltal
    Boolean     =   Sant/Falskt     true / false
    null        =   tomt / inget alls (manuellt)
    undefined   =   tomt / har ej blivit definierat än (automatiskt)
    Object      =   ett object som inehåller ett eller flera värden Array är en object typ
    Symbol      =   symboler används med objekt, kommer vi inte att använda


*/

/*
    Deklarera variabler
    ---------------------------------------------------------

    var name = 'Joakim';
    let name = 'Joakim';
    const name = 'Joakim';
    name = 'Jocke';

    var = global variabel - accessbar överallt i koden
    let = lokal variabel - accessbar bara inom det angivna området
    const = konstant variabel - den kan inte skrivas över (undantag finns)

    C# exempel:
        string name = "Joakim";
        int age = 35;
    JS exempel:
        let name = 'Joakim';
        let age = 35;

*/

/*
    Strings:
        let name = "Joakim"; - Använd INTE
        let name = 'Joakim'; - Denna ska du använda
        let name = `Joakim`; - Använd denna när du ska köra placeholders (Template strings)  ( shift + ´, tryck mellanslag )

        avsluta varje rad med ett ;  ( det behövs inte, men det är bra att göra )

*/


let doNotUse = "Joakim";
let useThis = 'Joakim';
let number = 33;

// console.log(useThis, number);

let withoutPlaceholders = 'Mitt namn är ' + useThis + ' och jag är ' + number + ' år gammal.';
let withPlaceholders = `Mitt namn är ${useThis} och jag är ${number} år gammal.`;

// console.log(`Mitt namn är ${useThis} och jag är ${number} år gammal.`);
// console.log(withoutPlaceholders);
// console.log(withPlaceholders);


var varName = 'var Joakim';
let letName = 'let Joakim';
const constName = 'const Joakim';

// console.log(varName);
// console.log(letName);
// console.log(constName);

varName = 'whatever I want';
letName = 'Jeanette';
// constName = 'Jeanette';
// kan inte skrivas över

// console.log(varName);
// console.log(letName);

// let firstName = 'Joakim';
// let lastName = 'Wahlström';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName);


let datatype;
// let datatype1, dadatype2, datatype3;

// console.log(typeof datatype);

datatype = 'en text';
// console.log(typeof datatype);

datatype = 3;
// console.log(typeof datatype);

datatype = null;
// console.log(typeof datatype);

datatype = false;
// console.log(typeof datatype);

datatype = {};
// console.log(typeof datatype);

datatype = [];
// console.log(typeof datatype);


let myName = 'Joakim Wahlström';

// console.log(myName.length);
// console.log(myName[0]);
// console.log(myName[1]);
// console.log(myName.indexOf('a'));

// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// console.log(myName.split(' '));

let names = myName.split(' ');
let firstName = names[0];
let lastName = names[1];

// console.log(`Mitt förnamn är ${firstName} och efternamnet är ${lastName}.`);


// NUMBERS
// ------------------------------------------

let nr1 = 10;
let nr2 = 2.5;

// Math operators +, -, *, /, **, %
console.log(nr1, nr2);

console.log(nr1 + nr2);
console.log(nr1 - nr2);

nr1 = nr1 + 1;
nr1 += 1;
nr1 ++;
// gör samma sak

nr1 = nr1 - 1;
nr1 -= 1;
nr1 --;

console.log(nr1);

// gånger
console.log(nr1 * nr2);
// Upphöjt i
console.log(nr1 ** nr2);
// %  vad blir kvar, används för att kolla om ett tal är jämt delbart med ett annat tal
console.log(nr1 % 2);
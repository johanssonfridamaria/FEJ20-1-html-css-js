// BOOLEANS -- TRUE / FALSE

let email = 'joakim.wahlstrom@lexicon.se';
// console.log(email.includes('@'));
// console.log(email.includes('2'));

let names = ['Joakim', 'Jeanette', 'Jack'];
// console.log(names.includes('Joakim'));
// console.log(names.includes('Colin'));


let number = 13;
let string = '13';

// console.log(number == 13);
// console.log(number == 20);
// console.log(number != 13);
// console.log(number != 20);

// större än
// console.log(number > 10);
// större eller lika med
// console.log(number >= 13);

// mindre än
// console.log(number < 10);
// mindre eller lika med
// console.log(number <= 13);


//  två = tecken jämför bara värdet
// console.log(number == string);
// tre = jämför värdet OCH datatyp
// console.log(number === string);


// console.log(number != string);

// console.log(number !== string);


// IF SATSER

if(string == number) {
    // console.log('Påståendet är sant: string == number')
}

if(string === number) {
    // console.log('Påståendet är sant: string === number')
}

/*
 .   !=     om det inte är lika med
 .   !==    om det inte ör lika med och inte har samma datatyp 
*/

if(string != number) {
    // console.log('Påståendet är sant: string != number')

}

if(string !== number) {
    // console.log('Påståendet är sant: (string !== number)')
}

/*
    <       mindre än
    >       större än
    <=      mindre eller lika med
    >=      större eller lika med
*/

/*
    &&      och
    ||      eller
.   !       inte
*/

let st = '15';
let nr = 13;

if(st > nr) {
    // console.log('st är större än nr');
}
if(typeof st == typeof nr) {
    // console.log('st är samma datatyp som nr');
}
if(st > nr && typeof st == typeof nr) {
    // console.log('st är samma datatyp som nr');
}
if(st > nr || typeof st == typeof nr) {
    // console.log('st är större är nr men dom har inte samma datatyp');
}
if(st > nr && typeof st != typeof nr) {
    // console.log('st är större än nr OCH det är INTE samma datatyp, Allt måste vara sant')
}
if(st > nr || typeof st != typeof nr) {
    // console.log('st är större än nr ELLER det är INTE samma datatyp, Ett av påståendena måste vara sant')
}



if(typeof st == typeof nr) {
    // console.log('st är samma datatyp som nr');
}else if(typeof st != typeof nr) {
    // console.log('st är INTE samma datatyp som nr')
}


// if, elseIf och else

let name = 'Jack'

if(name == 'Joakim') {
    // console.log('Namnet är ' + name);

}
if(name == 'joakim') {
    // console.log('Namnet är ' + name);
}




if(name.toLowerCase() == 'joakim') {

    console.log('Namnet är ' + name);


}else if(name.toLowerCase() == 'jeanette') {
 
    console.log('Namnet är ' + name);

}else if(name.toLowerCase() == 'jeanette') {

    console.log('Namnet är ' + name);

}else {
    console.log('Okänd person!')
}
'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


//Functions

function logger() {
   console.log('My name is Dima');
}

// calling / runing / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
   return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


// lecture: Function Declaration vs Expressions

//function declaration
const age1 = calcAge1(2003);


function calcAge1(birthYear) {
   return 2037 - birthYear;
}

// const age1 = calcAge1(2003); //work
console.log(age1);

// function expression
// const age2 = calcAge2(2003); // not work


const calcAge2 = function (birthYear) {
   return 2037 - birthYear;
}
const age2 = calcAge2(2003);
console.log(age2);
*/

// lecture: Arrow Functions

// expression declaration
const calcAge2 = function (birthYear) {
   return 2037 - birthYear;
}

// arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2003);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
   const age = 2037 - birthYear;
   const retirement = 65 - age;
   // return retirement;
   return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(2003, 'Dima'));
console.log(yearUntilRetirement(1980, 'Bob'));


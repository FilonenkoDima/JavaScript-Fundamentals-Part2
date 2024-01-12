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


// lecture: Functions Calling Other Functions

function cutFruitPieces(fruit) {
   return fruit * 4;
}

function fruitProcessor(apples, oranges) {
   const applePieces = cutFruitPieces(apples);
   const orangePieces = cutFruitPieces(oranges);

   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
   return juice;
}

console.log(fruitProcessor(2, 3));


// lecture: Reviewing Functions

const calcAge = function (birthYear) {
   return 2037 - birthYear;
}

const yearUntilRetirement = function (birthYear, firstName) {
   const age = calcAge(birthYear);
   const retirement = 65 - age;

   if (retirement > 0) {
      console.log(`${firstName} retires in ${retirement} years`);
      return retirement;
   } else {
      console.log(`${firstName} has already retired`);
      return -1;
   }

   // return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(2003, 'Dima'));
console.log(yearUntilRetirement(1970, 'Mike'));


// lecture: Introduction to Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];

console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']; //error

const firstName = 'Dima';
const dima = [firstName, 'Filonenko', 2037 - 1991, 'developer', friends];
console.log(dima);
console.log(dima[dima.length - 1].length);

// Exercise
const calcAge = function (birthYear) {
   return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


// lecture: Basic Array Operations (Methods)

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

const newLength1 = friends.unshift('John');
console.log(friends);
console.log(newLength1);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

friends.push(23);
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
   console.log('You have a friend called a Steven');
}


// lecture: Introduction to Objects

const dimaArray = [
   'Dima',
   'Filonenko',
   2037 - 2003,
   'developer',
   ['Ivan', 'Mark', 'Bogdan']
];

const dima = {
   firstName: 'Dima',
   lastName: 'Filonenko',
   age: 2037 - 2003,
   job: 'developer',
   friends: ['Ivan', 'Mark', 'Bogdan']
};

console.log(dima);
*/
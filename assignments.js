'use strict';

/*
//assignment to lecture - Functions

function describeCountry(country, population, capitalCity) {
   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const infoUkraine = describeCountry('Ukraine', 30, 'Kiyv');
const infoUSA = describeCountry('USA', 545, 'Washington');
const infoEngland = describeCountry('England', 70, 'London');

console.log(infoUkraine);
console.log(infoUSA);
console.log(infoEngland);


// assignment to lecture - Function Declaration vs Expressions

function percantageOfWorld1(population) {
   return (population / 7900) * 100;
}

const percantageOfChainaToWorldPopulation1 = percantageOfWorld1(1441);
const percantageOfUkraineToWorldPopulation1 = percantageOfWorld1(30);
const percantageOfUSAToWorldPopulation1 = percantageOfWorld1(545);

console.log(percantageOfChainaToWorldPopulation1);
console.log(percantageOfUkraineToWorldPopulation1);
console.log(percantageOfUSAToWorldPopulation1);

const percantageOfWorld2 = function (population) {
   return (population / 7900) * 100;
}

const percantageOfChainaToWorldPopulation2 = percantageOfWorld2(1441);
const percantageOfUkraineToWorldPopulation2 = percantageOfWorld2(30);
const percantageOfUSAToWorldPopulation2 = percantageOfWorld2(545);

console.log(percantageOfChainaToWorldPopulation2);
console.log(percantageOfUkraineToWorldPopulation2);
console.log(percantageOfUSAToWorldPopulation2);


// assignment to lecture - Arrow Functions
const percantageOfWorld3 = population => (population / 7900) * 100;

const percantageOfChainaToWorldPopulation3 = percantageOfWorld3(1441);
const percantageOfUkraineToWorldPopulation3 = percantageOfWorld3(30);
const percantageOfUSAToWorldPopulation3 = percantageOfWorld3(545);

console.log(percantageOfChainaToWorldPopulation3);
console.log(percantageOfUkraineToWorldPopulation3);
console.log(percantageOfUSAToWorldPopulation3);


// assignment to lecture - Functions Calling Other Functions

const percantageOfWorld3 = population => (population / 7900) * 100;

const describePopulation = (country, population) => `${country} has ${population} million people, wich is about ${percantageOfWorld3(population)}% of the world.`;

const decribePopulationChina = describePopulation("China", 1441);
const decribePopulationUkraine = describePopulation("Ukraine", 30);
const decribePopulationUSA = describePopulation("USA", 545);

console.log(decribePopulationChina);
console.log(decribePopulationUkraine);
console.log(decribePopulationUSA);


// assignment to lecture - Reviewing Functions

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const scoreDolphins1 = calcAverage(85, 54, 41);
const scoreKoalas1 = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
   if (avgKoalas >= avgDolphins * 2) console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
   else if (avgDolphins >= avgKoalas * 2) console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
   else console.log("No team wins...");
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins1, scoreKoalas1);


// assignment to lecture - Introduction to Arrays

const populations = [545, 40, 30, 110];
console.log(populations.length == 4);

const percantageOfWorld3 = population => (population / 7900) * 100;
const percantages = [percantageOfWorld3(populations[0]), percantageOfWorld3(populations[1]), percantageOfWorld3(populations[2]), percantageOfWorld3(populations[3])];

console.log(percantages);


// assignment to lecture - Basic Array Operations(Methods)

//task 1

const neighbours = ['Poland', 'Moldova', 'Romania', 'Slovakia'];
neighbours.push('Utopia');
neighbours.pop();

if (!neighbours.includes('Germany')) console.log('Probably not a central European country :D');

neighbours[neighbours.indexOf('Moldova')] = 'Republic of Moldova';
console.log(neighbours);

//task 2

let bills = [125, 555, 44];

let totals = [];

const calcTip = bill => {
   if (bill >= 50 && bill <= 300) {
      totals.push(bill * 0.15 + bill);
      return bill * 0.15;
   } else {
      totals.push(bill * 0.2 + bill);
      return bill * 0.2;
   }
}

let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips, totals);


// assignment to lecture - Introduction to Objects

const myCountry = {
   country: 'Urkaine',
   capital: 'Kyiv',
   population: 30,
   neighbours: ['Poland', 'Moldova', 'Romania', 'Slovakia']
};

console.log(myCountry);


// assignment to lecture - Dot vs. Bracket Notation

const myCountry = {
   country: 'Urkaine',
   capital: 'Kyiv',
   population: 30,
   neighbours: ['Poland', 'Moldova', 'Romania', 'Slovakia']
};

console.log(`${myCountry.country} has ${myCountry.population} million ukrainian-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry['population']);
*/

// assignment to lecture - Object Methods

// task 1
const myCountry = {
   country: 'Urkaine',
   capital: 'Kyiv',
   population: 30,
   neighbours: ['Poland', 'Moldova', 'Romania', 'Slovakia'],

   checkIsland: function () {
      return this.neighbours.length === 0 ? true : false;
   },

   describe: function () {
      console.log(`${myCountry.country} has ${myCountry.population} million ukrainian-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}. Is ${this.checkIsland() ? 'an' : 'not an'} island`);
   },

};

myCountry.describe();

// task 2

const mark = {
   fullName: "Mark Miller",
   mass: 78,
   height: 1.69,

   calcBMI: function () {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
   }
};

const john = {
   fullName: "John Smith",
   mass: 92,
   height: 1.95,

   calcBMI: function () {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
   }
};

console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is ${john.calcBMI() > mark.calcBMI() ? 'higher' : 'lower'} than ${mark.fullName}'s (${mark.calcBMI()})!`);

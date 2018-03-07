console.log("hey");

// Challenge #1: Wheel of Fortune
// Three candidates take part in a TV show. In order to decide who will take part in the final game and probably become rich, they have to roll the Wheel of Fortune!The Wheel of Fortune is divided into 20 sections, each with a number from 5 to 100 (only mulitples of 5). Each candidate can roll the wheel once or twice and sum up the score of each roll. The winner one that is closest to 100 (while still being lower or equal to 100). In case of a tie, the candidate that rolled the wheel first wins.

// You receive the information about each candidate as an array of objects: each object should have a name and a scores array with the candidate roll values. Display the name of the winner or false if there is no winner (all scored more than 100).

// Examples:

var players = [
    { 
        name: "Bob", 
        scores: [10, 65] 
    }, 
    { 
        name: "Bill", 
        scores: [90, 5] 
    }, 
    { 
        name: "Charlie", 
        scores: [40, 55] 
    }]; // Displays "Bill"

// do this object after figuring out first one
// var players = [{ name: "Bob", scores: [15, 20] }, { name: "Bill", scores: [10, 15] }, { name: "Charlie", scores: [90, 10] }]; // Displays "Charlie"

//plan 
//creat vars for solutions
var scoresSum; // two scores of each player added
var highestScore // highest score after added
var winner // name of highest scoring player
//add the two scores of each player
    //loop through each player and get each array of scores
for (var i = 0; i < players.length; i++) {
    console.log(players[i]);
    console.log(players[i].scores);
    // throw into an array so we can use
    var scoresArray = players[i].scores;
    // new thing: players[i].scores -- haven't used
    // do something w scoresArray
    // add the scores within each
    // but loop through these arrays first to get each
    for (var j = 0; j < scoresArray.length; j++) {
            // console.log(scoresArray[j]);
            scoresSum = scoresArray[0] + (scoresArray[1]); // there must be a way to add scores of ALL indexes--not just 0 and 1
            console.log(scoresSum);
            // return scoreSum; can't return this. hmm.
            sumArray = [scoresSum];
            console.log(scoresSum);
        }
    }

    // var scores = scoresSum.sort();
    // console.log(scores); //doesn't work


//---------------------------------------------------
// Challenge #2: Find how many times did a team from a given country win the Champions League?
// Given an array called winnerList and the name of a country, display the number of times a team from a given country has won. Return 0 if there have been no wins.

// For example

var winnerList = [
  {
    season: '1999-2000', 
    team: 'Real Madrid', 
    country: 'Spain'
    },
  {
    season: '2000-2001', 
    team: 'Bayern Munich', 
    country: 'Germany'
    },
  {
    season: '2001-2002', 
    team: 'Real Madrid', 
    country: 'Spain'
    },
  {
    season: '2002-2003', 
    team: 'Milan', 
    country: 'Italy'
    },
  {
      season: '2003-2004', 
      team: 'Porto', 
      country: 'Portugal'
    },
  {
      season: '2004-2005', 
      team: 'Liverpool', 
      country: 'England'
    },
  {
      season: '2005-2006', 
      team: 'Barcelona', 
      country: 'Spain'
    },
  {
      season: '2006-2007', 
      team: 'Milan', 
      country: 'Italy'
    },
  {
      season: '2007-2008', 
      team: 'Manchester United', 
      country: 'England'
    },
  {
      season: '2008-2009', 
      team: 'Barcelona', 
      country: 'Spain'
    },
  {
      season: '2009-2010', 
      team: 'Internazionale', 
      country: 'Italy'
    },
  {
      season: '2010-2011', 
      team: 'Barcelona', 
      country: 'Spain'
    },
  {
      season: '2011-2012', 
      team: 'Chelsea', 
      country: 'England'
    },
  {
      season: '2012-2013', 
      team: 'Bayern Munich', 
      country: 'Germany'
    },
  {
      season: '2013-2014', 
      team: 'Real Madrid', 
      country: 'Spain'
    },
  {
      season: '2014-2015', 
      team: 'Barcelona', 
      country: 'Spain'},
  {
      season: '2015-2016', 
      team: 'Real Madrid', 
      country: 'Spain'},
  {
      season: '2016-2017', 
      team: 'Real Madrid', 
      country: 'Spain'
    },
];
// var country = 'Spain'  // should return 8
// var country = 'Portugal'  // should return 1
// var country = 'Russia'  // should return 0

//loop through object to get only country values
for ( var i = 0; i < winnerList.length; i++) {
    var countryList = winnerList[i];
    console.log(countryList.country);
    var countries = countryList.country;
}
// make countries an array? is it already an array?

// once in an array, loop through countries 

function countInArray(array, whichCountry) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === whichCountry) {
            count++;
        }
    }
    return count;
}

console.log(countInArray(countries, "Spain")); 
console.log(countInArray(countries, "Portugal")); 
console.log(countInArray(countries, "Russia")); 

function printToDom(stringToPrint, divId){
    // take string and innerHTML to the divID
    var getId = document.getElementById(divId);
    getId.innerHTML += stringToPrint;
 }

//  printToDom(stringToPrint, challenge-2);

// if (Spain) {
    // add each Spain together

    // if (Portugal) {
    // add each Portugal together

        // if (Russia) {
        // add each Russia together


//---------------------------------------------------
// Challenge #3: Arithmetic
// Given an object containing two numbers and an arithmetic operator, return the appropriate math result.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:

// var test1 = {a: 5, b:2, operator: "add"};  //7
// var test1 = {a: 5, b:2, operator: "subtract"}; //3
// var test1 = {a: 5, b:2, operator: "multiply"}; //10
// var test1 = {a: 5, b:2, operator: "divide"}; //2.5

var test1 = {
    a: 5, 
    b:2, 
    operator: "add"
};  //7

var test1 = {
    a: 5, 
    b:2, 
    operator: "subtract"
}; //3

var test1 = {
    a: 5, 
    b:2, 
    operator: "multiply"
}; //10

var test1 = {
    a: 5, 
    b:2, 
    operator: "divide"
}; //2.5

// var sum = [];
// console.log(test1.a);
// sum = test1.a + test1.b;
// console.log(sum);

function doOperation(a, b, operator) {
    // set the operator to take a value of +, -, *, or /
    // we want to be able to insert it
    // is it possible to assign a comparision op a variable?
    // are a, b, operator in the right spots in the parameters?
    // var sum = a operator b; 
}

function printToDom(stringToPrint, divId){
    // take string and innerHTML to the divID
    var getId = document.getElementById(divId);
    getId.innerHTML += stringToPrint;
 }

 // or how about IF statements within a function?

 if (test1.operator === "add") {
     var solutionAdd = test1.a + test1.b;
        } else if (test1.operator === "subtract") {
            var solutionSubtract = test1.a - test1.b;
                } else if (test1.operator === "multiply") {
                    var solutionMultiply = test1.a * test1.b;
                        } else if (test1.operator === "divide") {
                            var solutionDivide = test1.a / test1.b;
                                }
console.log(solutionAdd); // undefined 
console.log(solutionSubtract); // undefined 
console.log(solutionMultiply); // undefined 
console.log(solutionDivide); // 2.5
 
//---------------------------------------------------
// 

//---------------------------------------------------
// Challenge #4: Ziiiiip!
// Let's implement the zipObject function that takes and array of names and an array of ages and smashes them into one object.

// Example:

// var names = ['fred', 'barney'];
// var ages = [30,40];
// //Output:  { 'fred': 30, 'barney': 40 }

//---------------------------------------------------
// Challenge #5: Strive Matching
// The company Strive is looking for a new developer. Given a candidates minSalary and a jobs maxSalary determine if the company can affort the candidate. The Company will only accept candidates that have a minSalary that is at least 10% less than the jobs maxSalary. If the candidate matches display true otherwise display false.

// Examples:

// var candidate1 = {
//   minSalary: 120000
// };
// let job1 = {
//   maxSalary: 140000
// }
// //output is true.  this job can hire any minSalary less than $126,000


// var candidate1 = {
//   minSalary: 950000
// };
// let job1 = {
//   maxSalary: 100000
// }
//output is false.  this job can hire any minSalary less than $90,000







            
   

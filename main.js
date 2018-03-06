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
            // return scoreSum; can't do this. hmm.
        }
    }

    // var scores = scoresSum.sort();
    // console.log(scores); //doesn't work




            
   

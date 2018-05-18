var Word = require("./Word");
var inquirer = require("inquirer");

var randomWord = ["apples", "bananas", "coconuts"]
var randomNum = Math.floor(Math.random() * randomWord.length);
console.log(randomNum)
var myWord = new Word(randomWord[randomNum]);


function checkRound() {

    console.log("");
    console.log("");

    // If the user has less than 0 health.... then the user lost.
    if (myWord.isAllCorrect) {

        console.log("###############################################");
        console.log("");
        console.log("Winner Winner");
        console.log("");
        console.log("###############################################");

        // Exit the game
        process.exit();
    } else playRound();


}


// This function holds the game logic
function playRound() {


    console.log(myWord.toString());

    // We create a list prompt. Specifying that the user must pick a random number between 1 and 5.
    inquirer.prompt([
        {
            type: "input",
            name: "letter",
            message: "Guess a letter???"
        }

    ]).then(function (guess) {

        console.log(guess.letter)

        if (myWord.isCorrect()) {
            console.log(myWord.toString());
            checkRound();
        } else {
            console.log("Try Again")
            checkRound();
        }
    });
}

// Starts the game!
playRound();

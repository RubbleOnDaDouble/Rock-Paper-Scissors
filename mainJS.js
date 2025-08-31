//Global variable for storing computer and player score
let compScore = 0;
let playerScore = 0;


//function to generate the computer choice in console ONLY!
function compRandomChoice() {
    
    //variable for storing random number
    let randomNum = null;

    //variable for storing the generated output
    let compChoice = null;

    //generate a random number then round off to 2 decimal places
    randomNum = Math.random().toFixed(2);

    //if else statement to evaluate the random number
    //if the randomized number is less than 0.33 store Rock to the compChoice variable
    if (randomNum < 0.33) {
        compChoice = "rock";
    //else if the randomized number is less or equal to 0.66 AND greater than or equal to 0.34 store Paper
    } else if (randomNum <= 0.66 && randomNum >= 0.34) {
        compChoice = "paper";
    //else if the randomized number is less or equal to 1 AND greater than or equal to 0.67 store Scissors
    } else if (randomNum <= 1 && randomNum >= 0.67) {
        compChoice = "scissors";
    //else if the computer algorithm failed the computer went BONKERZZ
    } else {
        compChoice = "The computer went Meeeehhh!"
    }
    return compChoice;
}

//function to get human choice
function getHumanChoice() {
    let input = prompt("Pick your choice! (Rock-Paper-Scissors");
    return input;
}

//function to play 1 round
function playRound(hChoice,cChoice) {

    //convert parameters to lowercase to be case insensitive
    hChoice = hChoice.toLowerCase();
    cChoice = cChoice.toLowerCase();

    //variable to store results
    let result = null;
    
    //switch statement to to evaluate human choice
    switch (hChoice) {
        case "rock":
            //switch statement to compare comp choice to human choice
            switch (cChoice) {
                case "rock":
                    result = "It's a tie!";
                    break;
                case "paper":
                    result = "You Lose! paper beats rock!";
                    compScore++;
                    break;
                case "scissors":
                    result = "You Win! rock beats scissors!";
                    playerScore++;
                    break;
            }
            break;
        case "paper":
            //switch statement to compare comp choice to human choice
            switch (cChoice) {
                case "rock":
                    result = "You Win! paper beats rock";
                    playerScore++;
                    break;
                case "paper":
                    result = "It's a tie!";
                    break;
                case "scissors":
                    result = "You Lose! scissors beats paper!";
                    compScore++;
                    break;
            }
            break;
        case "scissors":
            //switch statement to compare comp choice to human choice
            switch (cChoice) {
                case "rock":
                    result = "You Lose! rock beats scissors";
                    compScore++;
                    break;
                case "paper":
                    result = "You Win! scissors beats rock";
                    playerScore++;
                    break;
                case "scissors":
                    result = "It's a tie!"
                    break;
            }
            break;
        default:
            result = "Enter a valid choice between rock-paper-scissors";
            break;
    }

    return console.log(result);
}

//console.log(compRandomChoice());
//console.log(getHumanChoice())
//playRound("PapEr","RocK");
//console.log(compScore + " " + playerScore);

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
        compChoice = "Rock";
    //else if the randomized number is less or equal to 0.66 AND greater than or equal to 0.34 store Paper
    } else if (randomNum <= 0.66 && randomNum >= 0.34) {
        compChoice = "Paper";
    //else if the randomized number is less or equal to 1 AND greater than or equal to 0.67 store Scissors
    } else if (randomNum <= 1 && randomNum >= 0.67) {
        compChoice = "Scissors";
    //else if the computer algorithm failed the computer went BONKERZZ
    } else {
        compChoice = "The computer went Meeeehhh!"
    }
    return compChoice;
}

console.log(compRandomChoice());
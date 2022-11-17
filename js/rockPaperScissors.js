let computerValue;

let playerValue;

let result;

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;

    if (number === 1) {
        return "rock";
    }else if (number === 2) {
        return "paper";
    }else {
        return "scissor";
    }

}

function round(playerSelection, computerChoice) {
    if (playerSelection == "ROCK" && computerChoice == "PAPER") {
        return "You lost";
    } else if  (playerSelection == "ROCK" && computerChoice == "SCISSOR"){
        return "You won";
    } else if  (playerSelection == computerChoice){
        return "Tied";
    }
    if(playerSelection == "SCISSOR" && computerChoice == "ROCK") {
        return "You lost";
    } else if  (playerSelection == "SCISSOR" && computerChoice == "PAPER"){
        return "You won";
    } else if  (playerSelection == computerChoice){
        return "Tied";
    }
    if(playerSelection == "PAPER" && computerChoice == "SCISSOR") {
        return "You lost";
    } else if  (playerSelection == "PAPER" && computerChoice == "ROCK"){
        return "You won";
    } else if  (playerSelection == computerChoice){
        return "Tied";
    }
}

function game(){
    for(let i = 0; i < 5; i++) {
        playerValue = prompt("Type your choice: ").toUpperCase();
        computerValue = getComputerChoice().toUpperCase();
        result = round(playerValue,computerValue);
        console.log(result);
    }
}

game();



//console.log(`Computer value is: ${computerValue}`);
//console.log(`Player value is: ${playerValue}`);


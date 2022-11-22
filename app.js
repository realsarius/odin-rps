const rps = ["Rock", "Paper", "Scissors"];
getComputerChoice = () => {
    return rps[Math.floor(Math.random() * rps.length)];
}

playRound = (playerSelection, computerSelection = getComputerChoice()) => {
    if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") {
        console.log("You Lose! Paper beats Rock");
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") {
        console.log("You Win! Rock beats Scissors");
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") {
        console.log("You Win! Paper beats Rock");
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") {
        console.log("You Lose! Scissors beats Paper");
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {
        console.log("You Lose! Rock beats Scissors");
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {
        console.log("You Win! Scissors beats Paper");
    } else {
        console.log(`Draw ${playerSelection} versus ${computerSelection}`);
    }
}

game = () => {
    for (let i = 0; i < 5; i++) {
        playRound(prompt("Enter input"));
    }

}

game();
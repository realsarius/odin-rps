const rps = ["Rock", "Paper", "Scissors"];
getComputerChoice = () => {
    return rps[Math.floor(Math.random() * rps.length)];
}

let playerScore = 0;
let computerScore = 0;

playRound = (playerSelection, computerSelection = getComputerChoice()) => {
    if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") {
        resultsDiv.textContent = "You Lose! Paper beats Rock";
        computerScore++;
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") {
        resultsDiv.textContent = "You Win! Rock beats Scissors";
        playerScore++;
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") {
        resultsDiv.textContent = "You Win! Paper beats Rock";
        playerScore++;
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") {
        resultsDiv.textContent = "You Lose! Scissors beats Paper";
        computerScore++;
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {
        resultsDiv.textContent = "You Lose! Rock beats Scissors";
        computerScore++;
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {
        resultsDiv.textContent = "You Win! Scissors beats Paper";
        playerScore++;
    } else {
        resultsDiv.textContent = `Draw! ${playerSelection} versus ${computerSelection}`;
    }
    score.textContent = `Player ${playerScore} | ${computerScore} Computer`
    if (playerScore === 5) {
        resultsDiv.style.textAlign = "center";
        resultsDiv.textContent = "PLAYER WINS!"
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
    }
    if (computerScore === 5) {
        resultsDiv.style.textAlign = "center";
        resultsDiv.textContent = "COMPUTER WINS!"
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
    }
}

const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const body = document.querySelector("body");

btnRock.addEventListener('click', () => {
    playRound("Rock", getComputerChoice());
});
btnPaper.addEventListener('click', () => {
    playRound("Paper", getComputerChoice());
});
btnScissors.addEventListener('click', () => {
    playRound("Scissors", getComputerChoice());
});

const resultsDiv = document.createElement("div");
const score = document.createElement("h2");
score.style.fontWeight = "bold";
body.appendChild(resultsDiv);
body.prepend(score);
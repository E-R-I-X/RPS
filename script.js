const playerChoiceDisplay = document.getElementById("playerChoice");
const computerChoiceDisplay = document.getElementById("computerChoice");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const resetBtn = document.getElementById("resetBtn");
const choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;
const WINNING_SCORE = 10;

function playGame(playerChoice) {
  // Ignore clicks if game is already over
  if (playerScore >= WINNING_SCORE || computerScore >= WINNING_SCORE) return;

  let result = "";
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  if (playerChoice === computerChoice) {
    result = "IT'S A TIE";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "YOU WIN" : "YOU LOSE";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "YOU WIN" : "YOU LOSE";
        break;
      case "paper":
        result = computerChoice === "rock" ? "YOU WIN" : "YOU LOSE";
        break;
    }
  }

  if (result === "YOU WIN") {
    playerScore++;
  } else if (result === "YOU LOSE") {
    computerScore++;
  }

  playerChoiceDisplay.textContent = `Player: ${playerChoice}`;
  computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;

  // Check for game winner
  if (playerScore === WINNING_SCORE) {
    resultDisplay.textContent = "🏆 YOU WIN THE GAME!";
    resetBtn.style.display = "block";
  } else if (computerScore === WINNING_SCORE) {
    resultDisplay.textContent = "💀 COMPUTER WINS THE GAME!";
    resetBtn.style.display = "block";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = 0;
  computerScoreDisplay.textContent = 0;
  playerChoiceDisplay.textContent = "";
  computerChoiceDisplay.textContent = "";
  resultDisplay.textContent = "Make your move!";
  resetBtn.style.display = "none";
}

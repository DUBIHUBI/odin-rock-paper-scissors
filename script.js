let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      choice = 'rock';
      break;
    case 1:
      choice = 'paper';
      break;
    case 2:
      choice = 'scissors';
      break;
    default:
  }
  return choice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let winnerMessage;
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    winnerMessage = `You Win! ${playerSelection} beats ${computerSelection}.`;
  } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissors' && playerSelection === 'paper')
  ) {
    computerScore++;
    winnerMessage = `You Lose! ${computerSelection} beats ${playerSelection}.`;
  } else {
    winnerMessage = `It's a tie! You both chose ${playerSelection}.`;
  }
  return winnerMessage;
}

// function game() {
//   playerScore = 0;
//   computerScore = 0;
//   let gameMessage;
//   // for (let i = 0; i < 5; i++) {
//   // console.log(i);
//   // console.log(`Round ${i + 1} out of 5!`)
//   playerSelection = prompt('Please choose from: rock, paper, scissors');
//   console.log(playRound(playerSelection, getComputerChoice()));
//   // }

//   if (playerScore > computerScore) {
//     gameMessage = `Congratulations! You Won ${playerScore} - ${computerScore}.`;
//   } else if (computerScore > playerScore) {
//     gameMessage = `You Lost ${playerScore} - ${computerScore}.`;
//   } else {
//     gameMessage = `You Drew ${playerScore} - ${computerScore}.`;
//   }
//   console.log(gameMessage);
// }

const buttons = document.querySelectorAll('button');
const gameLog = document.querySelector('.game-log');
const result = document.querySelector('.result');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const endGameDisplay = document.querySelector('.end-game-message');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    result.textContent = playRound(button.className, getComputerChoice());
    playerScoreDisplay.textContent = `Your score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer score: ${computerScore}`;

    if (isGameOver()) gameOver();
    // console.log(gameLog);
  });
});

function gameOverMessage() {
  let gameMessage;
  if (playerScore > computerScore) {
    gameMessage = `Congratulations! You Won ${playerScore} - ${computerScore}`;
  } else {
    gameMessage = `You Lost ${playerScore} - ${computerScore}`;
  }
  return gameMessage;
}
function gameOver() {
  endGameDisplay.textContent = gameOverMessage();
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

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

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const result = document.createElement('div');
    result.classList.add('result');
    result.textContent = playRound(e.target.className, getComputerChoice());
    gameLog.appendChild(result);

    // console.log(gameLog);
  });
});

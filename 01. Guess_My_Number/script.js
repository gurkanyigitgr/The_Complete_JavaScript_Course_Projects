'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    displayMessage('🛑 No Number !');
    // When Player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number !');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is TOO HIGH
  } else if (guess >= secretNumber + 4) {
    if (score > 1) {
      displayMessage('📈 Too High !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🚩 You Lose The Game :( ');
      score--;
      document.querySelector('.score').textContent = score;
    }
    // When guess is HIGH
  } else if (secretNumber < guess && guess < secretNumber + 4) {
    if (score > 1) {
      displayMessage('📈 High !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🚩 You Lose The Game :( ');
      score--;
      document.querySelector('.score').textContent = score;
    }

    // When guess is TOO LOW
  } else if (guess <= secretNumber - 4) {
    if (score > 1) {
      displayMessage('📉 Too Low !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🚩 You Lose The Game :( ');
      score--;
      document.querySelector('.score').textContent = score;
    }

    // When guess is LOW
  } else if (guess < secretNumber && guess > secretNumber - 4) {
    if (score > 1) {
      displayMessage('📉 Low !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🚩 You Lose The Game :( ');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

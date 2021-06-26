'use strict';

var secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('our secret number is: ' + secretNumber);

// var score = Number(document.querySelector('.score').textContent);
// var highScore = Number(document.querySelector('.highscore').textContent);
// // console.log('The Guessed Number:' + document.querySelector('.guess').value);

// function checkNumber() {
//   const enteredNumber = Number(document.querySelector('.guess').value);
//   console.log('The Guessed Number:' + document.querySelector('.guess').value);
//   if (enteredNumber === secretNumber) {
//     document.querySelector('.message').textContent = '🎉You guessed it right!';
//     score += 10;
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.number').textContent = secretNumber;
//     // setTimeout(document.querySelector('.number').textContent, 1000) = '?';
//     setTimeout(() => {
//       document.querySelector('.number').textContent = '?';
//     }, 1000);
//     if (highScore < score) highScore = score;
//     document.querySelector('.highscore').textContent = highScore;
//   } else if (enteredNumber < secretNumber || enteredNumber > secretNumber) {
//     score -= 5;
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.highscore').textContent = highScore;
//     if (enteredNumber < secretNumber)
//       document.querySelector('.message').textContent =
//         'Your guessed number is low';
//     if (enteredNumber > secretNumber)
//       document.querySelector('.message').textContent =
//         'Your guessed number is high';
//     document.querySelector('.number').textContent = '?';
//   }
// }

// function refreshAllAgain() {
//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.score').textContent = 0;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.highscore').textContent = highScore;
//   score = 0;
// }

var score = 0;
var highScore = 0;
var chances = Number(document.querySelector('.chances').textContent);
document.querySelector('.check').addEventListener('click', function () {
  let success = 0;
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent =
      'You have to enter a number dude!';
  } else if (guess === secretNumber) {
    document.body.style.backgroundColor = '#00D100';
    document.querySelector('.emoji').textContent = '😁';
    success = 1;
    document.querySelector('.message').textContent =
      'Kudos to you! You guessed it right  🎉';
    document.querySelector('.number').textContent = secretNumber;
    score += 10;
    document.querySelector('.score').textContent = score;
    if (highScore < score) highScore = score;
    document.querySelector('.highscore').textContent = highScore;
    setTimeout(() => {
      document.querySelector('.number').textContent = '?';
      document.querySelector('.message').textContent =
        'Go on, guess another number';
    }, 1000);
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log('our secret number is: ' + secretNumber);
  } else if (guess !== secretNumber) {
    document.querySelector('.number').textContent = '?';
    if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Too High!';
    } else {
      document.querySelector('.message').textContent = 'Too Low!';
    }
    chances--;
    if (score > 0) score -= 1;
    document.querySelector('.score').textContent = score;
    if (chances === 0) {
      document.querySelector('.message').textContent = 'You lost the game!';
      setTimeout(() => {
        alert('To try again, Click on the Retry Button');
      }, 500);
      document.querySelector('.check').disabled = true;
      document.querySelector('.check').style.backgroundColor = '#ccc';
    }
    if (highScore < score) highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
  document.querySelector('.chances').textContent = chances;
  if (chances === 2 && success != 1) {
    document.querySelector('.emoji').textContent = '😮';
  } else if (chances === 1 && success != 1) {
    document.querySelector('.emoji').textContent = '😥';
  } else if (chances === 0 && success != 1) {
    document.querySelector('.emoji').textContent = '😩';
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 0;
  chances = 10;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.emoji').textContent = '😊';
  document.querySelector('.chances').textContent = chances;
  document.body.style.backgroundColor = '#222';
  document.querySelector('.check').disabled = false;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('our secret number is: ' + secretNumber);
});

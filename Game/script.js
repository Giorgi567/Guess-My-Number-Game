'use strict';

var number = Math.round(Math.random() * 20) + 1;
console.log(number)
var scorePoints = 20;
const guesNumber = Number(document.querySelector('.number'));
const points = Number(document.querySelector('.score').textContent);

// Fair Warning: HTML and CSS files are not mine but entire JS file was fully written by me.


// This addeventListiner contains every possible outcome of the game. Losing, Winning, inputed number being too low or being too high or input of check button being completely empty.
const checkBtn = document.querySelector('.check').addEventListener('click', function () {
 
    const inputedNumber = Number(document.querySelector('.guess').value);
       
    if (!inputedNumber) {
      document.querySelector('.message').innerHTML = `No Number `;
    } else if (inputedNumber === number) {
      const bod = document.querySelector('body');
      bod.style.backgroundColor = 'green';
      Number((document.querySelector('.number').textContent = inputedNumber));

      document.querySelector('.message').innerHTML = `Correct Number ✅`;
       Number(document.querySelector('.highscore').innerHTML = scorePoints)
    
       document.querySelector('.check').disabled = true;
    } else if (inputedNumber > number) {
      document.querySelector('.message').innerHTML = `TOO HIGH  `;
      scorePoints--;
      document.querySelector('.score').textContent = scorePoints;

      if (scorePoints == 0) {
        document.querySelector('.message').innerHTML = `You Lost `;
        document.querySelector('.check').disabled = true;
      }
    } else if (inputedNumber < number) {
      document.querySelector('.message').innerHTML = `TOO LOW `;
      scorePoints--;
      document.querySelector('.score').textContent = scorePoints;

      if (scorePoints == 0) {
        document.querySelector('.message').innerHTML = `You Lost `;
        document.querySelector('.check').disabled = true;
      }
    }

    

    
  });

  
  // Reseting Game after pressing the button "Again!"
document.querySelector('.again').addEventListener(`click`, function () {
  number = Math.round(Math.random() * 20) + 1;
  
  document.querySelector('.check').disabled = false;
  Number((document.querySelector('.number').textContent = '?'));

  const bod = document.querySelector('body');

  document.querySelector('.message').innerHTML = `Start guessing...`;

  scorePoints = 20

  document.querySelector('.score').textContent = 20;

  bod.style.backgroundColor = '#222';
  
  const inputedNumber = Number((document.querySelector('.guess').value = ''));
});



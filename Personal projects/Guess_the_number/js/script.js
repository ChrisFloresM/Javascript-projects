const main_color = '#5e6e73';
const win_color = '#9acd32';

const secret_number_dom = document.querySelector('.main__guessed-number');
const message_dom = document.querySelector('.main__message');
const score_dom = document.querySelector('.main__score--score-number');
const high_score_dom = document.querySelector('.main__score--hscore-number');
const guessed_number_dom = document.querySelector('.main__user-number');
const body_style = document.querySelector('body').style;

let secret_number = Math.trunc(Math.random() * 100);
let guessed_number = 0;
let score = 20;
let highscore = 0;

function display_message(message) {
  message_dom.textContent = message;
}

function win_routine() {
  display_message('You win! :D');
  body_style.backgroundColor = win_color;
  secret_number_dom.textContent = secret_number;
  if (score > highscore) {
    highscore = score;
    high_score_dom.textContent = highscore;
  }
}

function attempt_routine() {
  guessed_number > secret_number ? display_message('Too high!') : display_message('Too low!');
}

document.querySelector('.main__check').addEventListener('click', function () {
  guessed_number = Number(guessed_number_dom.value);
  if (score > 1) {
    score--;
    score_dom.textContent = score;
    guessed_number === secret_number ? win_routine() : attempt_routine();
  } else {
    display_message('You lost :(');
  }
});

document.querySelector('.header__play-again').addEventListener('click', function () {
  message_dom.textContent = 'select a number between 1 and 100';
  body_style.backgroundColor = main_color;
  secret_number_dom.textContent = '?';
  guessed_number_dom.value = ' ';
  score = 20;
  score_dom.textContent = score;
  secret_number = Math.trunc(Math.random() * 100);
});

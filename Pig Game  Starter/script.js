'use strict';
alert('how it is ?');
//Selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score1 = document.querySelector('#score--1');
const score0 = document.querySelector('#score--0');
const dice1 = document.querySelector('.dice');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

let scores;
let cscore;
let activeplayer;
let playing;

const init = function () {
  scores = [0, 0];
  cscore = 0;
  activeplayer = 0;
  playing = true;

  score1.textContent = 0;
  score0.textContent = 0;
  current1.textContent = 0;
  current0.textContent = 0;

  dice1.classList.add('hidden');
  player1.classList.remove('player--winner');
  player0.classList.remove('player--winner');
  player1.classList.add('player--active');
  player0.classList.remove('player--active');
};
init();
const splayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  cscore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
//Rolling Dice Functionality
btnroll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    dice1.classList.remove('hidden');
    dice1.src = `dice-${dice}.png`;

    if (dice !== 1) {
      cscore += dice;
      document.getElementById(`current--${activeplayer}`).textContent = cscore;
      //document.getElementById(`current--${activeplayer}`).textContent = cscore;
    } else {
      splayer();
    }
  }
});
btnhold.addEventListener('click', function () {
  if (playing) {
    scores[activeplayer] += cscore;
    //scores[1] = scores[1] + cscore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];

    if (scores[activeplayer] >= 20) {
      playing = false;
      dice1.classList.add('hidden');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
    } else {
      splayer();
    }
  }
});
btnNew.addEventListener('click', init);

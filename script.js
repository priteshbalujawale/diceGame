"use strict";
const newBtn = document.getElementById("btn-new");
const rollBtn = document.getElementById("btn-roll");
const holdBtn = document.getElementById("btn-hold");
const dice = document.querySelector(".dice");
const score1 = document.getElementById("score-1");
const score0 = document.getElementById("score-0");
const current1 = document.getElementById("current-1");
const current0 = document.getElementById("current-0");
const player = document.querySelector(".player");
const player0 = document.querySelector(".player-0");
const player1 = document.querySelector(".player-1");

//

//Click new Button
newBtn.addEventListener("click", clickNewBtn);
function clickNewBtn() {
  score1.textContent = "0";
  score0.textContent = "0";
  dice.style.display = "none";
  current0.textContent = "0";
  current1.textContent = "0";
  scores = [0, 0];
  currentScore = 0;
  playing = true;
  document
    .querySelector(`.player-${activePlayer}`)
    .classList.remove("player--winner");

  document
    .querySelector(`.player-${activePlayer}`)
    .classList.remove("player-active");

  document.querySelector(".player-0").classList.add("player-active");
}

//ClickRoll Dice
//
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let playing = true;
document
  .querySelector(`.player-${activePlayer}`)
  .classList.add("player-active");

rollBtn.addEventListener("click", function () {
  // to display dice image
  if (playing) {
    dice.style.display = "block";
    //random dice number beetween 1 to 6
    const randomNum = Math.trunc(Math.random() * 6) + 1;
    console.log(randomNum);
    //to display random number as dice image
    dice.src = `dice-${randomNum}.png`;
    //if dice value =1 then swith to player 2
    if (randomNum !== 1) {
      // add number to score
      currentScore += randomNum;
      //to select element id dynamically
      document.getElementById(`current-${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch to next player

      switchPlayer();
      //to display the the score of another player
    }
  }
});

// Hold Button

holdBtn.addEventListener("click", function () {
  //add current score to active player's score
  if (playing) {
    scores[activePlayer] += currentScore;
    console.log(scores);
    document.getElementById(`score-${activePlayer}`).textContent =
      scores[activePlayer];
    //check if active player's score is >=100
    // scores[activePlayer]>=100 ?`Player ${activePlayer +1} Win The Game`:switchPlayer();
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.toggle("player--winner");
      document.querySelector(".player").classList.remove(`player-active`);
      //scores=0;
      dice.style.display = "none";
      popupMsg();
    }
    // Swith to next player
    else {
      switchPlayer();
    }
  }
});
const switchPlayer = function () {
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle("player-active");
  player0.classList.toggle("player-active");
  document.getElementById(`current-${activePlayer}`).textContent = currentScore;
};

//popup and overlay
const popupMsg = function () {
  document.querySelector(".overlay").classList.toggle("show");
  document.querySelector(".popup").classList.toggle("show");

  document.getElementById("pop-up-btn").addEventListener("click", function () {
    document.querySelector(".overlay").classList.add("show");
    document.querySelector(".popup").classList.add("show");
  });
  document.querySelector(".overlay").addEventListener("click", function () {
    document.querySelector(".overlay").classList.remove("show");
    document.querySelector(".popup").classList.remove("show");
  });
};

//Preloader
function preLoader() {
    console.log('inside preloader');
  document.getElementById('loader').style.display = "none";
};

// Sleep Delay Function
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let dice = [
  "./img/dice1.png",
  "./img/dice2.png",
  "./img/dice3.png",
  "./img/dice4.png",
  "./img/dice5.png",
  "./img/dice6.png",
];

const announce = document.getElementsByClassName("announcement")[0];

function getDiceNumber() {
  return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}

let player1Dice = getDiceNumber();
let player1Img = dice[player1Dice - 1];
let player2Dice = getDiceNumber();
let player2Img = dice[player2Dice - 1];

async function delayedGreeting() {
  document.querySelector(".player2Dice").classList.add("active");
  document.querySelector(".player1Dice").classList.add("active");
  await sleep(500);
  if (player1Dice > player2Dice) {
    announce.textContent = "Player 1 Wins!";
    document.querySelector(".player2Wins").classList.add("notVisible");
  } else if (player1Dice < player2Dice) {
    announce.textContent = "Player 2 Wins!";
    document.querySelector(".player1Wins").classList.add("notVisible");
  } else {
    announce.textContent = "It's a tie!";
    document.querySelector(".player1Wins").classList.add("notVisible");
    document.querySelector(".player2Wins").classList.add("notVisible");
  }
}

delayedGreeting();

document.getElementsByClassName("player1Dice")[0].src = player1Img;
document.getElementsByClassName("player2Dice")[0].src = player2Img;

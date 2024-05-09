let score = JSON.parse(localStorage.getItem(`score`)) || {
  wins: 0,
  losses: 0,
  ties: 0
};
function computerchoice() {
  let computerMove = '';
  let randomNum = `${Math.random()}`;
  if (randomNum > 0 && randomNum <= 1 / 3) {
    computerMove = `rock`;
  }
  else if (randomNum > 1 / 3 && randomNum <= 2 / 3) {
    computerMove = `paper`
  }
  else if (randomNum > 2 / 3 && randomNum < 1) {
    computerMove = `scissor`;
  }

  return computerMove;
}

function playerchoice(playermove) {
  let result = '';
  if (playermove === `rock`) {

    if (computerMove === `rock`) {
      result = `Tie`;
    }
    else if (computerMove === 'paper') {
      result = ` You Lose`;
    }
    else if (computerMove === `scissor`) {
      result = ` You Win`;

    }
  }


  else if (playermove === `paper`) {


    if (computerMove === `rock`) {
      result = ` You Win`;
    }
    else if (computerMove === 'paper') {
      result = `Tie`;
    }
    else if (computerMove === `scissor`) {
      result = ` You Lose`;
    }
  }
  else if (playermove === `scissor`) {


    if (computerMove === `rock`) {
      result = `You Lose`;
    }
    else if (computerMove === 'paper') {
      result = ` You Win`;

    }
    else if (computerMove === `scissor`) {
      result = `Tie`;
    }

  }
  if (result === ` You Win`) {
    score.wins += 1;
  }
  else if (result === ` You Lose`) {
    score.losses += 1;
  }
  else if (result === `Tie`) {
    score.ties += 1;
  }
  localStorage.setItem(`score`, JSON.stringify(score));
  updateScoreElement();
  document.querySelector(`.js-result`).innerHTML = ` ${result}`;
  document.querySelector(`.js-moves`).innerHTML =  `You <img src="icons/${playermove}-emoji.png" class="move-icons">
  <img src="icons/${computerMove}-emoji.png" class="move-icons"> computer`;

}
function updateScoreElement() {
  document.querySelector(`.js-score`).innerHTML = `Wins: ${score.wins},Losses:${score.losses},Ties: ${score.ties}`;
}
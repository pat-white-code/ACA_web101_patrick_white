console.log ('Hello World!');

//SET GAME BOARD
const box1 = document.querySelector('.box-1');
const box2 = document.querySelector('.box-2');
const box3 = document.querySelector('.box-3');
const box4 = document.querySelector('.box-4');
const box5 = document.querySelector('.box-5');
const box6 = document.querySelector('.box-6');
const box7 = document.querySelector('.box-7');
const box8 = document.querySelector('.box-8');
const box9 = document.querySelector('.box-9');

const playAgain = document.querySelector('.play-again');

function reset() {
  console.log('reset here')
  $('.box').css("backgroundColor", "transparent");
  $('.box').empty();
  $('.box').removeClass('X');
  $('.box').removeClass('O');
  $('.box').setAttribute("onclick", "addGamePiece(this)");
}

let playerOneScore = 0;
let playerTwoScore = 0;

scoreDisplay1 = document.querySelector('.player-1-score');
scoreDisplay2 = document.querySelector('.player-2-score');

scoreDisplay1.innerHTML = playerOneScore;
scoreDisplay2.innerHTML = playerTwoScore;

function updateScore() {
  scoreDisplay1.innerHTML = playerOneScore;
  scoreDisplay2.innerHTML = playerTwoScore;
}


let turn = 0;
let gamePiece;


// find a winner via 3 in a row
function checkForWinner() {
  if(box1.classList.contains(gamePiece) && box2.classList.contains(gamePiece) && box3.classList.contains(gamePiece)) {
    console.log('YOU WIN!')
    finishGame(gamePiece);
  } else if ((box1.classList.contains(gamePiece) && box4.classList.contains(gamePiece) && box7.classList.contains(gamePiece))) {
    console.log('YOU WIN!')
    finishGame(gamePiece);
  } else if (box1.classList.contains(gamePiece) && box5.classList.contains(gamePiece) && box9.classList.contains(gamePiece)) {
    console.log('YOU WIN!')
    finishGame(gamePiece);
    // BOX 1 WIN SCENARIOS
  } else if (box2.classList.contains(gamePiece) && box5.classList.contains(gamePiece) && box8.classList.contains(gamePiece)) {
    console.log('YOU WIN!')
    finishGame(gamePiece);
    //BOX 2 WIN SCENARIOS
  } else if (box1.classList.contains(gamePiece) && box5.classList.contains(gamePiece) && box9.classList.contains(gamePiece)) {
    console.log('YOU WIN!')
    finishGame(gamePiece);
  } else if (box3.classList.contains(gamePiece) && box6.classList.contains(gamePiece) && box9.classList.contains(gamePiece)) {
    console.log('YOU WIN!')
    finishGame(gamePiece);
  } else if (box3.classList.contains(gamePiece) && box5.classList.contains(gamePiece) && box7.classList.contains(gamePiece)) {
    console.log('YOU WIN!')
    finishGame(gamePiece);
    //BOX 3 WIN SCENARIOS

    //BOX 4 WIN SCENARIOS
  } else if (box4.classList.contains(gamePiece) && box5.classList.contains(gamePiece) && box6.classList.contains(gamePiece)) {
    console.log('YOU WIN!')
    finishGame(gamePiece);
    //BOX 5 WIN SCENARIOS
  } else if (box7.classList.contains(gamePiece) && box8.classList.contains(gamePiece) && box9.classList.contains(gamePiece)) {
    console.log('YOU WIN!')
    finishGame(gamePiece);
  } else {
    turn++;
    changePlayer()
    return;
  }
}

function finishGame(gamePiece) {
  if (gamePiece === 'X') {
    console.log('Player 1 Wins!')
    document.querySelector('.player-1').style.fontSize="100px";
    playerOneScore++;
    updateScore();
  } else {
    console.log('player 2 Wins!');
    document.querySelector('.player-2').style.fontSize="100px";
    playerTwoScore++;
    updateScore();
  }
}


//LOGIC IF EVEN
function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}

function changePlayer() {
  if(isEven(turn)) {
    document.querySelector('.player-1').style.color="white";
    document.querySelector('.player-2').style.color="black";
  } else {
    document.querySelector('.player-1').style.color="black";
    document.querySelector('.player-2').style.color="white";
  }
}


//find location of click and add x or o
function addGamePiece(selectedElement) {
  if(isEven(turn)) {
    gamePiece = 'X'
  } else {
    gamePiece = 'O';
  }

  console.log(selectedElement);
  // selectedElement.innerHTML = 'x';
  let newElement = document.createElement('p');
  newElement.innerHTML = gamePiece;
  selectedElement.appendChild(newElement);
  selectedElement.removeAttribute("onclick");
  selectedElement.className += ' ' + gamePiece;
  checkForWinner();
  // turn++;
  // changePlayer();

}
//determine player1 or player2

//keep score

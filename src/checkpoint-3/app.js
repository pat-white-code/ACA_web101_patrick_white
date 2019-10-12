//make sure js is connected...
console.log('hello!');

const positionArray = ['position-1', 'position-2', 'position-3', 'position-4', 'position-5', 'position-6', 'position-7', 'position-8', 'position-9', 'position-10', 'position-11', 'position-12', 'position-13'];

const colorsArray = ['coral', 'dark-olive-green', 'dim-grey'];

//Creates function to pick random item from array
function pickRandom(array) {
  arrayLength = array.length
  randomIndex = Math.floor(Math.random()*arrayLength);
  return array[randomIndex];
}

//declare variables
let clutterBox = $('.clutter-box');
let gameDisplay = $('.game-display');
let healthDisplay = $('#health-display');
let scoreDisplay = $('#score-display');

//Set game starting stats

// console.log('user score: ', userScore)

// console.log(userScore.html());

//User starts out with 5 Health
let userHealth = 5

//sets userHealth in display
healthDisplay.html(userHealth);

//function for user loses one health
function loseHealth(){
  userHealth--;
  console.log('userHealth : ', userHealth);
  updateHealthDisplay();
}

function updateHealthDisplay(){
  healthDisplay.html(userHealth);
}

//User starts out with 0 points
let userScore = 0;

//User starts game with 0 points
scoreDisplay.html(userScore);

//Function for updating score 
function updateScore() {
  userScore++;
  console.log(userScore);
  updateScoreDisplay();
}

//update score display 
function updateScoreDisplay() {
  scoreDisplay.html(userScore);
}

//testing JQUERY
clutterBox.css('backgroundColor', 'yellow');


//CREATES TIMED CLUTTER-DROPS
function clutterMaker()
{
  x = 10;  // Sets repeated timer for clutter-maker in Seconds

  // gameDisplay.empty(); // Clears game display if needed.

  //Sets random color/clutter-type
  let randomColor = pickRandom(colorsArray);

  //sets random position
  let randomPosition = pickRandom(positionArray);

  //creates element
  let newBox = $("<div class='clutter-box'></div>");

  //sets classes from random color/position
  newBox.addClass(randomPosition);
  newBox.addClass(randomColor);
  newBox.addClass('falling');

  //When user clicks on clutter, destroy clutter
  newBox.on('click', ()=> {
    newBox.removeAttr('animationend');
    newBox.remove();
    updateScore();
  })

  //Drops the new clutter-box

// FIXME: 'animationend' event happens when animation starts. why???
  gameDisplay.append(newBox);
  newBox.on('animationend', loseHealth());
  newBox.on('animationend', ()=>{
    newBox.remove();
  })

  //restart this function every 3 seconds
  setTimeout(clutterMaker, x*1000);
}


//clutterMaker(); // execute function

//make sure js is connected...
console.log('hello!');

//declare variables
let clutterBox = $('.clutter-box');
let gameDisplay = $('.game-display');
let gameStart = $('#game-start');
let healthDisplay = $('#health-display');
let scoreSection = $('#score-section');
let scoreDisplay = $('#score-display');
let moneyDisplay = $('#money-display');
let moneySection = $('#money-section');
let yardsale = $('#yardsale');
let yardsaleAllowed = $('#yardsale-allower');
let healthSection = $('#game-stat-section');
let badSound = $('#bad')[0];
let chaChingSound = $('#cha-ching')[0];
let wooshPunchSound = $('#woosh-punch')[0];
let gameStartWoosh = $('#game-start-woosh')[0];
let gameMusic = $('#game-music')[0];
let newGame = null; //So game does not start immediately


//Arrays of classes for use with pickRandom() and makeClutter(). styled in styles.css
const positionArray = ['position-1', 'position-2', 'position-3', 'position-4', 'position-5', 'position-6', 'position-7', 'position-8', 'position-9', 'position-10', 'position-11', 'position-12', 'position-13'];

const colorsArray = ['coral', 'dark-olive-green', 'dim-grey'];

//Creates function to pick random item from array
function pickRandom(array) {
  arrayLength = array.length
  //Returns random number 0-.99 * length of items in array, floored to whole integer. array length=1 returns 0.
  randomIndex = Math.floor(Math.random()*arrayLength);
  //For example: colorsArry[1]
  return array[randomIndex];
}

//Creates function for animating elements
function animateElement($element, animationName, animationSpeed) {
  $element.addClass('animated' + ' ' + animationName + ' ' + animationSpeed);
  $element.on('animationend', ()=> {
    $element.removeClass('animated' + ' ' + animationName + ' ' + animationSpeed)}
    );
};

//playSound function for addPoint, loseHealth and hostYardSale
function playSound(sound){
  sound.play();
}

//Set game starting stats and displays
//User starts out with 5 Health
let userHealth = 5

//User starts out with 0 points
let userScore = 0;

//User starts out with $0
let userMoney = 0;

//function for updating health display
function updateHealthDisplay(){
  healthDisplay.html(userHealth);
}

//function for updating money display:
function updateMoneyDisplay(){
  moneyDisplay.html('$' + userMoney);
}

//update score display 
function updateScoreDisplay() {
  scoreDisplay.html(userScore);
}

//Initializes Score Display
updateScoreDisplay();

//Initializes money display
updateMoneyDisplay();

//Initializes user health display
updateHealthDisplay();


//function for hosting yardsale
function hostYardsale() {
  //Checks if user has the points
  if(userScore >= 5 ) {
    //for testing purposes...
  console.log('hosting yard sale');

  //Yard sale loses 1 clutter
  userScore = userScore - 5;

  //To update score:
  updateScoreDisplay();

  //Player gains 1 money
  userMoney = userMoney + 10;

  //Updates money display:
  updateMoneyDisplay();

  //animate money section
  animateElement(moneySection, 'tada', 'fast');

  //soundEffect
  playSound(chaChingSound);

  //See if user still has money for the next yardsale?
  checkIfYardsale();
  } else {
    //If player does not have money for yard sale, do nothing.
    return;
  } 
}

//function for checking if yardsale is possible.
function checkIfYardsale() {
  //if user has more than 5 points, allow yard sale
  if(userScore >= 5) {
    //Style button to be clickable
    yardsale.addClass('active')
  } else {
    // remove properties previously set by allow yard sale
    yardsale.removeClass('active');
  }
}

//function for user loses one health
function loseHealth(){
  animateElement(healthSection, 'shake', 'faster');
  userHealth--;
  console.log('userHealth : ', userHealth); //TESTING PURPOSES
  updateHealthDisplay();
  playSound(badSound);
  checkGameOver();
}

function gameOver() {
  gameMusic.pause(); //Stop game Music
  gameDisplay.addClass('inactive'); //Makes gameDisplay dark
  gameDisplay.html('<div id="game-start" class="animated bounceInDown" onclick="startGame()"><h1>Game Over</h1></div>');// Animates in gameOver box similar to start game box. Don't click on this box.
}

function checkGameOver() {
  if (userHealth < 1) {
    console.log('LOSE!') //TESTING
    gameDisplay.empty(); //Clears game of clutters
    clearInterval(newGame); //Stops clutterMaker
    gameOver();
  };
}

//Function for updating score 
function addPoint() {
  userScore++;
  console.log(userScore); //for testing
  updateScoreDisplay();
  checkIfYardsale();
  animateElement(scoreSection, 'bounce', 'faster');
  playSound(wooshPunchSound);
}

//CREATES TIMED CLUTTER-DROPS
function startGame() {
  //Removes start box from display. This could be refactored with animateElement function.
  gameStart.addClass('animated bounceOutLeft');
  gameStart.on('animationend', ()=>{  
    gameDisplay.removeClass('inactive');
  })

  //Play Sound effect
  playSound(gameStartWoosh);

  // Starts a new game.
  newGame = setInterval(clutterMaker, 3000);

  //Plays game music
  playSound(gameMusic);
}

function clutterMaker() {
  //Sets random color.
  let randomColor = pickRandom(colorsArray);

  //sets random position.
  let randomPosition = pickRandom(positionArray);

  //creates element
  let newBox = $("<div class='clutter-box'></div>");

  //sets classes from random color/position
  newBox.addClass(randomPosition);
  newBox.addClass(randomColor);
  newBox.addClass('falling');

  //When user clicks on clutter, destroy clutter
  newBox.on('click', ()=> {
    newBox.off('animationend');
    newBox.remove();
    addPoint();
  })
  //Drops the new clutter-box
  gameDisplay.append(newBox);
  newBox.on('animationend', ()=>{
    //If the box finishes animation, lose 1 health and remove the box
    loseHealth();
    newBox.remove();
  })
}

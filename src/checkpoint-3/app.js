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

//Set game starting stats

//User starts out with 5 Healther
let userHealth = 5;

//User starts game with 0 points
let userScore = 0;

//testing JQUERY
clutterBox.css('backgroundColor', 'yellow');


//CREATES TIMED CLUTTER-DROPS
function refreshData()
{
  x = 3;  // 5 Seconds

  gameDisplay.empty();

  //Sets random color/clutter-type
  let randomColor = pickRandom(colorsArray);

  //sets random position
  let randomPosition = pickRandom(positionArray);

  //creates element
  let newBox = $("<div class='clutter-box'></div>");

  //sets classes from random color/position
  newBox.addClass(randomPosition);
  newBox.addClass(randomColor);

  //When user clicks on clutter, destroy clutter
  newBox.on('click', ()=> {
    newBox.remove();
  })

  //Drops the new clutter-box
  gameDisplay.append(newBox);

  //restart this function every 3 seconds
  setTimeout(refreshData, x*1000);
}
refreshData(); // execute function
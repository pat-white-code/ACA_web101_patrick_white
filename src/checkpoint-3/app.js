//make sure js is connected...
console.log('hello!');

const positionArray = ['position-1', 'position-2', 'position-3', 'position-4', 'position-5', 'position-6', 'position-7', 'position-8', 'position-9', 'position-10', 'position-11', 'position-12', 'position-13'];

const colorsArray = ['coral', 'dark-olive-green', 'dim-grey'];


function pickRandom(array) {
  arrayLength = array.length
  randomIndex = Math.floor(Math.random()*arrayLength);
  return array[randomIndex];
}

console.log(pickRandom(positionArray));

//declare variables
let clutterBox = $('.clutter-box');
let gameDisplay = $('.game-display');

//testing JQUERY
clutterBox.css('backgroundColor', 'yellow');

//create a falling box every 3 seconds
const interval = setInterval(function() {
  let newBox = "<div class='clutter-box'></div>";
  gameDisplay.append(newBox);

}, 3000);
clearInterval(interval);

//clutter-box-generator:

gameDisplay.on('click', ()=>{

  //deletes previous block:
  gameDisplay.empty();

  //creates new clutter-box:
  let randomColor = pickRandom(colorsArray);
  let randomPosition = pickRandom(positionArray);
  let newBox = $("<div class='clutter-box'></div>");
  newBox.addClass(randomPosition);
  newBox.addClass(randomColor);
  gameDisplay.append(newBox);
})

clutterBox.on('click', ()=> {
  clutterBox.remove();
})

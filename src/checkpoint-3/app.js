//make sure js is connected...
console.log('hello!');

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
  let newBox = "<div class='clutter-box'></div>";
  gameDisplay.append(newBox);
})

clutterBox.on('click', ()=> {
  clutterBox.remove();
})

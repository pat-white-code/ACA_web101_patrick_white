//make sure js is connected...
console.log('hello!');

//declare variables
let clutterBox = $('.clutter-box');

//testing JQUERY
clutterBox.css('backgroundColor', 'yellow');


clutterBox.on('click', ()=> {
  clutterBox.remove();
})
console.log('app.js reporting!');

//target boxes as jquery objects:

let $square1 = $('#square-1');
let $square2 = $('#square-2');
let $square3 = $('#square-3');
let $square4 = $('#square-4');



//STEP 1 -- FIND / Download sound asset
// https://freesound.org/

//STEP 2 -- Create HTML ELEMENT

//STEP 3 -- select sound with JQUERY

let $pop = $('#pop')[0];

//STEP 4 -- add onclick property
$square1.on('click', ()=>{
  console.log('pop!')
  $pop.play();
})

//STEP 5 (optional) -- create playSound function
function playSound($sound) {
  console.log($sound.id);
  $sound.play();
}

$square2.on('click', ()=>{
  playSound($pop);
});

//
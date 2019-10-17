'use strict';

$(document).ready(function() {

  console.log('towers.js here...');

  let $block = null;

  let $dataRow = $('[data-row]');

  let $redRow = $('.red');

  //Makes the last child of a row draggable
  // $dataRow.children().last().draggable({
  //   drag : function() {
  //     $block = $(this);

  //   }
  // });

  // Makes the data-rows droppable


  $dataRow.droppable({
    // accept : function(ui) {
    //   if($(this).children().children().last()) {
    //     console.log('last child : ', $(this).children().last()[0]);
    //     return true;
    //   } else {return false};
    //   let newBlock = ui[0].clientHeight;
      // let existingBlock = $(this).children().last()[0].height();

      //Finds of existing block on row:
      // console.log('this children : ', $(this).children());
      // console.log('accept ui:', ui);
      // console.log('accept ui[0]', ui[0].clientHeight);
      // console.log('this children last', $(this).children().last()[0].height());
      
      // if (existingBlock > newBlock) {
      //   return true;
      // } else {
      //   return false;
      // }
    // },
    drop : function(event, ui){
      console.log($(this).children().last().height());
      console.log(ui.draggable[0].clientHeight);
      event.target.append(ui.draggable[0]);
      console.log(ui.draggable[0]);
    }});

  $('[data-row]').mouseenter(function() {
    $(this).children().last().draggable({
      cursor : "grabbing",
      opacity : 0.6,
      snap : true,
      snaptolerance : 30,
      revert : true,
      snapMode : 'outer',
    }
    );
  });

  
  // $('[data-row]').click(function() {
  //   if ($block) {
  //     $(this).append($block);
  //     $block = null;
  //   } else {
  //     $block = $(this).children().last().detach();
  //     console.log($block);
  //   }
  // })
});
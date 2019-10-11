
  function addItem() {
    let $input = $('input');
    console.log($input);
    let $inputVal = $input.val();
    console.log('inputVal:', $inputVal)
    let $list = $('.todo-list');
    let $listItem = $("<li>Hi!</li>");
    $listItem.text($inputVal);
    $list.append($listItem);
  }



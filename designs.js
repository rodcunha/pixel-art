// Select color input
// Select size input
  // Start jQuery DOM Ready function


$('#sizePicker').on('submit', function(event) {
  makeGrid();
  event.preventDefault();
})
// When size is submitted by the user, call makeGrid()
  const gridTable =  $('#pixel_canvas');

function makeGrid() {
  let height = $('#input_height').val();   // variable declartion for the input Height
  let width = $('#input_width').val();    // variable declaration for the input width
  let board;
  board = height * width;
  console.log(board);

  $('#submit').click(function() {
    // console.log(width);
    // console.log(height);
  });

// Your code goes here!

}
makeGrid();


$(document).ready(function() {

}); // End of jQuery DOM Ready function

// Select color input
// Select size input
$(function() {  // Start jQuery DOM Ready function


let $height = $('#input_height').val();   // variable declartion for the input Height
let $width = $('#input_width').val();    // variable declaration for the input width
const $submit = $('#submit');
const $grid =  $('#pixel_canvas');

$($submit).on(click, function() {
  console.log($width * $height);
});
// When size is submitted by the user, call makeGrid()

function makeGrid() {
  let board;
  board = height * width;
  console.log(board);
// Your code goes here!

}
makeGrid();


}); // End of jQuery DOM Ready function

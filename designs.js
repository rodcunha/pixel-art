  // Select color input
  // Select size input
  $(document).ready(function() {
  // $('#sizePicker').on('submit', function(event) {
  //   makeGrid();
  //
  // });
  // When size is submitted by the user, call makeGrid()
  const table =  $('#pixel_canvas');
  let height;   // variable declartion for the input Height
  let width;    // variable declaration for the input width
  let color;    // variable declaration for the color picker
  let board;    // variable declaration for the HTML element where the board will be drawn.

  function makeGrid() {
    $('#submit').click(function() {
        event.preventDefault();
        color = $('#colorPicker').val();
        console.log(color);                   // logs the selected color to the console
        height = $('#input_height').val();
        console.log(height);                  // logs the height of the board
        width = $('#input_width').val();
        console.log(width);                   // logs the width of the board
        $('#pixel_canvas tr').remove();       // removes all previous drawn rows so that the table doesn't keep adding
        for (var r = 0; r < height; r++ ) {   // external loop to create table rows
          $(table).append('<tr></tr>');
          for (var c = 0; c < width; c++) {   //internal loop which appends the table cells to the last created row
              $('tbody').children().last('tr').append('<td></td>');
            }
        }
    });  //end of submit function
    $('tr > td').on('click', function() {
        $(this).css({'background':color});
        console.log(this);
    });
  }    //  END of makeGrid();
makeGrid();
}); // End of jQuery DOM Ready function

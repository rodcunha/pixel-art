  // Select color input
  // Select size input
  $(document).ready(function() {
  // $('#sizePicker').on('submit', function(event) {
  //   makeGrid();
  //
  // });  // When size is submitted by the user, call makeGrid()
  const table =  $('#pixel_canvas');
  let height;   // variable declartion for the input Height
  let width;    // variable declaration for the input width
  let color;    // variable declaration for the color picker
  let board;    // variable declaration for the HTML element where the board will be drawn.

  function makeGrid() {
    $('#submit').click(function(event) {
      event.preventDefault();
        color = $('#colorPicker').val();

        $('#colorPicker').on('change', function() {
          color = $('#colorPicker').val();      // assigns the value of the color selector to the variable color
          console.log(color);                   // logs the selected color to the console
        });

        height = $('#input_height').val();     // assigns the value of the height input to the variable height
        console.log(height);                   // logs the height of the board

        width = $('#input_width').val();       // assigns the value of the Width input to the variable width
        console.log(width);                    // logs the width of the board

        $('#pixel_canvas tr').remove();         // removes all previous drawn rows so that the table doesn't keep adding
        for (var r = 0; r < height; r++ ) {     // external loop to create table rows
          $(table).append('<tr></tr>');
            for (var c = 0; c < width; c++) {   //internal loop which appends the table cells to the last created row
              $('tbody').children().last('tr').append('<td></td>');
            }                                  //end of cell loop
        }                                      // end of row loop
    });                                        //end of submit function
  }                                            //  END of makeGrid();
makeGrid();
  $(table).on('click', 'td', function() {
      $(this).css('background', color);
      console.log(this);
  });
});                                             // End of jQuery DOM Ready function

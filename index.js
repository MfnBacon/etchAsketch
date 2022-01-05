// Builds grid into "container" div
    function createGrid(newSize) {
        for (var rows = 0; rows < newSize; rows++) {
        for (var columns = 0; columns < newSize; columns++) {
        $("#container").append("<div class='grid'></div>");
    };};

// Fits newSize into 960px to maintain board size.
    $(".grid").width(960/newSize);
    $(".grid").height(960/newSize);
    };

// The response of "New Grid" Button. 
// Prompts User for newSize
// Wipes the current drawing.
    function freshGrid(){
        var z = prompt("How many boxes per side?");
        $(".grid").remove();
        $( "#container" ).effect( "shake" );
        createGrid(z);
    };

// Defaults a 16x16 Grid
// Mouseover to highlight square on grid
// allows the click of a button to prompt the user to create a new grid
    $(document).ready(function() {
        createGrid(16);
        $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
    });

// Connects the newGrid button to the refreshGrid function
// Repeats mouseover to draw after freshGrid
    $(".newGrid").click(function() {
        freshGrid();

    $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
    }); 
});
});
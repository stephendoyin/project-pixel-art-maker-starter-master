// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


$(function () {
    //makegrill function call on submit
    function makeGrid(height, width) {
        //tags for inside of html table
        let tableRowBeginTag = "<tr>";
        let tableRowCloseTag = "</tr>";
        let tabledata = "<td></td>";
        //clears grid whenever makegrid() is called
        let insideTable = "";
        //create tag
        for (let i = 0; i < width; i++) {
            insideTable += tableRowBeginTag;
            for (let x = 0; x < height; x++) {
                insideTable += tabledata;
            }
            insideTable += tableRowCloseTag;
        }
        //insert html format inside of table 
        $("#pixelCanvas").html(insideTable);

    }

    $("#sizePicker").submit(function (event) {

        event.preventDefault();
        //get value chosen by user and convert to number 
        let width = Number($("#inputWidth").val());
        let height = Number($("#inputHeight").val());
        //call the makegrid() function
        makeGrid(height, width);

    });
    //click event that uses jquery delegation to get color value
    // and color grid clicked by user
    $("table").on("click", "td", function() {
        let color = $("#colorPicker").val();
        $(this).css("background", color);
    });


});
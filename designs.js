

$(function () {

    //makegrill function called on submit and 
    //clears grid whenever makegrid() is called
    function makeGrid(height, width) {
        //tags for inside of html table
        let tableRowBeginTag = "<tr>";
        let tableRowCloseTag = "</tr>";
        let tableData = "<td></td>";
        let insideTable = "";
        //create tags needed for table and insert html format inside of table 
        for (let i = 0; i < height; i++) {
            insideTable += tableRowBeginTag;
            for (let x = 0; x < width; x++) {
                insideTable += tableData;
            }
            insideTable += tableRowCloseTag;
        }
        $("#pixelCanvas").html(insideTable);
    }
    //prevent reload and get value chosen by user,
    //convert to number type and call the makegrid()
    $("#sizePicker").submit(function (event) {
        event.preventDefault();
        let width = Number($("#inputWidth").val());
        let height = Number($("#inputHeight").val());
        makeGrid(height, width);

    });
    //click event that uses jquery delegation to get color value
    // and color grid clicked by user
    $("table").on("click", "td", function() {
        let color = $("#colorPicker").val();
        $(this).css("background", color);
    });


});
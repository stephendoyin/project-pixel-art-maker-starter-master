

$(function () {

    //makegrid function called on submit to make grid
    function makeGrid(height, width) {

        const tableRowBeginTag = "<tr>";
        const tableRowCloseTag = "</tr>";
        const tableDataTag = "<td></td>";
        //clears grid whenever makegrid() is called
        let insideTable = "";
        let i = 0;
        while (i < height) {
            insideTable += tableRowBeginTag;
            for (let x = 0; x < width; x++) {
                insideTable += tableDataTag;
            }
            insideTable += tableRowCloseTag;
            i++;
        }
        $("#pixelCanvas").html(insideTable);

    }

    //prevent reload on submit and get height & width value chosen by user,
    //convert to number type and call the makegrid()
    $("#sizePicker").submit(function (event) {
        event.preventDefault();
        let width = Number($("#inputWidth").val());
        let height = Number($("#inputHeight").val());
        makeGrid(height, width);
    });

    //click event that uses jquery delegation to get color value
    // and color grid clicked by user
    $("table").on("click", "td", function () {
        let color = $("#colorPicker").val();
        $(this).css("background", color);
    });

});
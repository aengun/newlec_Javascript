window.addEventListener("load", function () {

    var addButton = document.getElementById("add-button");
    var xInput = document.getElementById("x-input");
    var yInput = document.getElementById("y-input");
    var resultInput = document.getElementById("result-input");

    addButton.onclick = function () {
        // var hit;
        // if (addButton.value == "계산") {
        //     hit = 0;
        // } else {
        //     hit = parseInt(addButton.value);
        // }

        // console.log("button clicked");
        // addButton.value = hit + 1;
        var x, y;
        x = parseInt(xInput.value);
        y = parseInt(yInput.value);
        resultInput.value = x + y;
    };
    
});
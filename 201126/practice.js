window.addEventListener("load", function () {

    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    var button4 = document.getElementById("button4");
    var button5 = document.getElementById("button5");
    var button6 = document.getElementById("button6");
    var button7 = document.getElementById("button7");
    var button8 = document.getElementById("button8");
    var button9 = document.getElementById("button9");

    var resultBtn = document.getElementById("result-btn");

    var resultBtn = document.getElementById("result-btn");
    var result = document.getElementById("result");

    var x, y;
    var hit = 0;
    button1.onclick = function () {
        result.value = button1.value;
        hit++;
        if(hit == 1){
            x = result.value;
        } else if(hit == 2){
            y = result.value;
        }
    };

    button2.onclick = function () {
        result.value = button2.value;
        hit++;
        if(hit == 1){
            x = result.value;
        } else if(hit == 2){
            y = result.value;
        }
    };

    button3.onclick = function () {
        result.value = button3.value;
        hit++;
        if(hit == 1){
            x = result.value;
        } else if(hit == 2){
            y = result.value;
        }
    };

    button4.onclick = function () {
        result.value = button4.value;
        hit++;
        if(hit == 1){
            x = result.value;
        } else if(hit == 2){
            y = result.value;
        }
    };

    button5.onclick = function () {
        result.value = button5.value;
        hit++;
        if(hit == 1){
            x = result.value;
        } else if(hit == 2){
            y = result.value;
        }
    };

    button6.onclick = function () {
        result.value = button6.value;
        hit++;
        if(hit == 1){
            x = result.value;
        } else if(hit == 2){
            y = result.value;
        }
    };

    button7.onclick = function () {
        result.value = button7.value;
        hit++;
        if(hit == 1){
            x = result.value;
        } else if(hit == 2){
            y = result.value;
        }
    };

    button8.onclick = function () {
        result.value = button8.value;
        hit++;
        if(hit == 1){
            x = result.value;
        } else if(hit == 2){
            y = result.value;
        }
    };

    button9.onclick = function () {
        result.value = button9.value;
        hit++;
        if(hit == 1){
            x = result.value;
        } else if(hit == 2){
            y = result.value;
        }
    };

    resultBtn.onclick = function () {
        x = parseInt(x);
        y = parseInt(y);
        result.value = x + y;
        hit = 0;
    };

});
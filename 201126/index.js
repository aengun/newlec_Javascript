// window.onload = function () {
//     console.log("print script")
//     var btnPrint = document.getElementById("btn-print");
//     btnPrint.onclick = printResult;

//     function printResult() {
//         var x, y;
//         x = prompt("x값을 입력하세요", 0);
//         y = prompt("y값을 입력하세요", 0);
//         x = parseInt(x);
//         y = parseInt(y);
//         btnPrint.value = x + y;
//     }
// }

window.addEventListener("load", function () {
    console.log("print script")
    var btnPrint = document.getElementById("btn-print");
    btnPrint.onclick = printResult;

    function printResult() {
        var x, y;
        x = prompt("x값을 입력하세요", 0);
        y = prompt("y값을 입력하세요", 0);
        x = parseInt(x);
        y = parseInt(y);
        btnPrint.value = x + y;
    }
})

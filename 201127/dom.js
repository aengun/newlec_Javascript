window.addEventListener("load", function(){
    //name : document전체에서 찾는다. section내부 영역에서 사용X -> 클래스명 사용
    var section = document.getElementById("s3");
    var searchButton = section.getElementsByClassName("search-button")[0];

    var win;
    
    //새로운 창 띄우기
    searchButton.onclick = function(){
        win = open("zipcode.html","_black", "width=300px, height=200px");
        // var btn1 = win.document.getElementsByTagName("input")[0];
        // btn1.value="하하하";
        // 요렇게만 쓰면 input 엘리먼트 접근 불가,, 로드 시점때문 >> 로드 이후에 실행되도록 만든다.
        // win.onload = function(){
        //     var btn1 = win.document.getElementsByTagName("input")[0];
        //     btn1.value="하하하";
        // }
        // 이 코드는 다시 zipcode.html로 옮김
    };

});


//s2===========================================================
window.addEventListener("load", function () {

    // css : class명으로, js : id 부여를 최소화, 울타리에 id를 설정하고 찾아들어가자
    var section = document.getElementById("s2");
    var countdownButton = section.getElementsByTagName("input")[0]; //배열로 반환하기 때문에 [0]만 가져온다
    var countSpan = section.getElementsByClassName("count-span")[0];
    var count = 5;

    // 객체 초기화
    countSpan.innerText = count; // HTML이 아니라 JS에서 초기화

    // 카운트 다운 처리
    countdownButton.onclick = function () {
        // count--;
        // countSpan.innerText = count - click; //자식의 텍스트 변경

        var timerId = setInterval(function(){
            count--;
            countSpan.innerText = count;
            
            if(count == 0){ // 시간이 음수가 나오는 것을 해결
                clearInterval(timerId);
            }

        }, 1000);
    };

});

//=============================================================

window.addEventListener("load", function () {

    var addButton = document.getElementById("add-button");
    var xInput = document.getElementById("x-input");
    var yInput = document.getElementById("y-input");
    var resultInput = document.getElementById("result-input");

    addButton.onclick = function () {

        var x, y;
        x = parseInt(xInput.value);
        y = parseInt(yInput.value);
        resultInput.value = x + y;

    };

});
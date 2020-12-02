
//s9===========================================================
window.addEventListener("load", function () {
    var section = document.querySelector("#s9");
    var container = section.querySelector(".container")
    var addButton = section.querySelector(".add-button");
    var delButton = section.querySelector(".del-button");
    var replaceButton = section.querySelector(".replace-button");

    var index = 1;

    /* 이전 기능으로 구현 
    addButton.onclick = function(){
        // // 1. 텍스트 노드 생성
        // var text = document.createTextNode("안녕!");
        // // 2. 컨테이너에 노드 추가
        // container.appendChild(text);
        //==============================================
        // 1. span 엘리먼트 객체 생성
        var span = document.createElement("span");
        // 2. 텍스트 노드 생성
        index++;
        var text = document.createTextNode("안녕!"+index);
        // 3. span에 2번에서 생성한 text객체를 추가하고
        span.appendChild(text);
        // 4. span 객체를 container에 추가한다.
        container.appendChild(span);
    };

    delButton.onclick = function(){
        container.removeChild(container.lastElementChild);
    };

    replaceButton.onclick = function(){
        //<첫 번째 / 막내 교환>
        //이렇게 하면 oldOne이 사라짐
        // var newOne = container.lastElementChild;
        // var oldOne = container.firstElementChild
        // container.replaceChild(newOne, oldOne); //oldOne 사라짐
        //========================================
        // var newOne = container.lastElementChild;
        // var oldOne = container.firstElementChild;
        // container.replaceChild(newOne, oldOne);
        // container.appendChild(oldOne);

        //=========================================
        //<두번째 / 세번째 교환>
        var oldOne = container.children[1];
        var newOne = container.children[2];
        container.replaceChild(newOne, oldOne); // oldOne 사라짐
        container.insertBefore(oldOne, newOne.nextElementSibling); //기준열 앞에 삽입,, next쓰면 다음이 없을 때 조건처리 해야함
    }; */

    addButton.onclick = function () {
        var span = document.createElement("span");
        // var text = document.createTextNode("안녕!" + index++);
        span.append("안녕!"+index++);
        container.appendChild(span);
    };

    delButton.onclick = function () {
        container.lastElementChild.remove();
    };

    replaceButton.onclick = function () {
        var oldOne = container.children[1];
        var newOne = container.children[2];
        container.replaceChild(newOne, oldOne); // oldOne 사라짐
        container.insertBefore(oldOne, newOne.nextElementSibling);
    };
});

//s8===========================================================
window.addEventListener("load", function () {
    var section = document.querySelector("#s8");
    var prevButton = section.querySelector(".prev-button");
    var nextButton = section.querySelector(".next-button");
    var ul = section.querySelector("ul");
    var showRoomImg = section.querySelector("img");

    var current = ul.querySelector("li:nth-child(4)");

    var left = "-100px"; // 몇 픽셀 이동했냐?
    var index = 1; // 몇 칸 이동했냐?

    prevButton.onclick = function () {
        // current.innerText="호호호";
        // current = current.previousElementSibling;
        //===========================================
        // current.classList.remove("current");
        // current = current.previousElementSibling;
        // if(current == null){
        //     alert("이전 항목이 없습니다.");
        //     current = ul.querySelector("li:first-child");
        // } else {
        //     current.classList.add("current");
        //     showRoomImg.src = current.firstElementChild.src;
        // }
        //===========================================
        //선생님 방법
        if (current.previousElementSibling == null) {
            alert("이전 항목이 없습니다.");
            return;
        }

        index++;
        var x = index * 100 + "px";
        ul.style.transform = "translateX(" + x + ")";

        current.classList.remove("current");
        current = current.previousElementSibling;
        current.classList.add("current");
        showRoomImg.src = current.firstElementChild.src;
    };

    /* nextButton.onclick = function () {
        current.classList.remove("current");
        current = current.nextElementSibling;
        // current.style.opacity = "1"; //문자열로 줄 것
        // current.style.border = "1px solid green";
        // // current.style.border-width = "2px"; // js표기법 오류 다음과 같이 사용한다.
        // current.style["border-width"] = "2px";
        // current.style.borderColor = "red";

        // 위에처럼 쓰면 안돼!
        // current.className = "current"; // 이렇게 쓰는 것은 조심해
        current.classList.add("current");
        showRoomImg.src = current.firstElementChild.src;
    }; */

    nextButton.onclick = function () {
        if (current.nextElementSibling == null) {
            alert("다음 항목이 없습니다.");
            return;
        }

        index--;
        var x = index * 100 + "px";
        ul.style.transform = "translateX(" + x + ")";

        current.classList.remove("current");
        current = current.nextElementSibling;
        current.classList.add("current");
        showRoomImg.src = current.firstElementChild.src;
    }

});


//s7===========================================================
window.addEventListener("load", function () {
    var section = document.querySelector("#s7"); //css 선택자
    var prevButton = section.querySelector(".prev-button");
    var nextButton = section.querySelector(".next-button");
    var ul = section.querySelector("ul");

    // var lis = ul.querySelectorAll("li"); // 여러 개 찾기

    var current = ul.querySelector("li:first-child");
    current.innerText = "하하하";

    prevButton.onclick = function () {
        current.innerText = "호호호";
        current = current.previousElementSibling;
    };

    nextButton.onclick = function () {
        current = current.nextElementSibling;
        current.innerText = "하하하";
    };

});

//s6===========================================================
window.addEventListener("load", function () {
    var section = document.getElementById("s6");
    var prevButton = section.getElementsByClassName("prev-button")[0];
    var nextButton = section.getElementsByClassName("next-button")[0];
    var ul = section.getElementsByTagName("ul")[0];

    // console.log(ul.childNodes.length); // 11

    // 모든 노드를 대상으로 순회할 때
    // for (var i = 0; i < ul.childNodes.length; i++)
    //     console.log(ul.childNodes[i].nodeType); // 3:text, 1: element

    // 엘리먼트 노드를 대상으로 순회할 때
    // for(var i = 0; i<ul.children.length;i++)
    //     console.log(ul.children[i].nodeType);


    // var lis = ul.getElementsByTagName("li"); // 옛날 방식
    // var current = ul.firstChild;  
    var current = ul.firstElementChild;

    current.innerText = "하하하";

    prevButton.onclick = function () {
        current.innerText = "호호호";
        current = current.previousElementSibling;
    };

    nextButton.onclick = function () {
        current = current.nextElementSibling;
        current.innerText = "하하하";
    };

});

//s5===========================================================
window.addEventListener("load", function () {
    var section = document.getElementById("s5");
    var urlInput = section.getElementsByClassName("url-input")[0];
    var btn1 = section.getElementsByClassName("button1")[0];

    btn1.onclick = function () {
        // location.href = urlInput.value;
        location.replace(urlInput.value); //뒤로가기버튼 비활성화
        // location.reload(); // 새로고침 가능하게
    };

});

//s4===========================================================
window.addEventListener("load", function () {
    var section = document.getElementById("s4");
    var btn1 = section.getElementsByClassName("btn1")[0];
    var win = section.getElementsByTagName("iframe")[0].contentWindow;

    btn1.onclick = function () {
        var btn1InIframe = win.document.getElementsByTagName("input")[0];
        btn1InIframe.value = "호호호";
    };
});

//s3===========================================================
window.addEventListener("load", function () {
    //name : document전체에서 찾는다. section내부 영역에서 사용X -> 클래스명 사용
    var section = document.getElementById("s3");
    var searchButton = section.getElementsByClassName("search-button")[0];

    var win;

    //새로운 창 띄우기
    searchButton.onclick = function () {
        win = open("zipcode.html", "_black", "width=300px, height=200px");
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

        var timerId = setInterval(function () {
            count--;
            countSpan.innerText = count;

            if (count == 0) { // 시간이 음수가 나오는 것을 해결
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
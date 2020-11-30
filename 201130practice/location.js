window.addEventListener("load", function(){

    var s = document.querySelector("#s");
    var prevButton = s.querySelector(".prev-button");
    var nextButton = s.querySelector(".next-button");
    var ol = s.querySelector("ol");
    var titleSpan = s.querySelector(".title-span");
    
    var win = s.querySelector("iframe").contentWindow;
    var iframeImg = win.document.querySelector("img");  
    var imgPrint = win.document.querySelector(".img-print");
    var naverUrl = win.document.querySelector(".naver-url");
    var urlInput = win.document.querySelector(".url-input");
    var searchButton = win.document.querySelector(".search-button");
    
    // current 초기화
    var current = ol.querySelector("li:first-child");
    iframeImg.src = current.firstChild.src;    

    // 네이버 버튼 클릭
    naverUrl.onclick = function(){
        parent.location.href= "http://www.naver.com";
    }

    // 이전 버튼 클릭
    prevButton.onclick = function () {
        current = current.previousElementSibling;
        if(current === null){ // 첫 번째에서 선택 시 오류 해결
            current = ol.querySelector("li:first-child")
        }
        iframeImg.src = current.firstChild.src;
    };
    
    // 다음 버튼 클릭
    nextButton.onclick = function () {
        current = current.nextElementSibling;
        if(current === null){ // 마지막에서 선택 시 오류 해결
            current = ol.querySelector("li:last-child")
        }
        iframeImg.src = current.firstChild.src;
    };
    
    // 찾아가기 버튼 클릭
    searchButton.onclick = function () {
        parent.location.href = urlInput.value;
    };

    //출력 버튼 클릭
    imgPrint.onclick = function(){
        console.log("hi");
        if(iframeImg.src === "http://127.0.0.1:5500/images/img1.jpg"){
            titleSpan.innerText = "  -->  1번 이지요~";
        } else if(iframeImg.src === "http://127.0.0.1:5500/images/img2.jpg"){
            titleSpan.innerText = "  -->  2번 이지요~";
        } else if(iframeImg.src === "http://127.0.0.1:5500/images/img3.jpg"){
            titleSpan.innerText = "  -->  3번 이지요~";
        } else if(iframeImg.src === "http://127.0.0.1:5500/images/img4.jpg"){
            titleSpan.innerText = "  -->  4번 이지요~";
        } else if(iframeImg.src === "http://127.0.0.1:5500/images/img5.jpg"){
            titleSpan.innerText = "  -->  5번 이지요~";
        }
    }

});
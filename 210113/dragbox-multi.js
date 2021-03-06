window.addEventListener("load", (e) => {
    const section = document.querySelector("#s1");
    const container = section.querySelector(".container");
    // const box = container.querySelector(".box");

    // let down = false;
    let curBox = null;
    let offset = { x: 0, y: 0 };    
    let containerOffset = { x: container.offsetLeft, y: container.offsetTop };
    // console.log(containerOffset);

    function getScrollPosition() {
        let x = window.pageXOffset || document.documentElement.scrollLeft;
        let y = window.pageYOffset || document.documentElement.scrollTop;
        return { x, y };
    }

    section.onmousemove = (e) => {
        // box.style.position = "absolute"; // html에서 해결해야함(정적)

        // if (!down) return;
        if(!curBox) return;

        let { x: scrollX, y: scrollY } = getScrollPosition();

        // box.style.left = e.x - offset.x + "px";
        // box.style.top = e.y - offset.y + "px";

        curBox.style.left = e.x - offset.x - containerOffset.x + scrollX + "px";
        curBox.style.top = e.y - offset.y - containerOffset.y + scrollY + "px";
    };

    section.onmousedown = (e) => {
        // down = true;

        // // console.log(`X : ${e.X}, Y : ${e.Y}`); // == clientX,clientY
        // // console.log(`clientX : ${e.clientX}, clientY : ${e.clientY}`); // 문서 영역
        // // console.log(`screenX : ${e.screenX}, screenY : ${e.screenY}`); // 화면 영역
        // // console.log(`offsetX : ${e.offsetX}, offsetY : ${e.offsetY}`); // 이벤트가 들어있는 객체 기준
        // // console.log(`movementX : ${e.movementX}, movementY : ${e.movementY}`);
        // box.style.left = e.x - containerOffset.x + "px";
        // box.style.top = e.y - containerOffset.y + "px";

        e.preventDefault();
        if(!e.target.classList.contains("box")) return;

        curBox = e.target;
        offset = {x:e.offsetX, y:e.offsetY};
    };

    section.onmouseup = (e) => {
        // down = false;
        curBox = null;
    };

    // box.onmousedown = (e) => {
    //     offset = { x: e.offsetX, y: e.offsetY };
    // };

});
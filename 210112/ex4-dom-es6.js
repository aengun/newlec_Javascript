import DragBox from "./DragBox.js";
import ModalBox from "./ModalBox.js";

// s2 ===========================================================

window.addEventListener("load", (e) => {

    let section = document.querySelector("#s2");
    let alertButton = section.querySelector(".alert-button");

    alertButton.onclick = (e) => {
        let modal = new ModalBox();
        let time = 0;
        setTimeout(() => {
            modal.alert("hello"); // ModalBox.alert("hello");

        }, 500);

    }
});

// s1 ===========================================================

window.addEventListener("load", (e) => {

    // 1. 객체를 넘겨주거나
    // let container = document.querySelector("#s1 .container");
    // let dragbox = new DragBox(container);
    // 2. 객체를 선택하라고 하거나
    let dragBox = new DragBox("#s1 .container");

});
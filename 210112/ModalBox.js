class ModalBox {
    #screen;
    #view;

    constructor() {
        let screenHTML = `<div id="screen" style="background: #000;position: fixed;left:0px;top:0px;width:100%;height: 0%;opacity: 0;transition: opacity 0.5s;"></div>`;
        let viewHTML = `<div id="view" style="background:#fff;position:fixed;left:100px;top:100px;width:500px;height:0px;"></div>`;

        document.body.insertAdjacentHTML("beforeend", screenHTML);

        this.#screen = document.querySelector("#screen");
        //this.#view = document.querySelector("#view");
    }

    alert(message) {
        this.#screen.style.height = "100%";
        this.#screen.style.opacity = "0.6";
    }

    confirm() {

    }
}

export default ModalBox;
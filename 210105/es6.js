
// new.target Metaproperty
{
    function Exam(kor, eng, math) {
        // console.log(kor);
        console.log(this instanceof Exam);
        // console.log("=================");
    }
    // typeof : primitive type, instance of : object type  

    let exam1 = new Exam(11, 20, 30); // true
    let exam2 = Exam(10, 20, 30); // false
}

// =====================================================

function Alert(selector) {
    this.section = document.querySelector(selector);
    this.btn1 = this.section.querySelector("input");
    this.span = this.section.querySelector("div");

    this.btn1.onlick = this.btn1Click;
    this.x = 30;
}

Alert.prototype = {
    btn1Click: function () {
        console.log("aaa");
        this.span.innerHTML = "hello";
    },
    test:function(a,b){
        console.log(`x : ${this.x}, a : ${a}`)
    }
}

{
    window.addEventListener("load", function () {

        let alert = new Alert(".s1");
        alert.test(3);
        let onclick = alert.test; // 함수 위임
        onclick(3); //호출
        onclick.apply(alert);
        onclick.call(alert, 4);

        let obj = {x:1000, y:3000};

        onclick.call(obj, 5);

    });
}

// =====================================================

{
    function Exam(kor, eng, math){
        console.log("instance============")
        console.log(this instanceof Exam);
        console.log("type================")
        console.log(typeof new.target);
        console.log("====================")
    }

    let exam1 = new Exam(10,11,12);
    let exam2 = Exam(1,2,3);
}

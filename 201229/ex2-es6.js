
/*
1. 변수 선언
    -1 let : 변수명 중복 선언문제 해결,
             지역화 해결
    -2 const : 범주형 값을 사용할 수 있다.
            add = function(){};
            add = 3;
            위와 같이 변수가 다른 값으로 대치되는 문제 해결

2.template String
    기존 노드 조작을 아주 편하게 구현할 수 있게 해준다
    MVC를 구현 가능하게 해주는 구문
    (`)를 이용한 문자열의 템플릿화

3. Enhanced Object Literal Syntex
    -1 변수를 가지고 속성을 정의하던 방식이 개선
        function createExam(kor, eng, math){
            //return {kor:kor, eng:eng, math:math};
            //위의 표현 방식이 아래처럼 바뀜
            return{kor, eng, math}
        }
    -2 객체가 함수를 포함하는 식이 편해졌다.
        let exam = {
            kor:30,
            eng:40,
            math:50,
            // total:function(){
            //     return 60;
            // }
            total(){
                return 60;
            }
        };
        // 추가 설명
        // total 메소드에서 kor멤버를 접근하려면?
        // kor는 outer 지역변수가 아니라 멤버 변수니까
        // 그런 경우에는 this 객체의 멤버로 지정해주어야 한다. 다음처럼
        let exam = {
            kor:30,
            eng:40,
            math:50,
            total(){
                // return kor; //(x)
                return this.kor; //(o)
            }
        };

*/

// ===========================================================
// let, const, template 문자열

let title = "ES6에 대한 평가";
let content = "너무너무 좋아";

const template = `<section> \n\n\n\n
                    <h1>${title}</h1>
                    <div>${content}</div>
                  </section>`;

// /n을 문자로 출력하는 방법                  
const template2 = String.raw`<section> \n\n\n\n
                    <h1>${title}</h1>
                    <div>${content}</div>
                   </section>`;

console.log(template);
console.log(template2);

// ===========================================================
// 객체 표기법 (1)

// JSON
// let exam = new Object();
// exam.kor = 30;
// exam.eng = 40;
// exam.math = 50;

// =======>>
// let exam = {
//        kor:30,
//        eng:40,
//        math:50
//    };

// =======>> 다음처럼 변수에 담긴 값을 이용해서 객체를 생성하는 경우
let kor = 30;
let eng = 40;
let math = 50;

// let exam={
//     kor : kor,
//     eng : eng,
//     math : math
// };
// 이를 다시 다음과 같이 변경(키가 필요 없음)
let exam = {
    kor,
    eng,
    math
};  // let exam = {kor,eng,math} 이렇게 한 줄로 쓸 수도 있다.
console.log(exam.kor);
console.log(exam.eng);
console.log(exam.math);

// ===========================================================
// 객체 표기법 (2)

// let kor = 30;
// let eng = 40;
// let math = 50;

// function text() {
//     return {kor, eng, math};
// }

// ===========================================================
// 객체 표기법(3)

// let kor = 30;
// let eng = 40;
// let math = 50;

let exam2 = {
    kor, //속성
    eng, //속성
    math, //속성
    // total : function(){
    //     return this.kor+this.eng+this.math;
    // }
    total(){ // 객체의 속성을 접근할 때는 this를 사용
        return this.kor+this.eng+this.math;
    }
}

console.log(exam2);
console.log(exam2.total());

// ===========================================================
// 객체 표기법 (4)

function createExam(kor, eng, math){
    // return {
    //     kor:kor,
    //     eng:eng,
    //     math:math
    // };
    return {kor, eng, math};
}

console.log(createExam(30,40,33))

// ===========================================================
// 사전지식
// 함수를 사용하는 두 가지 방법
// 기능을 가지는 함수를 정의한 것
function print(){
    console.log("hello");
}

print();

// 개체를 정의하는 함수 ==> js에는 클래스는 없다.
// class Exam{
//     var kor;
//     var eng;
//     var math;
    function Exam(){
        this.kor = 10;
        this.eng = 20;

        this.total = function(){
            var kor = 30;
            return this.kor;
        }
    };
// };

var exam3 = new Exam();
console.log(exam3);
console.log(`kor: ${exam3.kor}, eng: ${exam3.eng}`);
console.log(exam3.total());



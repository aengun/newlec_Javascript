// =====================================================
// import는 2가지
// 1. 고립성 있음 : from
// 2. 고립성 없음 

// 정적으로 : import "./json.js"
// 동적으로 : import ("./json.js")

// =====================================================

// import test from './module1.js';
/*
import f1, { test1, test2 } from './module1.js';

function test() {
    console.log("test local function");
}

// test(); // 로컬함수와 이름이 겹칠경우 사용 못함 >> import 함수의 이름을 바꾸자
f1(); // module1의 test()
test1();
test2();

console.log("==============================");
*/

// =====================================================
// import Exam from './exam.js';

// let exam = new Exam(1,2,3);
// console.log(exam.total());
// console.log(exam.avg());
/* 
import exam from './exam.js'; // 객체를 가져오면 다른 js에서도 전역 객체처럼 동기화된다. >> 속성의 값이 바뀌면 같이 바뀜
console.log(`module exam : total is ${exam.total()}, avg is ${exam.avg()}`);

console.log("==============================");
*/

// =====================================================
// import를 이용해 동적으로 가져오기

let value = Math.floor(Math.random() * 10);

console.log(value);
// if(value > 5) {
//     import("./json.js");

if(value > 5){
    import ("./module1.js")
    .then(({default:f1 , test1})=>{
        f1();
        test1();
    });
}

// (async () => {
//     if (value > 5) {
//         const { default: f1, test1 } = await import("./module1.js");
//         f1();
//     }
// })();


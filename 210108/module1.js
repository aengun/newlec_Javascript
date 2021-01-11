// 모듈 : 부품
// 고립성
// =====================================================
import {test as m2test} from "./module2.js";
import exam from './exam.js';

// =====================================================
// 아무도 못 보는 영역
export default function test() {
    console.log("module1 test");
    m2test();
    exam.eng = 100;
    console.log(`module1 exam : total is ${exam.total()}, avg is ${exam.avg()}`);
}

export function test1() {
    console.log("module1 test1");
}

export function test2() {
    console.log("module1 test2");
}
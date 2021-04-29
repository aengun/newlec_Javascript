// let kors = [10, 20, 30];

// //고전적인 뽀개기
// // let kor1 = kors[0];
// // let kor2 = kors[1];
// // let kor3 = kors[2];

// // Destructuring 활용하기
// let [kor1, kor2, kor3] = kors;
// console.log(`kor1 : ${kor1}, kor2 : ${kor2}, kor3 : ${kor3}`);

// //let [kor1] = [1,3,5]; // 다시 선언하면 오류
// [kor1] = [1, 3, 5]; // 다른 값으로 대입 할 때는 선언 없이 쓰면된다.
// console.log(`kor1 : ${kor1}, kor2 : ${kor2}, kor3 : ${kor3}`);

// [, kor2] = [1, 3, 5]; // 2번째 값을 대입하려면 ','를 쓴다.
// console.log(`kor1 : ${kor1}, kor2 : ${kor2}, kor3 : ${kor3}`);

// [, , kor3] = [1, 3, 5];
// console.log(`kor1 : ${kor1}, kor2 : ${kor2}, kor3 : ${kor3}`);

// // 꼼수 swapping
// let x = 2;
// let y = 3;
// let z = 5;

// console.log(`x : ${x}, y : ${y}, z : ${z}`);

// //교체(swap)
// // let t = x;
// // x = y;
// // y = t;
// // 배열 destructuring을 이용한 교체
// // [x, y] = [y, x];
// [z, x, y] = [x, y, z];

// console.log(`x : ${x}, y : ${y}, z : ${z}`);

// // 인자의 수가 일치하지 않은 경우
// let [a, b, c, d = 0] = kors;
// console.log(`${a},${b},${c},${d}`);

const OnChangeSearchCond = (e) => {
  setSearchCond({ ...searchCond, [e.target.name]: e.target.value });
};

const obj = {
    k : 1,
    l : 2,
    [m] : 3
}
const f1 = (testObj) => {
    console.log(testObj);
}
const f2 = (testObj) => {
    const newObj = {...testObj, [m]:1};
    f1(newObj);
}

f2(obj);
// o라는 객체가 있고, 속성 'a' 와 'b'를 갖고 있다고 하자.
let f = function () {
    this.a = 1;
    this.b = 2;
}
let o = new f(); // {a: 1, b: 2}
console.log(o);
// f 함수의 prototype 속성 값들을 추가 하자.
f.prototype.b = 3;
f.prototype.c = 4;
console.log(o);

console.log("hello");
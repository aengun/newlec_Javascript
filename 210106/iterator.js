
{
    class List {
        #data;
        constructor() {
            this.#data = [];
            this.index = 0;
        }

        add(item) {
            this.#data.push(item);
        }

        get(index) {
            return this.#data[index];
        }

        *iterator() {//generator
            for (let i = 0; i < this.#data.length; i++)
                yield this.#data[i];
        }
    }

    let list = new List();
    list.add(3);
    list.add(9);

    let it = list.iterator();
    let result = it.next();
    while (!result.done) {
        console.log(result.value);
        result = it.next();
    }

    for (let n of list.iterator())
        console.log(`n : ${n}`);

    let ar = [...list.iterator()]; //
    console.log(ar);

    function print(a, b, c) {
        console.log(a + ", " + b + ", " + c);
    }

    print(...list.iterator());

    console.log("=====================================");
}
// =====================================================

{
    let set = new Set([2, 3, 4]);
    for (let n of set)
        console.log(`set : ${n}`);

    console.log("=====================================");
}

// =====================================================

{
    class List {
        #data;
        constructor() {
            this.#data = [];
            this.index = 0;
        }

        add(item) {
            this.#data.push(item);
        }

        get(index) {
            return this.#data[index];
        }

        // *iterator() { //generator
        *[Symbol.iterator]() {
            for (let i = 0; i < this.#data.length; i++)
                yield this.#data[i];
        }
    }

    let list = new List();
    list.add(11);
    list.add(12);
    list.add(13);

    //불가한 코드 >> 77번줄을 바꾼다
    for (let n of list)
        console.log(`list : ${n}`);

    let ar = [...list]; //
    console.log(ar);

    function print(a, b, c) {
        console.log(a + ", " + b + ", " + c);
    }

    print(...list);

    console.log("=====================================");
}
// =====================================================
// Symbol : 약속한 함수 구현
// 나는 라이브러리... 누구든지 내 기능을 이용해서
// 객체의 정보를 출력할 수 있다.
// 단, 그러려면 print 함수를 구현해 주세요~
// 내가 약속한 함수가 구현되어 있나?
// 내가 정하겠어.. 함수의 약속을
{
    // let print = Symbol('print');
    Symbol.for("print"); //global하게 쓰는 방법

    function printObject(obj) {
        console.log(obj.print());
    }

    class A {
        constructor() {

        }
        //printObject와 약속한 print 함수인가?
        // 아님 우연치 않게 이름이 같은 것인지
        // print(){
        [print](){ // symbol로 구현
            console.log("hello");
        }
    }

    class B {
        constructor() {

        }
        //printObject와 약속한 print 함수인가?
        // 아님 우연치 않게 이름이 같은 것인지
        // print(){
        [print]() { // symbol로 구현
            return 1 + 3;
        }
    }

    console.log(A.prototype.print === B.prototype.print);
    console.log("=====================================");

}
// =====================================================
// Async[Promise]
// 비동기 작업을 함수 중첩으로 해결하는 JS
// 중첩으로부터 해방시킬 수 없을까? >> promise 사용

// { // 함수의 중첩이 깊어지는 기존 비동기 처리 방식
//     setTimeout(function(){
//         console.log("첫 번째");
//         setTimeout(function(){
//             console.log("두 번째")
//         }, 100);
//     }, 200);
// }
// =====================================================
// promise 사용해보기
{
    // class NoticeDao{
    //     get(id, callback){ // callback : 위임함수
    //         setTimeout(function(){
    //             callback({id:1, title:"제목 1", content:"내용내용"})
    //         }, 1000);
    //         // return {id:1, title:"제목 1", content:"내용내용"};
    //     }
    //     add(notice){

    //     }
    //     update(notice){

    //     }
    // }

    // let noticeDao = new NoticeDao();
    // let notice = noticeDao.get(2, function(notice){
    //     console.log(notice.title);
    // });
    // console.log("메인스레드는 계속 된다.");
}
// =====================================================
// 쉬운 예제
{
    // 동기식 getNotice 요청
    function getNotice(id) {
        console.log("(동기)get 요청 발생");
        return { id: 1, title: "(동기)제목 1", content: "내용내용" };
    }

    let notice = getNotice(2);
    console.log(notice.title);
    console.log("(동기)메인스레드는 계속 된다.");
    console.log("=====================================");

    // 비동기식 getNotice 요청
    function getNotice2(id, callback) {
        console.log("(비동기)get 요청 발생");

        //3초가 걸려 다음 로직을 실행함
        setTimeout(function () {
            let notice1 = { id: 12, title: "(비동기)제목 1", content: "내용내용2" };
            callback(notice1);
        }, 3000);
    }

    let notice2 = getNotice2(2, function (notice) {
        console.log(notice.title);
    }); // 오랜 시간을 먹는 함수 : 응답 없음
    // 다음 코드를 위임한다.
    // console.log(notice.title); // 결과 값을 가져오면 실행되는 코드
    console.log("(비동기)메인스레드는 계속 된다.");
}
// =====================================================

{
    // 비동기식 2 : promise를 이용한 비동기
    function getNotice(id) {
        console.log("(promise)get 요청이 이루어졌습니다.");

        return new Promise( resolve => {
            // 10초가 걸려서 다음로직을 실행함.
            setTimeout(function () {
                let notice = { id: 1, title: "(promise)공지사항 1", content: "hehe" };
                resolve(notice);
            }, 10000);
        });
    }
    let aa = getNotice(2); // 오랜시간을 먹는 함수 : 응답없음

    aa.then(function (notice) {
        console.log(notice.title); // 결과 값을 가져오면 실행되는 코드
    });

    console.log("(promise)메인 스레드는 계속 된다.");
}
// =====================================================

{

}
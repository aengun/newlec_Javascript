
// =====================================================
// 비동기식 2 : promise
// {
//     function getNotice(id) {
//         console.log("(promise1)get 요청이 이루어졌습니다.");

//         return new Promise(resolve => {
//             // 10초가 걸려서 다음로직을 실행함.
//             setTimeout(function () {
//                 let notice = { id: 1, title: "(promise1)공지사항 1", content: "hehe" };
//                 resolve(notice);
//             }, 1000);
//         });
//     }

//     // 호출 방법 1 - 비동기
//     let aa = getNotice(2); // 오랜시간을 먹는 함수 : 응답없음

//     aa.then(function (notice) {
//         console.log(notice.title); // 결과 값을 가져오면 실행되는 코드
//     });

//     console.log("(promise1)메인 스레드는 계속 된다.");
// }
// =====================================================
// 비동기식 2 : promise - 성공 / 실패
/*{
    function getNotice(id) {
        console.log("(promise2)get 요청이 이루어졌습니다.");

        return new Promise((resolve,reject) => {
            // 1초가 걸려서 다음로직을 실행함. (시간이 오래 걸린다는 가정)
            // resolove - > 성공시, reject - > 실패시
            setTimeout(function () {
                let notice = { id: 1, title: "(promise2)공지사항 1", content: "hehe" };
                // resolve(notice);
                // reject("실패");
                reject({status : "실패", message : "넘나 큰 수"})
            }, 1000);
        });
    }

    // getNotice(1)
    // .then(
    //     function(value) {
    //         console.log(value);
    //     },
    //     function(value) {
    //         console.log(value);
    //     }
    // ) 

    //           ||

    // let promise = getNotice(1);
    // promise
    // .then(
    //     function(value) {
    //         console.log(value);
    //     },
    //     function(value) {
    //         console.log(value);
    //     }
    // )

    // 방법 2 : 성공/실패
    let promise = getNotice(1);
    // promise.then(function (value) { }, function (value) { });
    promise
        .then(
            function (notice) { // 변환 코드, 분쇄 코드
                // console.log(notice);
                return notice.title;
            },
            function (error) {
                // console.log(value);
                return error.message;
            })
        .then(
            function (title){ // 출력..
                console.log(`title : ${title}`);
            },
            function(message){
                console.log(`message : ${message}`);
            });

}
*/
// =====================================================
// 비동기식 2 : promise - 모두 모아 실행
{
    /*
    let max = 4;
    let value = Math.floor(Math.random()*max); //0~5 : 주사위 게임
    // Math.ceil() // -> *6 : 1~6
    // Math.floor() // -> *6 : 5~5
    console.log(value);
    value = Math.random();
    console.log(value);
    */

    function nextInt(max) {
        return Math.floor(Math.random() * max);
    }

    function getNotice(id) {
        console.log("(promise3)get 요청이 이루어졌습니다.");

        return new Promise((resolve, reject) => {
            // 1초가 걸려서 다음로직을 실행함. (시간이 오래 걸린다는 가정)
            setTimeout(function () {
                try {
                    let notice = { id: 1, title: "(promise3)공지사항 1", content: "hehe" };
                    let value = nextInt(10);
                    if (value > 5)
                        throw new Error("너무 큰 수");
                    else
                        resolve(notice);
                }
                catch (msg) {
                    reject({ status: "실패", message: "넘나 큰 수" });
                }
            }, 1000);
        });
    };

    // let promise1 = getNotice(1);
    // promise1.then(function(){
    //     console.log("promise1 성공");
    // });
    // let promise2 = getNotice(2);
    // promise2.then(function(){
    //     console.log("promise2 성공");
    // });

    Promise.all([getNotice(1), getNotice(2)]) //배열로 묶는다
        .then(() => {
            console.log("promise all 성공");
        });
}

// =====================================================
// {
//     function getNotice(id) {
//         console.log("(async)get 요청이 이루어졌습니다.");

//         return new Promise(resolve => {
//             // 10초가 걸려서 다음로직을 실행함.
//             setTimeout(function () {
//                 let notice = { id: 1, title: "(async)공지사항 1", content: "hehe" };
//                 resolve(notice);
//             }, 1000);
//         });
//     }

//     // 호출방법 3 - 동기
//     (async function () {
//         let notice = await getNotice(2);
//         console.log(notice.title);
//         console.log("(async)메인 스레드는 계속 된다.")
//     }()); 
// }
// =====================================================

// =====================================================

// =====================================================

// =====================================================

// =====================================================

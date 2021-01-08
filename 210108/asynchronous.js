
// =====================================================
// JS의 비동기 처리 방식
/*{
    function getNotice(page) {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                let notice = { id: 1, title: "notice title" };
                // resolve(notice);
                reject("aaaa");
                console.log("작업완료");
            }, 1000);
        });
    }

    //let notice = getNotice();
    let p = getNotice(1);
    //-----------------------
    p
        .then(
            notice => {
                console.log("resolve 1 작업");
                console.log(notice);
                return notice.title;
            },
            reason => {
                console.log("reject 1 작업");
                console.log(reason);
            }
        )
        .catch(reason => {
            console.log("catch1" + reason);
        })
        .then(
            title => {
                console.log("resolve 2 작업");
                console.log(title);
                return title.length;
            },
            reason => {
                console.log("reject 2 작업");
                console.log(reason);
            }
        )
        .catch(reason => {
            console.log("catch2" + reason);
        })
        .then(
            count => {
                console.log("resolve 3 작업");
                console.log(count);
            },
            reason => {
                console.log("reject 3 작업");
                console.log(reason);
            }
        )
        .catch(reason => {
            console.log("catch3" + reason);
        })
}
*/
// =====================================================

{
    // Promise.all
    // Promise.any
    // Promise.resolve();
    // Promise.reject();

    // 꼬리물기
    let notice = { id: 1, title: "notice title" };
    Promise.resolve(notice)
        .then(notice => {
            console.log(notice);
            return notice.title;
        })
        .then(title => {
            console.log(title);
        });

    let p1 = 1;
    let p2 = new Promise(resolve => {
        setTimeout(() => {
            resolve(200);
        }, 200)
    });
    let p3 = new Promise(resolve => {
        setTimeout(() => {
            resolve(300);
        }, 100)
    });
    // 실행 끝난 순서대로가 아니라 프로미스 순서대로
    Promise.all([p1, p2, p3])
        .then(values => {
            console.log(values);
            console.log("all " + values[1]);
            console.log("all " + values[2]);
        });

    Promise.any([p2, p3])
        .then(value => {
            console.log("any " + value);
        })
}
// =====================================================
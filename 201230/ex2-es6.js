// let key = "background-color";

// let style = {
//     "background-color" : "red"
// }


//===========================================================
// Destructuring #1 basic
{

    let exam = {
        kor: 30,
        eng: 40,
        math: 50
    }

    let { eng, kor } = exam;
    console.log(`kor : ${kor}, eng : ${eng}`);

    // 단일 변수(kor, eng)를 사용하고 있는데
    // exam 객체의 값이 바뀌어서 다시 대입을 해야 한다면??
    exam.kor = 20;
    exam.eng = 100;

    // 요건 안됨,, 
    // let { eng, kor } = exam;

    // 값 대입형 뽀개기(선언하지 않고 값만 바뀌게)
    ({ eng, kor } = exam);

    console.log(`kor : ${kor}, eng : ${eng}`);

}

//===========================================================
// Destructuring #2 속성확장과 기본값

{

    let exam = {
        kor: 30,
        eng: 40,
        math: 50
    }

    {
        // 없는 속성을 할당하면?? >> undefined가 뜸(속성은 생긴 것)
        // let { eng, kor, total } = exam;
        // 새로운 속성 할당하면서 값을 초기화
        let { eng, kor, total = 0 } = exam;
        //select eng, kor, 0 from exam;
        console.log(`kor : ${kor}, eng : ${eng}, total : ${total}`);
    }

    {
        // 뽀개기 속성에 별칭 주기
        let { eng: english, kor, total = 0 } = exam;
        //select eng english, kor, 0 from exam;
        console.log(`kor : ${kor}, english : ${english}, total : ${total}`);
    }
}

//===========================================================
// Destructuring #3 뽀개기 중첩

{
    let exam = {
        kor: 30,
        eng: 40,
        math: 50,
        student: {
            name: "newlec",
            phone: "010-1111-2222"
        }
    }

    // let {student:{name}} = exam;
    // console.log(`name : ${name}`);

    // let {kor, student:{name}, student:{phone}} = exam;
    // console.log(`kor : ${kor}, name : ${name}, phone : ${phone}`);

    let { kor, student: { name, phone } } = exam;
    console.log(`kor : ${kor}, name : ${name}, phone : ${phone}`);
}

// ===========================================================
// Destructuring #4 매개변수 뽀개기

{
    // function printExam(exam){
    //     let {kor, eng, math} = exam;
    //     console.log(`kor : ${kor}, eng : ${eng}, math : ${math}`);
    // }

    function printExam({ kor, eng, math }) {
        console.log(`kor : ${kor}, eng : ${eng}, math : ${math}`);
    }

    printExam({ kor: 10, eng: 20, math: 30 }); // 객체 만드는 부분
}

{
    function printExam({ kor, eng, math }/*destructuring */) {
        console.log(`kor : ${kor}, eng : ${eng}, math : ${math}`);
    }

    let { kor = 10, eng = 20, math = 70 } = {}; //destructuring
    printExam({ kor, eng, math }); // create Object
}



// ===========================================================
// Array Destructuring

{

    let kors = [10, 20, 30];

    //고전적인 뽀개기
    // let kor1 = kors[0];
    // let kor2 = kors[1];
    // let kor3 = kors[2];

    // Destructuring 활용하기
    let [kor1, kor2, kor3] = kors;
    console.log(`kor1 : ${kor1}, kor2 : ${kor2}, kor3 : ${kor3}`);

    //let [kor1] = [1,3,5]; // 다시 선언하면 오류
    [kor1] = [1, 3, 5]; // 다른 값으로 대입 할 때는 선언 없이 쓰면된다.
    console.log(`kor1 : ${kor1}, kor2 : ${kor2}, kor3 : ${kor3}`);

    [, kor2] = [1, 3, 5]; // 2번째 값을 대입하려면 ','를 쓴다.
    console.log(`kor1 : ${kor1}, kor2 : ${kor2}, kor3 : ${kor3}`);

    [, , kor3] = [1, 3, 5];
    console.log(`kor1 : ${kor1}, kor2 : ${kor2}, kor3 : ${kor3}`);

    // 꼼수 swapping
    let x = 2;
    let y = 3;
    let z = 5;

    console.log(`x : ${x}, y : ${y}, z : ${z}`);

    //교체(swap)
    // let t = x;
    // x = y;
    // y = t;
    // 배열 destructuring을 이용한 교체
    // [x, y] = [y, x];
    [z, x, y] = [x, y, z];

    console.log(`x : ${x}, y : ${y}, z : ${z}`);

    // 인자의 수가 일치하지 않은 경우
    let [a, b, c, d = 0] = kors;
    console.log(`${a},${b},${c},${d}`)
}

// ===========================================================
{
    
    // 중첩 배열 뽀개기
    let kors = [10, 20, 30, [40, 50]];

    let [
        kor1,
        kor2,
        kor3,
        [kor4, kor5]
    ] = kors;

    console.log(`kor1 : ${kor1}, kor2 : ${kor2}, kor3 : ${kor3}, kor4 : ${kor4}, kor5 : ${kor5}`);
    
}

// ===========================================================
// Mix
{
    let notice = {
        id : 1,
        title : "공지사항",
        files : [
            "img1.png",
            "img2.png"
        ]
    }

    // let img1 = notice.files[0];
    let {files:[img1]} = notice;
    console.log(img1);
}

// ===========================================================



// ===========================================================
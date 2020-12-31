// Function ------ Rest Parameter / Spread Operator 
//                 Default value / Arrow function

// ===========================================================
// es5에서 가능
{
    function add(x, y) {

        // let temp = 3 || null; // --> 3
        // let temp = 0 || 5; // --> 5
        // let temp = undefined || 0 || null || 5; // --> 5
        // let temp = "hello" || undefined || 0 || null || 5; // --> hello
        // console.log(temp);

        // 이를 활용하는 방법
        // if(x == null || x == undefined)
        //     x = 0;
        // 이렇게 하는게 아니라

        x = x || 0;
        y = y || 0;

        let result = x + y;

        return result;

    }

    // add(3, 4);
    console.log(add());
}

// ===========================================================
// es6는 기본값을 전달할 수 있다.
{
    function add(x = 0, y = 0) {

        let result = x + y;

        return result;

    }

    console.log(add(4));
}

// ===========================================================
// 기본값으로 x를 전달할 수도 있다.
{
    function add(x = 1, y = x) {

        let result = x + y;

        return result;

    }

    console.log(add());
}

// ===========================================================
// 기본값으로 함수를 전달 할 수도 있다.
{
    function getValue() {
        return 20;
    }

    function add(x = 1, y = getValue()) {

        let result = x + y;

        return result;

    }

    console.log(add());
}

// ===========================================================
// 기본값으로 함수를 전달 할 수도 있다.
{
    function getValue() {
        return 20;
    }

    function add(x = 1, y = 0) {

        // add()에서 전달한 인자가 하나면 arguments.length는? 1
        // 값의 초기화랑 상관 없이 전달한 값의 개수가 나오는 것
        console.log(`arguments : ${arguments.length}`);

        let result = x + y;

        return result;

    }

    console.log(add(1));
}

// ===========================================================
// arrow function
{
    window.addEventListener("load", (e) => {

        console.log("loaded");

    });

    let nums = [13, 23, 3, 5, 19, 45];
    console.log(nums);

    // 정렬 - js의 한계 : 문자열로 정렬하게 됨
    nums.sort();
    console.log(nums);
}

// ===========================================================

{
    let nums = [13, 23, 3, 5, 19, 45];
    // let nums = ["13","23","3","5","19","45"];
    // let nums = [{ id: 1, title: "hello" }, { id: 2, title: "ok" }];

    // nums.sort(); // if(우리의 기준값을 제공하는 함수){스위치};
    nums.sort(function (x, y) { return x - y; });
    console.log(nums);
}

// ===========================================================
// 위를 화살표 함수로 바꾸기
{
    let nums = [13, 23, 3, 5, 19, 45];
    // nums.sort((x, y) => x - y); // 오름차순
    nums.sort((x, y) => y - x); // 내림차순
    console.log(nums);
}

// ===========================================================

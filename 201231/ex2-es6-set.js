
// ES6 콜렉션

// ===========================================================
//set 객체 만들기
{
    let set = new Set();
    // set.add(5);
    // set.add("5");
    // set.add(2);
    // set.add(5); 

    //꼬리 물기 식으로 사용하기
    set
        .add(5)
        .add("5")
        .add(2)
        .add(5);

    console.log(set); // 요소는 3개임 >> 5가 중복
}

// ===========================================================
{
    let lotto = [2, 3, 4, 2, 1, 2, 3, 5, 6]; // 9개
    let set = new Set(lotto); // 6개
    console.log(set);

    console.log(set.size); // 개수 확인

    // set에 담겨진 값을 확인
    console.log(set.has(5)); // true
    console.log(set.has(9)); // false

    //삭제
    if (set.has(5))
        set.delete(5);

    console.log(set.size);

    //전체 삭제
    set.clear();
    console.log(set.size);

}

// ===========================================================
{
    let lotto = [2, 3, 4, 2, 1, 2, 3, 5, 6];
    let set = new Set(lotto);
    console.log(set.size);

    console.log("==============================")

    // 순회 for of
    for (let v of set) {
        console.log(v); // 값이 들어온 순서대로 출력(새로들어온 값은 지워짐)
    }

    // for each 3가지 유형
    console.log("==============================")
    set.forEach(function (v, k) {
        console.log(`value : ${v}`);
    });

    console.log("==============================")
    set.forEach(function (v, k) {
        console.log(`key : ${k}, value : ${v}`);
    });

    console.log("==============================")
    set.forEach(function (v, k, s) {
        console.log(`key : ${k}, value : ${v}, collection : ${s}`);
    });

}

// ===========================================================
// WeakSet : Set객체와 달리 열거x, 개수 확인x
{
    console.log("==============================")

    let obj1 = {};
    let obj2 = {};

    let set1 = new Set();
    set1
        .add(obj1)
        .add(obj2);

    // 2가 나옴. obj1과 obj2는 다름.
    console.log(set1.size);
    console.log(set1);
}

// ===========================================================
// Map
{
    let map = new Map();
    map.set("id", 1);

    console.log(map.size);
    console.log("==============================");

    map.set("title", "map이란??")
    console.log(map.size);
    console.log("==============================");

    // 데이터를 다음과 같이 추가해도 되나??
    map["content"] = "map은 어쩌구 저쩌구..";
    console.log(map.content);
    console.log(map.size);
    console.log("==============================");

    // map.set과 map[]은 다르다.. map[]는 속성이 추가되는 것.. size의 변화 X
    // map뿐 아니라 모든 object가 가지는 기능

}

// ===========================================================



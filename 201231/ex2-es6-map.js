
// ES6 콜렉션

//===========================================================
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

{
    let map = new Map();
    map.set("id", 1);
    map.set("title", "map이란??")
    console.log(map.size);
    console.log("==============================");
    
    // key로 value 가져오기
    console.log(map.get("title"));
    console.log("==============================");

    // value 순회
    for(let v of map.values())
        console.log(v);
    
    console.log("==============================");
    
    // key 순회
    for(let k of map.keys())
        console.log(k);

    console.log("==============================");
    

    // entries : 키와 값을 던져줌
    for(let [key, value] of map.entries()){
        console.log(`key : ${key}, value : ${value}`);
    }

    console.log("==============================");

    // for each
    map.forEach(function(v,k){
        console.log(`key : ${k}, value : ${v}`);
    });

    console.log("==============================");
}


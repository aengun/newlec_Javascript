// --- Collection[iteraotr/Generator/Symbol]
// --- Async[Promise]

// --- OOP
// 캡슐화(보호모드?), 상속, 다형성(인터페이스?)


/*
1. 캡슐화
class Exam{

    constructor(){}

}
2. private
class Exam{
    #kor;

}
3. staic & getter/setter
class Exam{
    static #count = 0;
    constructor(){
        Exam.#count++;
    }

    static get count(){
        return Exam.#count;
    }

    getCount(){
        return Exam.#count;
    }
}

new Exam();
new Exam();
console.log(Exam.count);

4. extends / super / override
*/


/*
class Exam{
    private int kor;
    private int eng;
    private int math;

    public Exam(int kor, int eng, int math){
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }
}
Exam exam = new Exam();
*/

var aa = {
    x:20,
    y:100,
    pos:function(){
        return this.x + "," + this.y;
    }
}
/*
//class Exam{
    function Exam(kor, eng, math){
        this.kor = kor;
        this.eng = eng;
        this.math = math;

        // this.total = function(){
        //     return this.kor+this.eng+this.math;
        // }
    }

    //Exam.prototype = aa;

    // Exam.prototype = {};
    // Exam.prototype.total = function(){
    //     return this.kor+this.eng+this.math;
    // }

    Exam.prototype = {
        total:function(){
            return this.kor+this.eng+this.math;
        }
    }
//}
*/



// 새로운 클래스 정의
class Exam{
    // private으로 사용할 키워드는 미리 선언해야 한다.
    #kor;
    #eng;
    #math;
    static count = 0;

    constructor(kor=10, eng=0, math=0){
        this.#kor = kor;
        this.#eng = eng;
        this.#math = math;        
        Exam.count++;
        
    }

    get kor(){
        return this.#kor;
    }

    set kor(value){
        this.#kor = value;
    }

    get eng(){
        return this.#eng;
    }

    set eng(value){
        this.#eng = value;
    }

    get math(){
        return this.#math;
    }

    set math(value){
        this.#math = value;
    }

    #tot(){
        return 10000000;
    }

    total(){
        return this.#kor+this.#eng+this.#math;
    }
}

// Exam 객체를 생성하기 전
Exam.count = 30;
console.log(`count : ${Exam.count}`);

var exam = new Exam();
var exam1 = new Exam(20,20,20);

console.log(`count : ${Exam.count}`);


//exam1.kor++;
//exam1.setKor(exam1.getKor()+1);
//exam1.#kor = 100;
//exam1.kor = 10000000;
//exam1.kor++;
console.log(`exam kor : ${exam1.kor}`); // getter를 호출

console.log(typeof exam);
//console.log(exam.pos());
console.log(`total is ${exam.total()}`);
console.log(exam.total === exam1.total);

Array.prototype.asdf=function(){
    return "hahahaha";
}

var ar = [];
console.log(ar.asdf());

// --- 상속 ---------------------------------
class NewlecExam extends Exam{
    #com;
    constructor(kor, eng, math, com){
        super(kor, eng, math);
        this.#com = com;
    }

    total(){
        return super.total() + this.#com;
    }
}

let exam2 = new NewlecExam(1,1,1,1);
console.log(`exam2.kor : ${exam2.kor}`);
console.log(`exam2.total : ${exam2.total()}`);


// primitive type : 원시형 -> 기본형 ==? 값형식
// 



// --- Function : Rest Parameter/Spread Operator
//                /Default Valule/Arrow Function
{

    window.addEventListener("load", (e)=>{
        console.log("loaded");
    });

    let nums=[13,23,3,5,19,45];
    //let nums=["13","23","3","5","19","45"];
    //let nums=[{id:1, title:"hello"},{id:2, title:"okay"}];

    //nums.sort(function(x,y){return y-x;}); // if(우리의기준값을 제공하는 함수){스위치};
    nums.sort((x,y)=>x-y);
    // nums.sort(new Comparable(){
    //     public int compare(){
    //         return 
    //     }
    // })
    console.log(nums);

    // ---Default Valule------------------------
    function getValue(){
        return 20;
    }
    function add(x=1, y=0){
        
        console.log(arguments.length);
        //if(x == null || x == undefined)
        //    x = 0;

        // x = x || 0;
        // y = y || 0;

        let result = x + y;
        return result;
        // OR 연산자 || 의 마법
        //let temp = 3 || null; --> 3
        //let temp = "hello" || undefined || 0 || null || 3;
        //console.log(temp);
    }

    //add(3);
    console.log(add(3));
}

console.log("--- ES6 콜렉션 -------------------");
// --- ES6 콜렉션 -------------------
{
    let map = new Map();
    map.set("id", 1);    
    console.log(map.size);
    console.log("--------------------");
    map.set("title", "map이란?");    
    console.log(map.size);
    console.log("--------------------");

    console.log(map.get("title"));
    for(let v of map.values())
        console.log(v);

    for(let k of map.keys())
        console.log(k);

    for(let [k, v] of map.entries()){
        console.log(`key:${k}, value:${v}`);
    }
    
    console.log("foreach------------------");
    map.forEach(function(v, k){
        console.log(`key:${k}, value:${v}`);
    });
    console.log("/foreach------------------");


    // let ar = [];//new Array();
    // let ob = {};//new Object();
    // ob.x = 30; // ob["x"] = 30;
    // ar.y = 20;

    // map["content"] = "map은 어쩌구 저쩌구..";
    // console.log(map.content);
    // console.log(map.size);
    // console.log("--------------------");


    // 객체 추가
    let obj1 = {};
    let obj2 = {};

    let set1 = new Set();
    set1
    .add(obj1)
    .add(obj2);

    console.log(set1.size);
    console.log("--------------------");

    obj1 = null;
    console.log(set1.has(obj1));
    console.log("--------------------");

    let lotto = [2,3,4,2,1,2,3,5,6];
    let set = new Set(lotto);
    console.log(set.size);
    console.log("--------------------");

    // 순회
    for(let v of set){
        console.log(v);
    }
    console.log("--------------------");
    set.forEach(function(v, k, s){
        console.log(`key:${k},value:${v},collection:${s}`);
    });
    console.log("--------------------");
    // Set에 담겨진 값을 확인
    set.has(5);

    // 삭제
    if(set.has(5))
        set.delete(5);

    console.log(set.size);
    // 모두 삭제
    set.clear();
    console.log(set.size);

 
    // set
    // .add(5)
    // .add("5")
    // .add(2)
    // .add(5);
     
    //console.log(set.size);

}

//== Mix
{

    let notice = {
        id:1,
        title:"공지사항",
        files:[
            "img1.png",
            "img2.png"
        ]
    };

    //let img1 = notice.files[0];
    let {files:[,img2]} = notice;

    console.log(img2);
}
//== Nested Array Destructuring..
{
    let kors = [10,20,30,[40,50]];
    let [
            kor1,
            kor2,
            kor3,
            [
                kor4,
                kor5
            ]
    ] = kors;

    console.log(`${kor1},${kor2},${kor3},${kor4},${kor5}`);
}

//== Array Dest...
{
    let kors = [10,20,30];

    // 고전적인 뽀개기
    // let kor1 = kors[0];
    // let kor2 = kors[1];
    // let kor3 = kors[2];
    let [kor1, kor2, kor3] = kors;
    console.log(`${kor1},${kor2},${kor3}`);

    // 다른 값으로 대입할 때는
    [kor1] = [1,3,5]; 
    [,kor2] = [1,3,5];
    [,,kor3] = [1,3,5];
    console.log(`${kor1},${kor2},${kor3}`);
    
    // 꼼수 : 순서 재배열
    let x=2;
    let y=3;
    let z=5;

    console.log(`x:${x}. y:${y}, z:${z}`);

    // Swap
    // let t = x;
    // x = y;
    // y = t;

    // 순서 재배열
    [z, x, y] = [x, y, z];

    console.log(`x:${x}. y:${y}, z:${z}`);

    // 인자의 수가 일치하지 않은 경우
    let [a,b,c,d=0] = kors;

    // 중첩 배열 뽀개기

}

//== Destructuring #4 매개변수 뽀개기
{
    function printExam({kor,eng,math}/* destructuring */){
        //let {kor, eng, math} = exam;
        console.log(`kor:${kor}, eng:${eng}, math:${math}`);
    }

    let {kor=10,eng=20,math=70} = {}; // destructuring
    printExam({kor,eng,math}/* create Object */);
}

//== Destructuring #3 중첩된 객체의 속성 뽀개기
{
    let exam = {
        kor:30,
        eng:40,
        math:50,
        student:{
            name:"newlec",
            phone:"010-1111-2222"
        }
    };

    // let {student:{name}} = exam;
    // console.log(`name:${name}`);

    //let {kor,student:{name},student:{phone}} = exam;
    let {kor,student:{name,phone}} = exam;
    console.log(`kor:${kor}, name:${name}, phone:${phone}`);
}

//== Destructuring #2 속성확장과 기본값
{
    let exam = {
        kor:30,
        eng:40,
        math:50
    };
    
    {
        // 속성을 확장하고 기본값도 대입해주기
        let {eng, kor, total=0} = exam;
        //select eng english, kor, 0 from exam;
        console.log(`kor:${kor}, eng:${eng}, total:${total}`);
    }

    {
        // 뽀개기 속성에 별칭을 주기
        let {eng:english, kor, total=0} = exam;
        console.log(`kor:${kor}, eng:${english}, total:${total}`);
    }


}
//== Destructuring #1 basic
{
    let exam = {
        kor:30,
        eng:40,
        math:50
    };

    // let kor = exam.kor;
    // let eng = exam.eng;
    //let {kor, eng} = exam;
    let {eng, kor} = exam;

    console.log(`kor:${kor}, eng:${eng}`);

    // 단일 변수(kor, eng)를 사용하고 있는데
    // exam 객체의 값이 바뀌어서 다시 대입을 해야 한다면?
    exam.kor = 20;
    exam.eng = 100;
    exam.math = 90;
    //let {eng, kor} = exam;
    //kor = exam.kor;
    //eng = exam.eng;
    // 값 대입형 뽀개기
    //({eng, kor} = exam);
    ({kor, eng} = exam);
    
    //console.log(`kor:${kor}, eng:${eng}, math:${math}`);
    console.log(`kor:${kor}, eng:${eng}`);
}

{
    // let key = "background-color";

    // let style = {
    //     "background-color" : "red"
    // };

    // document.body.style[key]




    //let exam = new Object();
    // let exam = {};
    // exam.kor = 30;
    // exam.eng = 40;
    // exam.math = 50;

    // let exam = {
    //             kor:30, 
    //             eng:40,
    //             math:50
    //         };

    //다음처럼 변수에 담긴 값을 이용해서 객체를 생성하는 경우
    // let kor = 30;
    // let eng = 40;
    // let math = 50;

    // let exam = {
    //     kor:kor, 
    //     eng:eng,
    //     math:math
    // };

    // 예제 1 --------------
    // let kor = 30;
    // let eng = 40;
    // let math = 50;

    // let exam = {kor,eng,math};
    // console.log(exam.kor);

    // 예제 2 --------------
    // let kor = 30;
    // let eng = 40;
    // let math = 50;

    // function test(){
    //     return {kor, eng, math};
    // }

    // 사전지식
    // 함수를 사용하는 두 가지 방법
    // 기능을 가지는 함수를 정의한 것
    function print(){
        console.log("hello");
    }

    print();

    // 개체를 정의하는 함수
    // class Exam{
    //     var kor;
    //     var eng;
    //     var math;
        function Exam(){
            this.kor = 10;
            this.eng = 20;

            this.total = function(){
                var kor = 30;
                return this.kor;
            }
        }
    // }

    var ex = new Exam();
    console.log(`kor:${ex.kor}, eng:${ex.eng}`);
    console.log(`total is ${ex.total()}`);
}
// 예제 3 --------------
{
    let kor = 30;
    let eng = 40;
    let math = 50;

    let exam = {
        kor,
        eng,
        math,
        total(){
            return this.kor+this.eng;
        }
        // total:function(){
        //     return this.kor+this.eng;
        // }
    }
}

// 예제 4 --------------
function createExam(kor, eng, math){
    return {kor, eng, math};
    // return {
    //     kor:kor,
    //     eng:eng,
    //     math:math
    // };
}

// function f1(){
//     let kor;

//     let total = function(){
//         return kor;
//     }
// }


let title = "ES6에 대한 평가";
let content = "너무너무 좋아";

const template = String.raw`<section>
                    \n\n\n
                    <h1>${title}</h1>
                    <div>${content}</div>
                </section>`;

console.log(template);



/*
1. 변수 선언
-1 let:변수명 중복 선언문제 해결,
       지역화 해결
    const : 범주형 값을 사용할 수 있다.
       add = function(){};
       add = 3;
       위와 같이 변수가 다른 값으로 대치되는.. 문제 해결
2 template String
   기존 노드 조작을 아주 편하게 구현할 수 있게 해준다.
   MVC를 구현 가능하게 해주는 구문..
   *어금부호(`)를 이용한 문자열의 템플릿화*

3. Enhanced Object Literal Syntax
-1 변수를 가지고 속성을 정의하던 방식이 개선
    function createExam(kor, eng, math){
        //return {kor:kor, eng:eng, math:math};
        // 위의 표현방법이 아래처럼... 어때? 좋치? 좋아~
        return {kor, eng, math};
    }
-2 객체가 함수를 포함하는 식이 편해졌다.
    let exam = {
        kor:30,
        eng:40,
        math:50,
        //total:function(){
        total(){
            return 60;
        }
    };
    //추가 설명
    //total 메소드에서 kor 멤버를 접근하려면?
    //kor는 outer 지역변수가 아니라 멤버 변수니까.. 
    //그런 경우에는 this 객체의 멤버로 지정해주어야 한다. 다음처럼
    let exam = {
        kor:30,
        eng:40,
        math:50,
        //total:function(){
        total(){
            return kor // (X)
            return this.kor; // (O)
        }
    };

*/
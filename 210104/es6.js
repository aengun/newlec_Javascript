
// OOP
// 캡슐화(보호모드), 상속, 다형성(인터페이스)
// =======================================================

{
    // 일반적인 클래스 생성 방법
    // class Exam{
    //     private int kor;
    //     private int eng;
    //     private int math;

    //     public Exam(int kor, int eng, int math){
    //         this.kor = kor;
    //         this.eng = eng;
    //         this.math = math;
    //     }
    // }

    // Exam exam = new Exam();

    // =========================================

    function Exam(kor, eng, math) {
        this.kor = kor;
        this.eng = eng;
        this.math = math;

        // this.total = function(){
        //     return this.kor + this.eng + this.math;
        // }
    }

    Exam.prototype.total = function () {
        return this.kor + this.eng + this.math;
    }

    let exam = new Exam(10, 10, 10,);
    let exam2 = new Exam(15, 10, 20,);

    // js에서는 형식을 지정하지 않음 >> typeof : object임
    // primitive type : 원시형 -> 기본형 
    console.log(typeof exam);
    console.log(typeof exam2);

    console.log(exam.total());
    console.log(exam2.total());

    console.log(exam.total === exam2.total);

}

// =======================================================

{
    let aa = {
        x: 20,
        y: 30,
        pos: function () {
            return this.x + "," + this.y;
        }
    }

    Exam.prototype = aa;

    // Exam.prototype = {};
    // Exam.prototype.total = function () {
    //     return this.kor + this.eng + this.math;
    // }

    Exam.prototype = {
        total: function () {
            return this.kor + this.eng + this.math;
        }
    }

}
// =======================================================

{
    Array.prototype.asdf = function () {
        return "hahaha";
    }

    let ar = [];
    console.log(ar.asdf());
}
// =======================================================

{
    class Exam { //js는 생성자 오버로드가 따로 없다
        constructor(kor = 0, eng = 0, math = 0) {
            this.kor = kor;
            this.eng = eng;
            this.math = math;
        }

        total() {
            return this.kor + this.eng + this.math;
        }
    }

    let exam = new Exam(10, 70, 10);
    let exam2 = new Exam(15, 18, 20);
    console.log(exam.total());
    console.log(exam2.total());
}
// =======================================================
// getter & setter
{
    class Exam { //js는 생성자 오버로드가 따로 없다
        //privagte 멤버 정의하기
        //private으로 사용할 키워드는 미리 선언해야한다.
        #kor;
        #eng;
        #math;

        constructor(kor = 0, eng = 0, math = 0) {
            this.#kor = kor;
            this.#eng = eng;
            this.#math = math;
        }

        total() {
            return this.#kor + this.#eng + this.#math;
        }

        get kor(){
            return this.#kor;
        }

        get eng(){
            return this.#eng;
        }

        get math(){
            return this.#math;
        }

    }

    let exam = new Exam(17, 70, 10);
    let exam2 = new Exam(15, 18, 20);
    console.log(exam.total());
    console.log(exam2.total());

    // exam.kor++;
    // exam.setKor(exam.getKor()+1);
    // getter을 통해 값 가져오기
    console.log(exam.kor);
}
// =======================================================

{
    class Exam { 
        #kor;
        #eng;
        #math;
        static count = 0;

        constructor(kor = 0, eng = 0, math = 0) {
            this.#kor = kor;
            this.#eng = eng;
            this.#math = math;
            Exam.#count++;
        }

        get kor(){
            return this.#kor;
        }

        get eng(){
            return this.#eng;
        }

        get math(){
            return this.#math;
        }

        get count(){
            return Exam.#count;
        }

        set kor(value){
            this.#kor = value;
        }

        set eng(value){
            this.#eng = value;
        }

        set math(value){
            this.#math = value;
        }

        total() {
            return this.#kor + this.#eng + this.#math + this.#tot();
        }

        #tot(){
            return 10000;
        }

    }
    //객체를 생성하기 전
    Exam.count = 30; // 객체의 속성이 아니라 전역변수
    console.log(`생성 전 count : ${Exam.count}`);

    let exam = new Exam(17, 70, 10);
    let exam2 = new Exam(15, 18, 20);
    console.log(exam.total());
    console.log(exam2.total());

    //객체 생성 후 count
    console.log(`생성 후 count : ${Exam.count}`);

}
// =======================================================
// 상속
{
    class Exam { 
        #kor;
        #eng;
        #math;
        static #count = 0;

        constructor(kor = 0, eng = 0, math = 0) {
            this.#kor = kor;
            this.#eng = eng;
            this.#math = math;
            Exam.#count++;
        }

        get kor(){
            return this.#kor;
        }

        get eng(){
            return this.#eng;
        }

        get math(){
            return this.#math;
        }

        get count(){
            return Exam.#count;
        }

        set kor(value){
            this.#kor = value;
        }

        set eng(value){
            this.#eng = value;
        }

        set math(value){
            this.#math = value;
        }

        total() {
            return this.#kor + this.#eng + this.#math + this.#tot();
        }

        #tot(){
            return 10000;
        }

    }    
    
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

}
// =====================================================

//정리
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
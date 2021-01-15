// setTimeout(
//     (name) => {
//         let coffeeList = name;
//         console.log(coffeeList);

//         setTimeout(
//             (name) => {
//                 coffeeList += ', ' + name;
//                 console.log(coffeeList);

//                 setTimeout(
//                     (name) => {
//                         coffeeList += ', ' + name;
//                         console.log(coffeeList);

//                         setTimeout(
//                             (name) => {
//                                 coffeeList += ', ' + name;
//                                 console.log(coffeeList);
//                             },
//                             500,
//                             'Latte',
//                         );
//                     },
//                     500,
//                     'Mocha',
//                 );
//             },
//             500,
//             'Americano',
//         );
//     },
//     500,
//     'Espresso',
// );


// setTimeout(
//     (name) => {
//         coffeeList += ', ' + name;
//         console.log(coffeeList);
//     },
//     500,
//     'Latte',
// );

{
    function lalala(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    let o1 = new lalala(23, 34, 45);
    let o2 = new lalala(23, 34, 45);

    console.log(o1 == o2);
    console.log(o1 === o2);
    
    console.log(o1.a);
    o1.a++;
    o1.a = 10;

    // console.log(o1);
    // console.log(o1.a);
    // o1.a = 10;
    // console.log(o1.a);
    // console.log(o1);
}

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
            Exam.count++;
        }

        get kor() {
            return this.#kor;
        }

        get eng() {
            return this.#eng;
        }

        get math() {
            return this.#math;
        }

        get count() {
            return Exam.count;
        }

        set kor(value) {
            this.#kor = value;
        }

        set eng(value) {
            this.#eng = value;
        }

        set math(value) {
            this.#math = value;
        }

        total() {
            return this.#kor + this.#eng + this.#math + this.#tot();
        }

        #tot() {
            return 10000;
        }

    }

    let exam = new Exam(17, 70, 10);
    let exam2 = new Exam(17, 70, 10);

    // console.log(exam == exam2);
    console.log(exam);
    console.log(exam.kor);
    exam.kor = 10;
    exam.kor++;

    //java일 때
    exam.setKor(getKor()+19);
    exam.kor = 10;
}
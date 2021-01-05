// =====================================================
// iterator : 멀티 스레드에서 콜렉션을 공유하면서 순회자(열거자)만 개별화하는 방법
{
    function* iterator() {
        yield "안녕하세요";
        yield "반갑습니다";
        yield "요호호호호~";
    }

    let it = iterator();
    console.log(it.next().value);
    console.log(it.next().value);
    console.log(it.next().value);
    console.log("========================");
}
// =====================================================
// iterator을 한 줄의 코드도 없이 구현가능 : Generator
// Generator : iterator를 구현해주는 기능 도구
{
    let data = [20, 10, 23, 4, 45, 6]
    function* iterator() { // iterator를 만들어 반환하는 generator
        for (let i = 0; i < data.length; i++)
            yield data[i];
    }

    let it = iterator(); // iterator 객체를 generate한 것임.
    // it.next() : {value:?, done:?} 이렇게 생긴 객체를 반환
    // console.log(it.next().value);
    // console.log(it.next().value);
    // console.log(it.next().value);
    let result = it.next();
    while (!result.done) {
        console.log(result.value);
        result = it.next();
    }
    console.log("========================");
}
// =====================================================
// iterator 구현해보기,, 
// 그냥 js에서 제공하는 generator을 쓰는 것이 낫다.
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
}
// =====================================================

{

}
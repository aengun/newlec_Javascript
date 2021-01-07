window.addEventListener("load", function () {

    function inputNum() {
        let x;
        x = prompt("생각한 수를 입력하세요.", 0);
        return x;
    }

    function solveNum() {
        let num = inputNum();
        console.log("생각한 숫자 푸는 중");
        return new Promise((resolve, reject) => {
            if (1 <= num && num <= 9) {
                setTimeout(function () {
                    resolve(num);
                }, 500);
            } else if (num == 0) {
                reject("숫자를 입력하세요.");
            } else {
                reject("1~9 사이의 숫자를 입력하세요.");
            }
        })
    }

    solveNum()
        .then(function (num) {
            let num2 = num * 9;
            console.log(`1. 9곱하기 : ${num2}`);

            let a = Math.floor(num2 / 10);
            let b = num2 - a * 10;
            let c = a + b;

            console.log(`2-1. 10의 자리 : ${a}`);
            console.log(`2-2. 1의 자리 : ${b}`);
            console.log(`2-3. 10의 자리 + 1의 자리 : ${c}`);
            let nums = { firstNum: parseInt(num), secondNum: c };
            return nums;
        })
        .then(function (nums) {
            // console.log(nums);
            nums.thirdNum = nums.firstNum + nums.secondNum;
            console.log(`3. 1번의 결과와 2번의 결과 더하기 : ${nums.thirdNum}`);
            // console.log(nums);
            return nums;
        })
        .then(function (nums) {
            // console.log(nums);
            nums.fourthNum = nums.thirdNum - 9;
            console.log(`당신이 생각한 숫자는... 혹시 "${nums.fourthNum}" 아닌가요??!!`);
        })
        .catch(function (msg) {
            console.log(msg)
        });

    // let promise = solveNum();

    // 1. *9     5 - > 45 
    // 2. 각 자리수 더하기    - >  9 
    // 3. 2번 + 생각한 수 더하기.    - > 14
    // 4. 3번 결과값에서 9 빼기   - > 14 - 9 - > 5

    // 1단계 - > 정상적으로 입력했을 때
    // 2단계 - > 1~9 이외의 숫자를 입력할 시
    // 3단계 - > 숫자를 입력안했을 때
    // 4단계 - > 2,3단계 취합

});
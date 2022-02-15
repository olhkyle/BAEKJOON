const fs = require('fs');
const filepath = process.platfrom === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split(' ');


console.log(input);
//55


// 런타임 에러
let num = +input;

let cycle = 0;
let temp = num;
let step = 0;
let isNotSame = true;

while (isNotSame) {
    cycle++;
    
    if (temp < 10){
        step = temp % 10;
    } else {
        step = Math.floor(temp/10) + (temp%10);
    }

    temp = (temp%10).toString() + (step%10).toString(); 
    temp = Number(temp);

    if (temp === num){
        isNotSame = false;
    }
}

// 55 -> 5 + 5 = 10 -> 5 + 0 = 5 -> 0 + 5 = 5


// let num = +input; // 숫자 55

// let count = 0;
// let temp = num; // 값을 임시로 받아오는 역할
// let step = 0; 
// let isNotTrue = true;

// while (isNotTrue) {
//     count++;

//     // 분리하고 나서 더한 결과를 산출
//     if (temp<10){
//         step = temp % 10;
//     } else {
//         step = Math.floor(temp/10) + (temp % 10);
//     }

//     // 좌변의 두번째 피연산자와 step의 첫째 자리를 더하는 단계
//     temp = (temp%10).toString() + (step%10).toString();
//     temp = Number(temp);

//     if (num === temp){
//         isNotTrue = false;
//     }
// }


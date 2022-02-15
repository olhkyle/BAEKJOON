const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split(' ');

// 빈문자열이 입력됬을 때, 1을 출력하는 오류를 막는 코드
if (input[0] === ''){
    input.pop();
}

const result = input.length;
console.log(result);



// input의 값 중 같은 값이 있을 때도, 카운트 하는 코드 -> 하지만, 불필요하다. 
// function result(count) {
//     for (let i = 0; i < count; i++){
//         for (let j = 0; j < i; j++){
//             if(input[i] == input[j]){
//                 count++;
//             }
//         }
//     }
//     if()
// }

// result(input.length);


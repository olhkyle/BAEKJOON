const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split(' ');

console.log(input);


// 시간 초과 



// 높이 V 
// 낮에 A미터 올라갈 수 있다.
// 밤에 B미터 미끄러진다.
// 정상에 올라간 후에는 미끌지지 않는다.

// 총 몇일이 걸리는 지
// A=2 B=1 V=5

let isTrue = true;
let count = 0;
let height = 0;
const A = +input[0];
const B = +input[1];
const V = +input[2];

// 2 - 1 = 1; A-B 
// 1+2 - 1 = 2; A-B+A-B
// 2+2 -1 = 3; 3A-3B
// 3+2 미끄러지지 않는다.

// // 5 1 6
// 5 - 1 = 4;
// 4 + 5 = 9;

// 첫 번째 방법
// while (isTrue) {
//     height += A;
//     count++;
//     if (height >= V) {break};
//     height -= B;
// }

// console.log(count);


// 두 번째 방법 : 최종 올라갈 높이 - 밤에 내려가는 높이 / 낮에 올라가는 높이 - 밤에 내려가는 높이
count = Math.ceil((V-B)/(A-B));
console.log(count);
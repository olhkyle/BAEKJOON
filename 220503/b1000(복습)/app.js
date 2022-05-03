const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

// 첫 번째 풀이 - array.prototype.method 중 reduce 활용
// const result = input.reduce((prev, curr) => +input[0]+ +input[1], 0);
// console.log(result);


// 두 번째 풀이 - array.prototype.method 중 map 활용
const newInput = input.map((item) => +item);

function plus(a,b) {
    console.log(a+b);
}

plus(newInput[0], newInput[1]);
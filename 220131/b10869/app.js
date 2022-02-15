const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


input = input[0];
input = input.split(' ').map((item) => +item);
const a = input[0];
const b = input[1];

solution(a,b);

function solution(a,b) {
    console.log(a*b);
}
const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');

// 최대 최솟값이 될 녀석들을 조건문으로 거르는 문제
const count = input[0];
const nums = input[1].split(' ').map(item => +item);

let max = nums[0];
let min = nums[0]; 

for (let i = 0; i < count; i++){
    if (max < nums[i]) {
        max = nums[i];
    }
    if (min > nums[i]){
        min = nums[i]; 
    }
}

console.log(min, max);


// // sort 활용법
// const count = input[0];
// const numArr = input[1].split(' ').map(item => +item);

// const sortArr = numArr.sort((a,b) => a - b);

// console.log(sortArr[0], sortArr[count-1]);
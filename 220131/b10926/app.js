const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


const a = ['??!'];


function solution(input){
    const newArray = input.concat(a);
    const result = newArray.join('');
    console.log(result);
}

solution(input);


// 1. input.concat(a);를 통해 두 배열을 합친다.
// 2. join('')을 통해 하나의 배열로 합친다.
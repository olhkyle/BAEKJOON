const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// console.log(input);
const a = ['??!'];


function solution(input){
    const newArray = input.concat(a);
    const result = newArray.join('');
    console.log(result);
}

solution(input);
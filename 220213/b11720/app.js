const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');

// console.log(input);

const count = +input[0];
const newArr = input[1].split('').map(item => +item);
// console.log(newArr);

const result = newArr.reduce((a,b)=> a+b, 0);
console.log(result);
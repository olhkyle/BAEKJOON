const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');

const newInput = input[1].split(' ');

const sortArr = newInput.sort((a,b) => b - a);

const M = +sortArr[0];

const newArr= sortArr.map(item => item / M*100);

const result = newArr.reduce((prev,curr) => prev + curr, 0)/newArr.length;

console.log(result);
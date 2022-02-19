const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split(' ');
// console.log(input);


let A = +input[0];
let B = +input[1];
let C = +input[2];


const margin = C - B;
const count = Math.floor(A / margin) + 1;

if (margin <= 0){
    console.log(-1);
} else {
    console.log(count);
}
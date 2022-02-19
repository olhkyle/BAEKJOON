const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');

const A = +input[0];
const B = +input[1];
const C = +input[2];

const multiplyResult = A*B*C;
const newArr = ('' + multiplyResult).split('').map(item => +item);
// console.log(newArr);


for (let i = 0; i < 10; i++){
    const outArr = newArr.filter(item => item === i);
    const result = outArr.length;
    console.log(result);
}

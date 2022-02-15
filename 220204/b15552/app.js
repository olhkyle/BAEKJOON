const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');


for (let i = 1; i<input.length; ++i){
    const arr = input[i].split(' ');
    let A = +arr[0];
    let B = +arr[1];
    const result = A + B;
    console.log(result);
}
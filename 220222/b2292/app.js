const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString();

const N = +input;

let i = 1; 
let sum = 1; 

while(sum < N){
    sum += 6 * i;
    i++;
}

console.log(i);
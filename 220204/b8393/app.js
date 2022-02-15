const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString();

input = Number(input);

let sum = 0;

for (let i = 1; i <=input; i++){
    sum += i;
}

console.log(sum);
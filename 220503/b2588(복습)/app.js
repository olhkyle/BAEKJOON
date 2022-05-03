const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

console.log(input);

const a = +input[0];
const b = +input[1];

for(let i = 2; i >= 0; i--){
    const newInput = b.split('')[i];
    console.log(a*newInput);
}

console.log(a*b);
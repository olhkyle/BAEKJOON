const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString();

input = +input;
let sum = '';

for (let i = 1; i <= input; ++i){
    sum += i + '\n';
}

console.log(sum);

const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');

console.log(input);

let i = 0;

while (i < input.length) {
    let newInput = input[i].split(' ').map(item => +item);
    const result = newInput[0] + newInput[1];
    if (result === 0) break;
    console.log(result);
    i++;
}
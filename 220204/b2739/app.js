const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');

input = Number(input[0]);

for (let i = 1; i < 10; i++){
    const result = input * i
    console.log(`${input} * ${i} = ${result}`);
}

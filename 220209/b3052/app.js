const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');

const divideOutput = input.map(item => item % 42);

let count = 0;

for (let i = 0; i < divideOutput.length; i++){
    if (divideOutput[i] !== divideOutput[i+1]){
        count++;
    }
}
console.log(count);


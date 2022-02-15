const fs = require('fs');
const filepath = process.platfrom === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('');

input = input.map(item => +item);

const A = input[0];
const B = input[1];
let count = 0;

while (count >= 0){
    let x = input[0];
    let y = input[1];
    let result = x + y;
    if (result >= 10){
        x = y;
        y = +result.toString().split('')[1];
    } else {
        x = y;
        y = result;
    }
    count++
    input.splice(0,2);
    input.push(x,y);
    if (A === y && B === result){
        break;
    }
} 
console.log(count);
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = +input[0];


function program(a){
    const b = a - 543;
    console.log(b);
}

program(input);
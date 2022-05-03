const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

const newInput = input.map((item) => +item);

function remainder(a,b){
    console.log(a/b);
}

remainder(newInput[0], newInput[1]);
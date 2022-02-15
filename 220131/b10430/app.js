const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

const A = +input[0];
const B = +input[1];
const C = +input[2];



function solution(A,B,C){
    console.log((A+B)%C);
    console.log(((A%C)+(B%C))%C);
    console.log((A*B)%C);
    console.log(((A%C)*(B%C))%C);
}

solution(A,B,C);



const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');


const N = +input[0];
solution(N);

function solution(N){
    for (let i = 1; i <= N; ++i){
        const testCase = input[i].split(' ');
        let X = +testCase[0];
        let Y = +testCase[1];
        console.log(`Case #${i}: ${X} + ${Y} = ${X+Y}`);
    }
}
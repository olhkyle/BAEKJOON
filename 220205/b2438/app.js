const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString();

const N = +input;
let star = '';

solution(N);

function solution(N){
    for (let i = 0; i < N; i++){
        star += '*';
        console.log(star);
    }
}
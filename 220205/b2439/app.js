const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString();

const N = +input;

solution(N);


// repeat()메서드 사용
// function solution(N){
//     for (let i = 1; i < N+1; i++){
//             console.log(' '.repeat(N-i) + '*'.repeat(i));
//     }
// }


// 이중 for 반복문 사용
function solution(N){
    for (let i = 0; i < N; i++){
        let star = '';
        for (let j = 0; j < N - 1 - i; j++){
            star += ' ';
        }
        for (let k = 0; k < i + 1; k++){
            star += '*';
        }
        console.log(star);
    }
}


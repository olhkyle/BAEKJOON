const fs = require('fs');
const filepath = process.platfrom === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');

solution();

function solution(){
    let count = 0;
    while (count < 5){
        let newInput = input[count].split(' ').map(item => +item);
        console.log(newInput[0]+newInput[1]);
        count++
    }
}

// runtime error

// 조건식에 true를 입력하게 되면, 무한루프 형태로 진행되므로
// 그 대신 어디까지 진행하겠다는 비교 연산자를 통해 주기를 조절
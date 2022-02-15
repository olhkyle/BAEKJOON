const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');

// 정수 N = 10개 , X = 5(정수);
// 수열 A -> 1 10 4 9 2 3 8 5 7 6
// X보다 작은 수를 입력받은 순서대로 공백으로 구분해 출력한다.


// filter 메서드 활용
// const result = newInput.filter(item => item < 5);
// console.log(result.join(' '));


// for if 문 활용 -> Number로 먼저 배열을 만들고, 나중에 비교해도 됨
let num = input[0].split(' ');
let newInput = input[1].split(' ');
// console.log(newInput);


let arr = [];

for (let i = 0; i < newInput.length; i++){
    if (+newInput[i] < +num[1]){
        arr.push(newInput[i]);
    }
}
console.log(arr.join(' '));

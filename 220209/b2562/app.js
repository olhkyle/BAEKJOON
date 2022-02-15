const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');

let count = 0;
const arr = input.map(item => +item);
let max = arr[0];

for (let i = 1; i < input.length; i++){
    if (max < arr[i]){
        max = arr[i]; // 큰값을 만날 때마다 max 값 초기화
        count = i;
    }
}

console.log(max);
console.log(count+1);

// console.log를 두 번 출력하여 줄바꿈 및 공백을 만들어도 된다.
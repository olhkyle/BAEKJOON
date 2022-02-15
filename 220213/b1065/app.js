const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString();


let n = Number(input);
let count = 0;

for (let i = 1; i <= n; i++){
    let newArr = i.toString();
    // 1~99까지의 수는 모두 한수에 해당한다.
    if (i < 100){
        count++;
        continue; // 뒤 코드는 무시한다.
    }

    // 앞 뒷자리의 차이가 등차 수열일 경우에만 단항 산술 연산자 중 postIncrement operator 사용
    let A = Number(newArr[0]) - Number(newArr[1]);
    let B = Number(newArr[1]) - Number(newArr[2]);
    if (A === B){
        count++;
    }
}
console.log(count);


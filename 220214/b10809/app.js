const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('');

// 알파벳 소문자 26개 -> 아스키 코드 활용해야 함 ㅠㅠㅠㅠㅠㅠㅠ 시간 날림.
console.log(input);


let arr = [];
for (let i = 97; i <= 122; i++){
    let alphabet = String.fromCharCode(i);
    const x = input.indexOf(alphabet);
    arr.push(x);
}

const result = arr.join(' ');
console.log(result);
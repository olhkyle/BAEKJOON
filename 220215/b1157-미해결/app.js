const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim();

console.log(input);

// 출력
// 1. 가장 많이 쓰인 알파벳 대문자로 출력 => 소문자일 경우 uppercase 활용
// 2. 많이 사용된 알파벳이 여러 개일 경우, ?를 출력한다.

let alphCountArr = [];
let maxCount = 0;
let answer;
let words = input.toUpperCase().split(''); // ['M', 'i', 's']

let a = "A".charCodeAt(); // A의 UTF-16 코드를 나타내는 정수를 반환 - 65
let z = "Z".charCodeAt(); // 90


for (let i = a; i <= z; i++){
    let count = 0;
    let alph = String.fromCharCode(i); // I
    let position = words.indexOf(alph); // 아니면 -1 반환
    while(position !== -1){
        count++;
        position = words.indexOf(alph, position + 1);
        // console.log(position);
        if(count >= maxCount){
            maxCount = count;
            answer = String.fromCharCode(i);
        }
    }
    alphCountArr += count;
    console.log(alphCountArr);
}


let newArr = alphCountArr.split('').sort((a,b) => a-b);
let lastPos = newArr[newArr.length -1];
let laftPos = newArr[newArr.length -2];
if (lastPos === laftPos){
    answer = "?";
}

console.log(answer);
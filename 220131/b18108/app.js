const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();


// const a = Number(input) - 543;


// function solution(input){
//     const a = Number(input) - 543;
//     console.log(a);
// }

// solution(input);



function solution(input){
    console.log(input - 543);
}

solution(input);



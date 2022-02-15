const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const num1 = +input[0];
const num2 = +input[1];
const num3 = input[1].split('');


function solution1(a, b){
    for (i=2; i >= 0; i--){
        console.log(num1*(+num3[i]));
    }
}

function solution2(a,b){
    console.log(num1*num2);
}
 
solution1(num1,num3);
solution2(num1,num2);



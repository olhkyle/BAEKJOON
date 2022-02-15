const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


input = input[0];
input = input.split(' ').map(item => +item);

const a = input[0];
const b = input[1]


function solution(command,a,b) {
    switch (command) {
        case 'add':
            console.log(a+b);
        case 'subtract':
            console.log(a-b);
        case 'multiply':
            console.log(a*b);
        case 'divide':
            console.log(Math.floor(a/b));
        case 'remainder':
            console.log(a%b);
    }
}


solution('add',a,b);


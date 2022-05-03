const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

const newInput = input.map((item) => +item);

const a = newInput[0];
const b = newInput[1];

function result(solution, a,b) {
    switch (solution){
        case 'add' :
            console.log(a+b);
        case 'subtract':
            console.log(a-b);
        case 'multiply' :
            console.log(a*b);
        case 'divide':
            console.log(Math.floor(a/b));
        case 'remainder':
            console.log(a%b);
    }
}


result('add', a, b);
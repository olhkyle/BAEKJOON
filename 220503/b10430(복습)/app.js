const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

const a = +input[0];
const b = +input[1];
const c = +input[2];

function solution(solve, a, b, c){
    switch (solve) {
        case 'first' :
            console.log((a+b)%c);
        case 'second' :
            console.log(((a%c)+(b%c))%c);
        case 'third' :
            console.log((a*b)%c);
        case 'fourth' :
            console.log(((a%b)*(b%c))%c);
    }
}

solution('first', a, b, c);
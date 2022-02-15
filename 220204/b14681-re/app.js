const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');

input = input.map(item => +item);

const X = input[0];
const Y = input[1];

if (X>0 && Y>0) {
    console.log(1);
}else if (X<0 && Y>0) {
    console.log(2);
}else if (X<0 && Y<0) {
    console.log(3);
}else if (X>0 && Y<0) {
    console.log(4);
}else {
    return;
}
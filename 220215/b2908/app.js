const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split(' ');

console.log(input);

const firstArr = input[0].split('').reverse();
const secondArr = input[1].split('').reverse();

const firstResult = +firstArr.join('');
const secondResult = +secondArr.join('');

if(firstResult > secondResult){
    console.log(firstResult);
} else{
    console.log(secondResult);
}
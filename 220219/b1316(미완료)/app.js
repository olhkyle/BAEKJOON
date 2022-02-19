const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');

console.log(input);

let num = +input[0];
let count = 0;

for (let i = 0; i < num+1; i++){
    let newInput = input[i].split('');
    console.log(newInput);
    for (let j = 0; j < newInput.length; j++){
        if (newInput[j] == newInput[j+1]){
            count++
        } else if ()
    }
    console.log(count);
}
const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');

const count = +input[0];
let num = 0;
for (let i = 1; i < count; i++){
    const newArr = input[i].split('');
    for (let j = 0; j < newArr.length; j++){
        if (newArr[j] === 'O'){
            let A = 1;
            newArr[j] = A;
        } else if (newArr[j] === 'X'){
            let B = 0;
            newArr[j] = B;
        }
        console.log(newArr);
    }
}


// O => 1
// 0 => 2
// x => 0
// x => 0
// O => 1
// x => 0
// x => 0
// O => 1
// O => 2
// O => 3
const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');

const testCaseNum = Number(input[0]);

for (let i = 1; i <= testCaseNum; ++i){
    const arr = input[i].split(' ');
    // console.log(arr);
    let newArr = [];
    for (let i = 0; i < arr.length; ++i){
        newArr.push(+arr[i]);
    }
    const result = newArr[0] + newArr[1];
    console.log(result);
}



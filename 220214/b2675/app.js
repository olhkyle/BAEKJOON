const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');

const testCaseNum = +input[0];

// const x = input[1].split(' ');
// console.log(x);


for (let i = 1; i <= testCaseNum; i++){
    const firstArr = input[i].split(' ');
    const newArrCase = +firstArr[0];
    // console.log(newArrCase);

    const secondArr = firstArr[1].split('');
    // console.log(secondArr);

    for (let j = 0; j < secondArr.length; j++){
        let newIndex = secondArr[j];
        for (let k = 0; k < newArrCase-1; k++){
            secondArr[j] += newIndex;
        }
    }

    // join('') -> 배열의 ,를 없애며 string으로 만들수 있다. join(',') -> 배열의 ,를 첨가한 채 string으로 바꾼다.
    const result = secondArr.join('');
    console.log(result);
}

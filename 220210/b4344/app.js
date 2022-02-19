const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');

// 첫 테스트 케이스 수 C라는 것은 지키기
const count = +input[0];


for (let i = 1; i<count+1; i++){
    let firstArr = input[i].split(' ');
    let num = +firstArr[0];
    firstArr.shift();
    const average = firstArr.reduce((prev,curr) => Number(prev) + Number(curr), 0)/firstArr.length;
    let filterArr = firstArr.filter(item => item > average);
    // console.log(filterArr);
    let countOverAverage = (filterArr.length / num) * 100;
    // let result = Math.round(countOverAverage * 1000) / 1000 + '%';
    let result = countOverAverage.toFixed(3);
    console.log(result + '%');
}


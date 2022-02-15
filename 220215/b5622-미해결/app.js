const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('');

// 2 - abc(3s) / 3 - def(4s) / 4 - ghi(5s) / 5 - jkl

let arr = [];
let count = 3;
let result = (()=> {
    for (let i = 65; i <= 90; i++){
        const alphabet = String.fromCharCode(i);
        arr.push(alphabet);
        if ((arr.length == 3 && i<80) || (arr.length == 3  && (i>=84 && i<=86))){
            const newArr = arr.filter(item => item).join('');
            arr.splice(0,3)
            count++;
            console.log(newArr);
        } else if (arr.length == 4 && i>=80){
            const newArr = arr.filter(item => item).join('');
            arr.splice(0,4)
            count++
            console.log(newArr);
        }
    }
})






// let count = 0;
// for (let i = 0; i < input.length; i++){
//     input[i] 
// }

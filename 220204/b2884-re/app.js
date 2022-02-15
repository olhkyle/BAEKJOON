const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split(' ');

// let X = +input[0];
// let Y = +input[1];

// Y -= 45;

// if (Y<0){
//     Y += 60;
//     X --;

//     if(X === -1){
//         X += 24;
//     }
// }


// console.log(X,Y);


let hour = Number(input[0]);
let minute = Number(input[1]);

let date = new Date(2022, 02, 04, hour, minute);
console.log(date);

date.setMinutes(date.getMinutes() - 45);
if (minute < 0){
    minute += 60;
}

console.log(date.getHours(), date.getMinutes());
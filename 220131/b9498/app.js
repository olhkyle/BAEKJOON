const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

const a = +input;

if (90 <= a){
    console.log('A');
} else if (80 <= a){
    console.log('B');
} else if (70 <= a) {
    console.log('C');
} else if (60 <= a) {
    console.log('D');
} else {
    console.log('F');
}


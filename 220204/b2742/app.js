const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on('line', function(line){
    input.push(line);
}).on('close', function() {
    input = input.map((item)=> +item);
    solution(input[0]);
    process.exit();
});
solution(input[0]);

function solution(N){
    for (let i = N; i > 0; i--){
        console.log(i);
    }
}

// 시간초과
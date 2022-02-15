function notSelfNum(n){
    let sum = n;
    // 반복문을 통해, 셀프 넘버가 아닌 값을 구할 수 있도록 처음에 10으로 나누었을 때의 나머지를 더하고, 다음은 10으로 나눴을 때 몫을 구할수 있도록 한다.
    while(n>0){
        sum += n%10; // 제일 오른쪽 자리 값을 더함
        n = Math.floor(n/10);
    }
    return sum;
}

// x % 10 은 첫째 자리수를 구할 때 유용하고, x / 10은 둘째 자리 수를 구할 때 유용하다.

// 배열 생성 (초기 값  할당)
const selfNum = new Array(10000);

// 배열 내부를 true로 모두 채운다.
selfNum.fill(true);

for (let i = 1; i<=10000; i++){
    selfNum[notSelfNum(i)] = false;

    if(selfNum[i]){
        console.log(i);
    }
}

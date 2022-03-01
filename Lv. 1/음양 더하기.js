function solution(absolutes, signs) {
    let result = [];
    let sum = 0;
    
    // 1. signs 배열의 불리언 값으로 absolute 값을 변경 
    for(let i = 0; i < signs.length; i++) {
        if(!signs[i]) {
            result.push(-absolutes[i]) ;   
        } else {
            result.push(absolutes[i]);
        }
    }

    // 2. absolutes 배열의 합 구하기 
    
    for(let j = 0; j < result.length; j++) {
        sum = sum + result[j];
    }
    return sum;
    
    
    
}
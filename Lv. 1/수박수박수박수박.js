function solution(n) {
    let answer = '';
    
    // 1. 홀수 - 수 짝수 - 박 입력
    for (let i = 1; i < n + 1; i++) {
        
        if (i % 2 == 1) {
        answer = answer.concat("수");
        } else if (i % 2 == 0) {
        answer = answer.concat("박");
        }
        
    }
    
    
    return answer;
}
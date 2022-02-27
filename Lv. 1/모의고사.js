function solution(answers) {
    let answer = [];
    
    // 1. 수포자가 찍는 방식을 배열로 지정한다. 
    let student_1 = [1, 2, 3, 4, 5];
    let student_2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let student_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count = [0, 0, 0];
    
    // 2. answers 와 찍는 방식을 비교한다. 
    for (let i = 0; i < answers.length; i++) {
        if(student_1[i % 5] === answers[i]) {
            count[0]++;
        }
        
        if(student_2[i % 8] === answers[i]) {
            count[1]++;
        }
            
        if(student_3[i % 10] === answers[i]) {
            count[2]++;
        } 
    }
    
    // 3. 가장 많은 문제를 맞힌 사람을 반환하는 배열을 생성한다.
    
    let max = Math.max(...count);
        
    for(let j = 0; j < count.length; j++) {
         if (count[j] === max) {
            answer.push(j + 1);
        }
    }
    return answer;
}
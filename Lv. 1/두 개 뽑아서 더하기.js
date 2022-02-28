function solution(numbers) {
    let answer = [];
    let new_arr = [];
   
    let sum = 0;
    // 1. 반복문으로 더해서 만들 수 있는 숫자 answer 배열에 넣기. 
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i; j < numbers.length; j++) {
            if (i == j) {
                continue;
            } else {
                sum = numbers[i] + numbers[j];
                answer.push(sum);
                
            }
        }
    }
    console.log(answer);
    
    // 2. 중복 제외하고 answer 배열 만들기. 
    let set = new Set (answer);
    new_arr = Array.from(set);
    new_arr.sort((a,b) => a - b);
    
    
    
    return new_arr;
}
function solution(d, budget) {
    var answer = 0;
    let sum = 0;
    
    d.sort((a,b) => a-b)
    
    if(d.reduce((arr, curr) => arr + curr) <= budget){
        answer = d.length
    } else {
        for (let i = 0; i < d.length; i++){
            sum += d[i]
            if (sum > budget){
                answer = i;
                break;
            }
        }
    }
    return answer;
}
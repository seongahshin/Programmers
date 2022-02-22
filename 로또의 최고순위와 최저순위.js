function solution(lottos, win_nums) {
    let answer = [];
    let count = 0;
    let new_count = 0;
    let first_score;
    let last_score;
    let second_count = 0; 
    
    // 1. 로또번호 배열과 당첨번호 배열을 오름차순으로 정렬한다. 
    lottos.sort((a,b) => a - b);
    win_nums.sort((a,b) => a - b);
    
    // 2. 두 배열 내에 같은 값의 개수를 구한다. 
    for (let i = 0; i < lottos.length; i++) {
        for (let j = 0; j < win_nums.length; j++) {
            if (lottos[i] == win_nums[j]) {
                count ++;
            }
        }
    }
    
    // 3. 최저순위의 경우 (count 수 그대로) 순위를 구한다. 
    
    if (count == 6) {
        answer.push(1);
    } else if (count == 5) {
        answer.push(2);
    } else if (count == 4) {
        answer.push(3);
    } else if (count == 3) {
        answer.push(4);
    } else if (count == 2) {
        answer.push(5)
    } else {
        answer.push(6);
    }
    
    // 4. 최고순위의 경우 (count += 배열 내 0의 개수) 로 계산 후 순위를 구한다.
    for(let k = 0; k < lottos.length; k++) {
        if (lottos[k] == 0) {
            new_count++;
        }
    }
    
    count = count + new_count;
    
    if (count == 6) {
        answer.push(1);
    } else if (count == 5) {
        answer.push(2);
    } else if (count == 4) {
        answer.push(3);
    } else if (count == 3) {
        answer.push(4);
    } else if (count == 2) {
        answer.push(5)
    } else {
        answer.push(6);
    }
    
    console.log(answer);
    
    // 5. 배열을 오름차순으로 정렬한다. 
    answer.sort((a,b) => a - b);

    return answer;
    
}
function solution(array, commands) {
    let answer = [];
    let new_array = [];
    
    for (let t = 0; t < commands.length; t++) {
            i = commands[t][0];
            j = commands[t][1];
            k = commands[t][2];
        
        new_array = array.slice(i - 1, j);
        new_array = new_array.sort((a,b) => a - b);
        answer.push(new_array[k - 1]);
        
      }
    return answer;
}
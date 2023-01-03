// 짝수 홀수 개수
function solution(num_list) {
    var answer = [];
    let left = [];
    let right = [];
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i]%2 === 0){
            left.push(i)
        } else {
            right.push(i)
        }        
    }
    answer = [left.length, right.length]
    return answer;
}
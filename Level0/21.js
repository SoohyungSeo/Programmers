//약수의 개수와 덧셈
function solution(left, right) {
    let answer = 0;
    for(let i = left; i<=right; i++){
        if(Number.isInteger(Math.sqrt(i))){
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
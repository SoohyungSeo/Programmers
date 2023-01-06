//머쓱이보다 키 큰 사람
function solution(array, height) {
    var answer = 0;
    for(let x of array){
        if(x > height){
            answer++
        }
    }
    return answer;
}
//양꼬치
function solution(n, k) {
    var answer = 0;
    let a = n*12000
    let b = k*2000
    let c = Math.floor(a/120000)
    let d = c*2000
    answer = a+=b-=d
    return answer;
}
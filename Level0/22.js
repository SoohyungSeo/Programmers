//진료 순서 정하기
function solution(emergency) {
    let sort = emergency.slice().sort((a,b)=>b-a)
    return emergency.map(v=>sort.indexOf(v) +1)
}
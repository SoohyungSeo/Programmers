//분수의 덧셈
function solution(denum1, num1, denum2, num2) {
    //분자
    let topNum = num1*denum2 + num2*denum1
    //분모
    let botNum = num1*num2
    //약분
    let maxinum = 1
    for(let i = 1; i<= topNum; i++){
        if(topNum%i===0 && botNum%i===0){
            maxinum = i
        }        
    }
    return [topNum/maxinum, botNum/maxinum]
}
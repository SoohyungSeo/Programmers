//문자 반복 출력하기
function solution(my_string, n) {
    answer = [...my_string].map(a => a.repeat(n)).join('')
    return answer
}

let a = "hello"
console.log([...a])
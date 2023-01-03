//아이스 아메리카노
function solution(money) {
    var answer = [];
    let coffee = 0;
    let coin = 0;
    coffee = Math.floor(money/5500)
    coin = money - 5500*coffee
    answer = [coffee,coin]
    return answer;
}
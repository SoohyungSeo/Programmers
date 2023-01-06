function solution(array) {
    let a = Math.floor(array.length/2)
    const re_array = array.sort((a,b)=>a-b);
    return re_array[a]
}
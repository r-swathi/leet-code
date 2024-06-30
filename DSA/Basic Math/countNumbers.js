function countNumbers(N) {
    let num = N;
    let count = 0;
    while(num > 0) {
        console.log(num)
        num = Math.floor(num / 10);
        // num = Number(num / 10);
        count ++;
    }
    return count;
}

console.log(countNumbers(1234))

//  Number 
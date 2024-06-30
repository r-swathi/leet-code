function pallindrome(N) {
    return N === reverseNumber(N);
}

function reverseNumber(N) {
    let num = N
    let reversedNum = 0
    while(num > 0) {
        const lastDigit = num % 10
        reversedNum = (reversedNum * 10) + lastDigit
        num = Math.floor(num / 10)
    }
    return (reversedNum)
}

console.log(pallindrome(1234))
console.log(pallindrome(121))
console.log(pallindrome(0))
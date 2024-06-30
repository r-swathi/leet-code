function reverseNumber(N) {
    let num = N
    // let reversedNum = ''
    let reversedNum = 0
    while(num > 0) {
        const lastDigit = num % 10
        // reversedNum += lastDigit
        reversedNum = (reversedNum * 10) + lastDigit
        num = Math.floor(num / 10)
    }
    // console.log(Math.log2(4321))
    return Math.ceil(reversedNum)
}

console.log(reverseNumber(1234))
console.log(reverseNumber(10400))
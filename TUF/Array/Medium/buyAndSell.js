/* 
Stock Buy And Sell

Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and 
sell on day 5 (price = 6), profit = 6-1 = 5.
*/

function buyAndSell(arr) {
    let profit = 0
    for(let i=0; i<arr.length-1; i++) {
        let max = Math.max(...arr.slice(i+1))
        // console.log(max, max - arr[i], )
        if(max - arr[i] > 0 && profit < max - arr[i]) {
            profit = max - arr[i]
        }
    }
    return profit
}

console.log(buyAndSell([7,2, 1,5,3,6,4,9]))
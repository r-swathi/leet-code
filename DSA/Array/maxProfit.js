/* 
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
*/

// Time complexity - O(n)
const maxProfit = function(prices) {
      let minStockPrice = prices[0]
      let profit = 0
      for(let i=1; i<prices.length; i++) {
        minStockPrice = Math.min(minStockPrice, prices[i])
        profit = (prices[i] - minStockPrice) > profit ?  (prices[i] - minStockPrice) : profit
      }
      return profit;
};

console.log(maxProfit([7,1,5,3,6,4]))
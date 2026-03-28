// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
function maxProfit(prices: number[]): number {
    return solution2(prices);
}



// brute force: time limit exceeded
function solution1(prices: number[]): number {
    let maxp = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            maxp = Math.max(maxp, prices[j] - prices[i]);
        }
    }

    return maxp;
}



// iterative dp: 1 ms
function solution2(prices: number[]): number {
    let maxp = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxp = Math.max(maxp, prices[i] - minPrice);
    }

    return maxp;
}

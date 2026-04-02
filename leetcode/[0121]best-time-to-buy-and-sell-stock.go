// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
func maxProfit(prices []int) int {
	return solution1(prices)
}



// iterative dp:
func solution1(prices []int) int {
	maxProfit := 0
	minPrice := prices[0]

	for i := 1; i < len(prices); i++ {
		minPrice = min(minPrice, prices[i])
		maxProfit = max(maxProfit, prices[i]-minPrice)
	}

	return maxProfit
}

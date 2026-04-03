// https://leetcode.com/problems/single-number/
import (
	"slices"
)

func singleNumber(nums []int) int {
	return solution3(nums)
}



// xor: 0 ms
func solution1(nums []int) int {
	acc := nums[0]
	for _, x := range nums[1:] {
		acc ^= x
	}

	return acc
}



// calc: 0 ms
func solution2(nums []int) int {
	sum := 0
	for _, x := range nums {
		sum += x
	}

	set := map[int]struct{}{}
	for _, x := range nums {
		set[x] = struct{}{}
	}
	setsum := 0
	for k, _ := range set {
		setsum += k
	}

	return setsum*2 - sum
}



// sort and check adjacent: 1 ms
func solution3(nums []int) int {
	slices.Sort(nums)

	for i := 0; i < len(nums); i += 2 {
		if i == len(nums)-1 {
			return nums[i]
		}

		if nums[i] != nums[i+1] {
			return nums[i]
		}
	}

	// unreachable
	return 0
}

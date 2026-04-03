// https://leetcode.com/problems/majority-element/
import (
	"cmp"
	"slices"
)

func majorityElement(nums []int) int {
	return solution4(nums)
}

// sort and pick middle: 0 ms
func solution1(nums []int) int {
	slices.Sort(nums)

	return nums[len(nums)/2]
}

// counting: 0 ms
func solution2(nums []int) int {
	count := map[int]int{}

	for _, x := range nums {
		count[x] += 1
	}

	type Entry[K any, V cmp.Ordered] struct {
		Key   K
		Value V
	}

	sortedCount := []Entry[int, int]{}
	for k, v := range count {
		sortedCount = append(sortedCount, Entry[int, int]{k, v})
	}
	slices.SortFunc(sortedCount, func(x, y Entry[int, int]) int {
		return -(x.Value - y.Value)
	})

	return sortedCount[0].Key
}

// moore's voting: 0 ms
func solution3(nums []int) int {
	n, count := nums[0], 1

	for _, x := range nums[1:] {
		if count == 0 {
			n = x
			count = 1
		} else if n == x {
			count += 1
		} else {
			count -= 1
		}
	}

	return n
}

// divide and conquer: 0 ms
func solution4(nums []int) int {
	type NC struct {
		Num   int
		Count int
	}

	var dac func([]int) NC
	dac = func(nums []int) NC {
		if len(nums) == 1 {
			return NC{nums[0], 1}
		}

		m := len(nums) / 2
		l := dac(nums[:m])
		r := dac(nums[m:])

		if l.Num == r.Num {
			return NC{l.Num, l.Count + r.Count}
		} else if l.Count > r.Count {
			return NC{l.Num, l.Count - r.Count}
		} else if l.Count < r.Count {
			return NC{r.Num, r.Count - l.Count}
		} else {
			return NC{l.Num, 0}
		}
	}

	return dac(nums).Num
}

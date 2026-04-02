// https://leetcode.com/problems/pascals-triangle/
func generate(numRows int) [][]int {
	return solution2(numRows)
}



// iterative dp: 0 ms
func solution1(numRows int) [][]int {
	a := [][]int{{1}}

	for i := 2; i <= numRows; i++ {
		tmpA := append([]int{0}, a[len(a)-1]...)
		tmpB := append(append([]int{}, a[len(a)-1]...), 0)

		b := make([]int, len(tmpA))
		for j := 0; j < len(tmpA); j++ {
			b[j] = tmpA[j] + tmpB[j]
		}

		a = append(a, b)
	}

	return a
}



// recursive dp: 0 ms
func solution2(numRows int) [][]int {
	if numRows < 2 {
		return [][]int{{1}}
	}

	a := solution2(numRows - 1)

	tmpA := append([]int{0}, a[len(a)-1]...)
	tmpB := append(append([]int{}, a[len(a)-1]...), 0)

	b := make([]int, len(tmpA))
	for j := 0; j < len(tmpA); j++ {
		b[j] = tmpA[j] + tmpB[j]
	}

	return append(a, b)
}

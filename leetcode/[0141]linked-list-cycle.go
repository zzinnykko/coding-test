// https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func hasCycle(head *ListNode) bool {
	return solution1(head)
}



// hare and tortoise: 0 ms
func solution1(head *ListNode) bool {
	hare, tort := head, head

	for hare != nil && hare.Next != nil {
		hare = hare.Next.Next
		tort = tort.Next

		if hare == tort {
			return true
		}
	}

	return false
}

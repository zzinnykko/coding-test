// https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseList(head *ListNode) *ListNode {
	return solution2(head)
}



// iterative: 0 ms
func solution1(head *ListNode) *ListNode {
	var p *ListNode
	n := head

	for n != nil {
		n.Next, n, p = p, n.Next, n
	}

	return p
}



// recursive: 0 ms
func solution2(head *ListNode) *ListNode {
	var rec func(*ListNode, *ListNode) *ListNode
	rec = func(n *ListNode, p *ListNode) *ListNode {
		if n == nil {
			return p
		}

		t := n.Next
		n.Next = p
		return rec(t, n)
	}

	return rec(head, nil)
}

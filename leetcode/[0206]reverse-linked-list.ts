// https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


// iterative: 2 ms
function reverseList(head: ListNode | null): ListNode | null {
    let [p, n] = [null, head] as [ListNode | null, ListNode | null];
    
    while (n) {
        [n.next, n, p] = [p, n.next, n];
    }

    return p;
}

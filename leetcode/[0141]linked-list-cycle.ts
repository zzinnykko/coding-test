// https://leetcode.com/problems/linked-list-cycle/

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

function hasCycle(head: ListNode | null): boolean {
    return solution1(head);
}



// hare and tortoise: 44 ms
function solution1(head: ListNode | null): boolean {
    if (!head || !head.next) return false;

    let [s, f] = [head, head];
    while (f && f.next) {
        s = s.next!;
        f = f.next.next!;

        if (s === f) return true;
    }

    return false;
}

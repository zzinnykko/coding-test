// https://leetcode.com/problems/intersection-of-two-linked-lists/

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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    return solution1(headA, headB);
}



// run twise: 58 ms
function solution1(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let [a, b] = [headA, headB];

    while (true) {
        if (a === b) return a;

        a = a.next!;
        b = b.next!;

        if (!a && !b) break;

        if (!a) a = headB;
        if (!b) b = headA;
    }

    return null;
}

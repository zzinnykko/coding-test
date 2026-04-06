// https://leetcode.com/problems/add-two-numbers/

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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    return solution2(l1, l2);
}



// iterative: 2 ms
function solution1(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode();
    let n = dummy;

    let c = 0;
    while (l1 || l2 || c > 0) {
        let sum = c;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        c = Math.trunc(sum / 10);
        n.next = new ListNode(sum % 10);
        n = n.next;
    }

    return dummy.next;
}



// recursive: 4 ms
function solution2(l1: ListNode | null, l2: ListNode | null, c: number = 0): ListNode | null {
    if (l1 || l2 || c > 0) {
        let sum = c;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        const n = new ListNode(sum % 10);
        n.next = solution2(l1, l2, Math.trunc(sum / 10));

        return n;
    } else {
        return null;
    }
}

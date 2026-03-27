// https://leetcode.com/problems/merge-two-sorted-lists/

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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    return solution2(list1, list2);
}



// iterative: 5 ms
function solution1(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy = new ListNode();
    let n = dummy;

    while (list1 && list2) {
        if (list1.val > list2.val) {
            [list1, list2] = [list2, list1];
        }

        [n.next, n, list1] = [list1, list1, list1.next];
    }
    n.next = list1 || list2;

    return dummy.next;
}



// recursive: 0 ms
function solution2(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 && list2) {
        if (list1.val > list2.val) {
            [list1, list2] = [list2, list1];
        }
        list1.next = solution2(list1.next, list2);

        return list1;
    } else if (list1 || list2) {
        return list1 || list2;
    } else {
        return null;
    }
}

// https://leetcode.com/problems/merge-two-sorted-lists/

// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
// 
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
impl Solution {
    pub fn merge_two_lists(list1: Option<Box<ListNode>>, list2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        return solution2(list1, list2);
    }
}



// iterative: 0 ms
fn solution1(list1: Option<Box<ListNode>>, list2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    use std::mem::swap;
    
    let (mut l1, mut l2) = (list1, list2);
    let mut dummy = Some(Box::new(ListNode::new(0)));
    let mut n = &mut dummy;

    while l1.is_some() && l2.is_some() {
        if l1.as_ref()?.val > l2.as_ref()?.val {
            swap(&mut l1, &mut l2);
        }

        let mut t = l1;
        l1 = t.as_mut()?.next.take();
        n.as_mut()?.next = t;
        n = &mut n.as_mut()?.next;
    }
    n.as_mut()?.next = if l1.is_some() { l1 } else { l2 };

    return dummy?.next;
}



// recursive: 0 ms
fn solution2(list1: Option<Box<ListNode>>, list2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    use std::mem::swap;

    let (mut l1, mut l2) = (list1, list2);

    match (&l1, &l2) {
        (Some(x), Some(y)) => {
            if x.val > y.val {
                swap(&mut l1, &mut l2);
            }

            l1.as_mut()?.next = solution2(l1.as_mut()?.next.take(), l2);
            return l1;
        }
        (Some(x), None) => {
            return l1;
        }
        (None, Some(y)) => {
            return l2;
        }
        (None, None) => {
            return None;
        }
    }
}

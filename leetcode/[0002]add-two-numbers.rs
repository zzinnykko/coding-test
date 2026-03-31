// https://leetcode.com/problems/add-two-numbers/

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
    pub fn add_two_numbers(l1: Option<Box<ListNode>>, l2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        return solution2(l1, l2);
    }
}



// iterative: 0 ms
fn solution1(l1: Option<Box<ListNode>>, l2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    let (mut l1, mut l2) = (&l1, &l2);
    let mut dummy = Some(Box::new(ListNode::new(0)));
    let mut n = &mut dummy;

    let mut c = 0;
    while l1.is_some() || l2.is_some() || c > 0 {
        let mut sum = c;
        if l1.is_some() {
            sum += l1.as_ref()?.val;
            l1 = &l1.as_ref()?.next;
        }
        if l2.is_some() {
            sum += l2.as_ref()?.val;
            l2 = &l2.as_ref()?.next;
        }

        c = sum / 10;
        n.as_mut()?.next = Some(Box::new(ListNode::new(sum % 10)));
        n = &mut n.as_mut()?.next;
    }

    return dummy?.next;
}



// recursive: 0 ms
fn solution2(l1: Option<Box<ListNode>>, l2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    return rec(&l1, &l2, 0);
}
fn rec(mut l1: &Option<Box<ListNode>>, mut l2: &Option<Box<ListNode>>, c: i32) -> Option<Box<ListNode>> {
    if l1.is_some() || l2.is_some() || c > 0 {
        let mut sum = c;
        if l1.is_some() {
            sum += l1.as_ref()?.val;
            l1 = &l1.as_ref()?.next;
        }
        if l2.is_some() {
            sum += l2.as_ref()?.val;
            l2 = &l2.as_ref()?.next;
        }

        let mut n = Some(Box::new(ListNode::new(sum % 10)));
        n.as_mut()?.next = rec(l1, l2, sum / 10);

        return n;
    } else {
        return None;
    }
}

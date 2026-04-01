// https://leetcode.com/problems/binary-tree-inorder-traversal/

// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
// 
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn inorder_traversal(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
        return solution2(root);
    }
}



// recursive: 0 ms
fn solution1(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
    let mut a = Vec::<i32>::new();
    let mut root = root;

    rec(&root, &mut a);

    return a;
}
fn rec(n: &Option<Rc<RefCell<TreeNode>>>, a: &mut Vec<i32>) {
    if n.is_some() {
        rec(&n.as_ref().unwrap().borrow().left, a);
        a.push(n.as_ref().unwrap().borrow().val);
        rec(&n.as_ref().unwrap().borrow().right, a);
    }
}



// iterative: 0 ms
fn solution2(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
    if !root.is_some() {
        return vec![];
    }
    
    let mut a = Vec::<i32>::new();
    let mut st = vec![(root.clone(), false)];

    while st.len() > 0 {
        let (n, v) = st.pop().unwrap();

        if n.is_some() {
            if v {
                a.push(n.as_ref().unwrap().borrow().val);
            } else {
                st.push((n.as_ref().unwrap().borrow().right.clone(), false));
                st.push((n.clone(), true));
                st.push((n.as_ref().unwrap().borrow().left.clone(), false));
            }
        }
    }

    return a;
}

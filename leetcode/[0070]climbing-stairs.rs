// https://leetcode.com/problems/climbing-stairs/
impl Solution {
    pub fn climb_stairs(n: i32) -> i32 {
        return solution3(n);
    }
}



// iterative dp: 0 ms
fn solution1(n: i32) -> i32 {
    let (mut a, mut b) = (1, 2);

    for i in 2..=n {
        (a, b) = (b, a + b);
    }

    return a;
}



// recursive dp: time limit exceeded
fn solution2(n: i32) -> i32 {
    return if n < 3 { n } else { solution2(n - 2) + solution2(n - 1) };
}


// recursive dp with memoization: 0 ms
use std::collections::HashMap;

fn solution3(n: i32) -> i32 {
    let mut h = HashMap::<i32, i32>::new();

    return rec(n, &mut h);
}
fn rec(n: i32, h: &mut HashMap<i32, i32>) -> i32 {
    if n < 3 {
        return n;
    }

    if !h.contains_key(&n) {
        let t = rec(n - 2, h) + rec(n - 1, h);
        h.insert(n, t);
    }

    return *h.get(&n).unwrap();
}

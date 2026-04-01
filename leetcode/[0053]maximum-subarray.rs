// https://leetcode.com/problems/maximum-subarray/
impl Solution {
    pub fn max_sub_array(nums: Vec<i32>) -> i32 {
        return solution3(nums);
    }
}



// brute force: time limit exceeded
fn solution1(nums: Vec<i32>) -> i32 {
    use std::cmp::max;
    
    let mut max_sub = i32::MIN;

    for i in 0..nums.len() {
        let mut sub_total = 0;
        for j in i..nums.len() {
            sub_total += nums[j];

            max_sub = max(max_sub, sub_total);
        }
    }

    return max_sub;
}



// kadane's algo: 3 ms
fn solution2(nums: Vec<i32>) -> i32 {
    use std::cmp::max;
    
    let mut max_subs = vec![0; nums.len()];
    max_subs[0] = nums[0];
    let mut max_sub = nums[0];

    for (i, &x) in (1..).zip(nums[1..].iter()) {
        max_subs[i] = max(max_subs[i - 1] + x, x);
        max_sub = max(max_sub, max_subs[i]);
    }

    return max_sub;
}



// divide and conquer: 3 ms
fn solution3(nums: Vec<i32>) -> i32 {
    return dac(&nums)[1];
}
fn dac(nums: &[i32]) -> [i32; 4] {
    use std::cmp::max;

    if nums.len() == 1 {
        return [nums[0], nums[0], nums[0], nums[0]];
    }

    let m = nums.len() / 2;
    let [ll, lm, lr, lt] = dac(&nums[..m]);
    let [rl, rm, rr, rt] = dac(&nums[m..]);

    return [max(ll, lt + rl), max(lm, max(lr + rl, rm)), max(lr + rt, rr), lt + rt];
}

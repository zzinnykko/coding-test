// https://leetcode.com/problems/search-insert-position/
impl Solution {
    pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
        return solution1(nums, target);
    }
}



// binary search: 0 ms
fn solution1(nums: Vec<i32>, target: i32) -> i32 {
    let (mut i, mut j) = (0, nums.len());

    while i < j {
        let m = i + (j - i) / 2;

        match nums[m] < target {
            true => { i = m + 1; }
            false => { j = m; }
        }
    }

    return i as i32;
}

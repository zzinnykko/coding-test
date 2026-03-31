// https://leetcode.com/problems/two-sum/
impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        return solution3(nums, target);
    }
}



// brute force: 14 ms
fn solution1(nums: Vec<i32>, target: i32) -> Vec<i32> {
    for i in 0..(nums.len() - 1) {
        for j in (i + 1)..nums.len() {
            if nums[i] + nums[j] == target {
                return vec![i as i32, j as i32];
            }
        }
    }

    unreachable!();
}



// hash table: 0 ms
fn solution2(nums: Vec<i32>, target: i32) -> Vec<i32> {
    use std::collections::HashMap;

    let mut h = HashMap::<i32, i32>::new();

    for (i, &x) in nums.iter().enumerate() {
        let y = target - x;
        if let Some(&j) = h.get(&y) {
            return vec![j, i as i32];
        }

        h.insert(x, i as i32);
    }

    unreachable!();
}



// sort and two pointers: 0 ms
fn solution3(nums: Vec<i32>, target: i32) -> Vec<i32> {
    use std::cmp::Ordering;

    struct IdxVal {
        idx: usize,
        val: i32,
    }

    let mut nums = nums
        .into_iter()
        .enumerate()
        .map(|(i, x)| IdxVal{idx: i, val: x})
        .collect::<Vec<IdxVal>>();
    nums.sort_by_key(|x| x.val);

    let (mut i, mut j) = (0, nums.len() - 1);
    while i < j {
        match (nums[i].val + nums[j].val).cmp(&target) {
            Ordering::Less => {
                i += 1;
            }
            Ordering::Greater => {
                j -= 1;
            }
            Ordering::Equal => {
                return vec![nums[i].idx as i32, nums[j].idx as i32];
            }
        }
    }

    unreachable!();
}

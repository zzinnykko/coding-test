// https://leetcode.com/problems/longest-substring-without-repeating-characters/
impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {
        return solution2(s);
    }
}



// brute force: time limit exceeded
fn solution1(s: String) -> i32 {
    use std::collections::HashSet;

    let s = s.chars().collect::<Vec<char>>();

    for size in (1..=s.len()).rev() {
        for i in 0..=(s.len() - size) {
            let slice = &s[i..(i + size)];
            let set = HashSet::<&char>::from_iter(slice);
            if slice.len() == set.len() {
                return size as i32;
            }
        }
    }

    return 0;
}



// calc prev index: 0 ms
fn solution2(s: String) -> i32 {
    use std::cmp::max;

    let s = s.chars().collect::<Vec<char>>();
    let mut maxl = 0;

    let mut prev_i = 0;
    for (i, &x) in s.iter().enumerate() {
        if let Some(idx) = s[prev_i..i].into_iter().position(|y| *y == x) {
            prev_i += idx + 1;
        }

        maxl = max(maxl, i - prev_i + 1);
    }

    return maxl as i32;
}

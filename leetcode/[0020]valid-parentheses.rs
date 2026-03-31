// https://leetcode.com/problems/valid-parentheses/
impl Solution {
    pub fn is_valid(s: String) -> bool {
        return solution2(s);
    }
}



// remove valid pairs: 60 ms
fn solution1(s: String) -> bool {
    let mut p = String::from("");
    let mut s = s;

    while p != s {
        p = s.clone();
        s = s.replace("()", "").replace("{}", "").replace("[]", "");
    }

    return p == String::from("");
}



// stack: 0 ms
fn solution2(s: String) -> bool {
    use std::collections::HashMap;

    let h = HashMap::from([
        (')', '('), ('}', '{'), (']', '['),
    ]);
    let mut st = Vec::<char>::new();

    for x in s.chars() {
        match h.contains_key(&x) {
            true => {
                if st.len() == 0 || st.pop().unwrap() != *h.get(&x).unwrap() {
                    return false;
                }
            }
            false => {
                st.push(x);
            }
        }
    }

    return st.len() == 0;
}

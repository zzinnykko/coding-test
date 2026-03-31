// https://leetcode.com/problems/roman-to-integer/
impl Solution {
    pub fn roman_to_int(s: String) -> i32 {
        return solution2(s);
    }
}



// conv IV to IIII: 4 ms
fn solution1(s: String) -> i32 {
    let s = s
        .replace("IV", "IIII")
        .replace("IX", "VIIII")
        .replace("XL", "XXXX")
        .replace("XC", "LXXXX")
        .replace("CD", "CCCC")
        .replace("CM", "DCCCC");
    
    return s.chars().fold(0, |acc, x| {
        return acc + match x {
            'I' => 1,
            'V' => 5,
            'X' => 10,
            'L' => 50,
            'C' => 100,
            'D' => 500,
            'M' => 1_000,
            _ => 0,
        };
    });
}



// calc from right: 2 ms
fn solution2(s: String) -> i32 {
    return s.chars().rfold(0, |acc, x| {
        return acc + match x {
            'I' => if acc < 5 { 1 } else { -1 },
            'V' => 5,
            'X' => if acc < 50 { 10 } else { -10 },
            'L' => 50,
            'C' => if acc < 500 { 100 } else { -100 },
            'D' => 500,
            'M' => 1_000,
            _ => 0,
        };
    });
}

// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
impl Solution {
    pub fn letter_combinations(digits: String) -> Vec<String> {
        return solution1(digits);
    }
}



// cartesian production: 0 ms
fn solution1(digits: String) -> Vec<String> {
    use std::collections::HashMap;

    let h = HashMap::from([
        ('2', vec!['a', 'b', 'c']),
        ('3', vec!['d', 'e', 'f']),
        ('4', vec!['g', 'h', 'i']),
        ('5', vec!['j', 'k', 'l']),
        ('6', vec!['m', 'n', 'o']),
        ('7', vec!['p', 'q', 'r', 's']),
        ('8', vec!['t', 'u', 'v']),
        ('9', vec!['w', 'x', 'y', 'z']),
    ]);
    
    let digits = digits
        .chars()
        .map(|x| h.get(&x).unwrap())
        .collect::<Vec<&Vec<char>>>();

    let mut a = Vec::<Vec<char>>::new();
    a.push(vec![]);

    for i in 0..digits.len() {
        let mut tmp = Vec::<Vec<char>>::new();

        for seed in a.iter() {
            for &x in digits[i].iter() {
                let mut t = seed.clone();
                t.push(x);
                tmp.push(t);
            }
        }

        a = tmp;
    }

    let a = a
        .into_iter()
        .map(|x| String::from_iter(x))
        .collect::<Vec<String>>();

    return a;
}

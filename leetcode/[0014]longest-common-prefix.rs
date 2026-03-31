// https://leetcode.com/problems/longest-common-prefix/
impl Solution {
    pub fn longest_common_prefix(strs: Vec<String>) -> String {
        return solution3(strs);
    }
}



// comp first to others: 0 ms
fn solution1(strs: Vec<String>) -> String {
    let strs = strs
        .into_iter()
        .map(|str| str.chars().collect::<Vec<char>>())
        .collect::<Vec<Vec<char>>>();
    
    let mut first = strs[0].clone();

    for other in strs[1..].iter() {
        while !other.starts_with(&first) {
            first.pop();
        }
    }

    return String::from_iter(first);
}



// comp each char: 0 ms
fn solution2(strs: Vec<String>) -> String {
    let strs = strs
        .into_iter()
        .map(|str| str.chars().collect::<Vec<char>>())
        .collect::<Vec<Vec<char>>>();

    let mut a = String::new();

    'outer:
    for i in 0.. {
        let mut tmp = vec![];

        for str in strs.iter() {
            match str.get(i) {
                Some(&x) => {
                    tmp.push(x);
                }
                None => {
                    break 'outer;
                }
            }
        }
        
        let t = tmp[0];
        if tmp.into_iter().any(|x| x != t) {
            break 'outer;
        }

        a.push(t);
    }

    return a;
}



// trie: 0 ms
fn solution3(strs: Vec<String>) -> String {
    use std::collections::HashMap;
    
    struct TrieNode {
        end: bool,
        children: HashMap<char, Self>,
    }

    impl TrieNode {
        fn new() -> Self {
            return Self {
                end: false,
                children: HashMap::new(),
            }
        }
    }

    let mut trie = TrieNode::new();

    let strs = strs
        .into_iter()
        .map(|str| str.chars().collect::<Vec<char>>())
        .collect::<Vec<Vec<char>>>();
    
    for str in strs.iter() {
        let mut n = &mut trie;

        for &x in str.iter() {
            if !n.children.contains_key(&x) {
                n.children.insert(x, TrieNode::new());
            }

            n = n.children.get_mut(&x).unwrap();
        }
        n.end = true;
    }

    let mut a = String::new();
    let mut n = &mut trie;
    while !n.end && n.children.len() == 1 {
        let k = *n.children.keys().collect::<Vec<&char>>()[0];
        a.push(k);
        n = n.children.get_mut(&k).unwrap();
    }

    return a;
}

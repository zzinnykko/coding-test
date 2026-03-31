// https://leetcode.com/problems/permutations/
impl Solution {
    pub fn permute(nums: Vec<i32>) -> Vec<Vec<i32>> {
        return solution2(nums);
    }
}



// assemble permutations: 0 ms
fn solution1(nums: Vec<i32>) -> Vec<Vec<i32>> {
    let k = nums.len();
    
    return permute1(nums, k);
}
fn permute1<T: Clone>(src: Vec<T>, k: usize) -> Vec<Vec<T>> {
    use std::cmp::min;

    let k = min(k, src.len());
    let pool = Vec::from_iter(0..src.len());

    let mut a = Vec::<Vec<usize>>::new();
    a.push(vec![]);

    for i in 0..k {
        let mut tmp = Vec::<Vec<usize>>::new();

        for seed in a.iter() {
            for &x in pool.iter() {

                if seed.contains(&x) {
                    continue;
                }

                let mut t = seed.clone();
                t.push(x);
                tmp.push(t);
            }
        }

        a = tmp;
    }

    let a = a
        .into_iter()
        .map(|v| v.into_iter().map(|i| src[i].clone()).collect::<Vec<T>>())
        .collect::<Vec<Vec<T>>>();
    
    return a;
}



// assemble permutations2: 0 ms
fn solution2(nums: Vec<i32>) -> Vec<Vec<i32>> {
    let k = nums.len();

    return permute2(nums, k);
}
fn permute2<T: Clone>(src: Vec<T>, k: usize) -> Vec<Vec<T>> {
    use std::cmp::min;

    let k = min(k, src.len());
    let mut a = Vec::<Vec<usize>>::new();
    
    let mut seed = (0..k).collect::<Vec<usize>>();
    let mut idx = k - 1;

    'outer:
    loop {
        a.push(seed.clone());

        loop {
            seed[idx] += 1;

            if seed[idx] == src.len() {
                idx -= 1;

                if (idx as isize) < 0 {
                    break 'outer;
                }

                continue;
            }

            if seed[0..idx].contains(&seed[idx]) {
                continue;
            }

            let mut n = 0;
            for j in (idx + 1)..k {
                while seed[0..j].contains(&n) {
                    n += 1;
                }

                seed[j] = n;
            }

            idx = k - 1;
            break;
        }
    }

    let a = a
        .into_iter()
        .map(|v| v.into_iter().map(|i| src[i].clone()).collect::<Vec<T>>())
        .collect::<Vec<Vec<T>>>();

    return a;
}

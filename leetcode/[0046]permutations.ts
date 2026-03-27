// https://leetcode.com/problems/permutations/
function permute(nums: number[]): number[][] {
    return solution2(nums);
}



// remove duplicates from all cases: 4 ms
function solution1(nums: number[]): number[][] {
    return [...permute1(nums, nums.length)];
}
function* permute1<T>(src: T[], k: number): Generator<T[]> {
    k = Math.max(Math.min(src.length, k), 0);
    const seeds = Array.from({ length: src.length }, (_, i) => i);

    let pools = [[]] as number[][];
    for (let i = 0; i < k; i++) {
        const tmp = [];
        for (const pool of pools) {
            for (const x of seeds) {

                if (pool.indexOf(x) !== -1) continue;

                tmp.push([...pool, x]);
            }
        }
        pools = tmp;
    }

    for (const pool of pools) {
        yield pool.map((i) => src[i]);
    }
}



// assemble permutation: 3 ms
function solution2(nums: number[]): number[][] {
    return [...permute2(nums, nums.length)];
}
function* permute2<T>(src: T[], k: number): Generator<T[]> {
    k = Math.max(Math.min(src.length, k), 0);
    const n = src.length;
    const pool = Array.from({ length: k }, (_, i) => i);

    let idx = k - 1;
    while (true) {
        yield pool.map((i) => src[i]);

        while (true) {
            pool[idx] += 1;

            if (pool[idx] === n) {
                idx -= 1;
                if (idx < 0) return;

                continue;
            }

            if (pool.slice(0, idx).indexOf(pool[idx]) !== -1) continue;

            let i = 0;
            for (let j = idx + 1; j < k; j++) {
                while (pool.slice(0, idx + 1).indexOf(i) !== -1) {
                    i += 1;
                }
                pool[j] = i;
                i += 1;
            }

            idx = k - 1;
            break;
        }
    }
}

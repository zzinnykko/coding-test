// https://leetcode.com/problems/majority-element/
function majorityElement(nums: number[]): number {
    return solution4(nums);
}



// sort and pick center: 5 ms
function solution1(nums: number[]): number {
    nums.sort((x, y) => x - y);

    return nums[Math.trunc(nums.length / 2)];
}



// counting: 12 ms
function solution2(nums: number[]): number {
    const h = new Map<number, number>();

    for (const x of nums) {
        if (!h.has(x)) {
            h.set(x, 1);
        } else {
            h.set(x, h.get(x)! + 1);
        }
    }

    let maxc = 0;
    let maxk = Number.MAX_SAFE_INTEGER;
    for (const [k, v] of h) {
        if (maxc < v) {
            maxc = v;
            maxk = k;
        }
    }

    return maxk;
}



// divide and conquer: 22 ms
function solution3(nums: number[]): number {
    return dac(nums)[0];
}
function dac(nums: number[]): [number, number] {
    if (nums.length === 1) return [nums[0], 1];

    const m = Math.trunc(nums.length / 2);
    const [lk, lv] = dac(nums.slice(0, m));
    const [rk, rv] = dac(nums.slice(m,));

    if (lk === rk) return [lk, lv + rv];
    else if (lv > rv) return [lk, lv - rv];
    else if (lv < rv) return [rk, rv - lv];
    else return [Number.MAX_SAFE_INTEGER, 0];
}



// moore's voting: 4 ms
function solution4(nums: number[]): number {
    let count = 0;
    let pick = Number.MAX_SAFE_INTEGER;

    for (const x of nums) {
        if (count === 0) {
            count = 1;
            pick = x;
        } else {
            count += (pick === x) ? 1 : -1;
        }
    }

    return pick;
}

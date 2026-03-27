// https://leetcode.com/problems/maximum-subarray/
function maxSubArray(nums: number[]): number {
    return solution3(nums);
}



// brute force: time limit exceeded
function solution1(nums: number[]): number {
    let maxs = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++) {
        let subtotal = 0;
        for (let j = i; j < nums.length; j++) {
            subtotal += nums[j];
            maxs = Math.max(maxs, subtotal);
        }
    }

    return maxs;
}



// kadane's algorithm: 4 ms
function solution2(nums: number[]): number {
    const maxs = Array(nums.length).fill(0);
    maxs[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        maxs[i] = Math.max(maxs[i - 1] + nums[i], nums[i]);
    }

    return Math.max(...maxs);
}



// divide and conquer: 10 ms
function solution3(nums: number[]): number {
    return dac(nums)[1];
}
function dac(nums: number[]): [number, number, number, number] {
    if (nums.length === 1) return [nums[0], nums[0], nums[0], nums[0]];

    const m = Math.trunc(nums.length / 2);
    const [ll, lm, lr, lt] = dac(nums.slice(0, m));
    const [rl, rm, rr, rt] = dac(nums.slice(m,));

    return [
        Math.max(ll, lt + rl),
        Math.max(lm, lr + rl, rm),
        Math.max(lr + rt, rr),
        lt + rt
    ];
}

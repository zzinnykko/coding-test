// https://leetcode.com/problems/single-number/
function singleNumber(nums: number[]): number {
    return solution4(nums);
}



// calculation: 4 ms
function solution1(nums: number[]): number {
    const a = nums.reduce((x, y) => x + y);
    const b = [...new Set(nums)].reduce((x, y) => x + y) * 2;

    return b - a;
}



// xor: 1 ms
function solution2(nums: number[]): number {
    return nums.reduce((x, y) => x ^ y);
}



// counting: 8 ms
function solution3(nums: number[]): number {
    const h = new Map<number, number>();

    for (const x of nums) {
        if (!h.has(x)) {
            h.set(x, 1);
        } else {
            h.set(x, h.get(x)! + 1);
        }
    }

    for (const [k, v] of h) {
        if (v === 1) return k;
    }

    // unreachable
    return 0;
}



// sort and check adjacent: 10 ms
function solution4(nums: number[]): number {
    nums.sort((x, y) => x - y);

    for (let i = 0; i < nums.length; i += 2) {
        if (nums[i] !== nums[i + 1]) return nums[i];
    }

    // unreachable
    return 0;
}

// https://leetcode.com/problems/two-sum/
function twoSum(nums: number[], target: number): number[] {
    return solution2(nums, target);
}



// brute force: 33 ms
function solution1(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

    // unreachable
    return [];
}



// hash table: 7 ms
function solution2(nums: number[], target: number): number[] {
    const h = new Map<number, number>();

    for (const [i, x] of nums.entries()) {
        const y = target - x;
        if (h.has(y)) {
            return [h.get(y)!, i];
        } else {
            h.set(x, i);
        }
    }

    // unreachable
    return [];
}

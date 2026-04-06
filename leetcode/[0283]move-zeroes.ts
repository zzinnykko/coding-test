// https://leetcode.com/problems/move-zeroes/

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    return solution2(nums);
}



// two pointers: 8 ms
function solution1(nums: number[]): void {
    let z = nums.indexOf(0);
    for (const [i, x] of nums.entries()) {
        if (z === -1) break;

        if (x !== 0 && z < i) {
            nums[z] = x;
            nums[i] = 0;

            z = nums.indexOf(0, z + 1);
        }
    }
}



// window size: 11 ms
function solution2(nums: number[]): void {
    let size = 0;
    for (const [i, x] of nums.entries()) {
        if (x === 0) {
            size += 1;
        } else {
            [nums[i], nums[i - size]] = [nums[i - size], nums[i]];
        }
    }
}

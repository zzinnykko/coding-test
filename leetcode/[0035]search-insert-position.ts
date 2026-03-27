// https://leetcode.com/problems/search-insert-position/
function searchInsert(nums: number[], target: number): number {
    return solution1(nums, target);
}



// binary search: 0 ms
function solution1(nums: number[], target: number): number {
    let [i, j] = [0, nums.length];

    while (i < j) {
        const m = i + Math.trunc((j - i) / 2);

        if (nums[m] < target) i = m + 1;
        else j = m;
    }

    return i;
}

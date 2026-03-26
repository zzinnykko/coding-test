// https://leetcode.com/problems/two-sum/
function twoSum(nums: number[], target: number): number[] {
    return solution3(nums, target);
}



// brute force: 33 ms
function solution1(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }

    // unreachable
    return [];
}



// hash table: 3 ms
function solution2(nums: number[], target: number): number[] {
    const h = new Map<number, number>();

    for (const [i, x] of nums.entries()) {
        const y = target - x;
        if (h.has(y)) return [h.get(y)!, i];

        h.set(x, i);
    }

    // unreachable
    return [];
}



// sort and two pointers: 7 ms
function solution3(nums: number[], target: number): number[] {
    const nums2 = nums
        .map((x, i) => ({ idx: i, val: x }))
        .sort((x, y) => x.val - y.val);

    let [i, j] = [0, nums2.length - 1];
    while (i < j) {
        const sum = nums2[i].val + nums2[j].val;
        if (sum < target) i += 1;
        else if (target < sum) j -= 1;
        else return [nums2[i].idx, nums2[j].idx];
    }

    // unreachable
    return [];
}

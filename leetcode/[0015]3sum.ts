// https://leetcode.com/problems/3sum/
function threeSum(nums: number[]): number[][] {
    return solution3(nums);
}



// brute force: time limit exceeded
function solution1(nums: number[]): number[][] {
    const set = new Set<string>();

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if ((nums[i] + nums[j] + nums[k]) === 0) {
                    const t = [nums[i], nums[j], nums[k]].toSorted((x, y) => x - y);
                    set.add(JSON.stringify(t));
                }
            }
        }
    }

    return [...set.keys()].map((x) => JSON.parse(x));
}



// sort and binary search: 2638 ms
function solution2(nums: number[]): number[][] {
    const set = new Set<string>();
    nums.sort((x, y) => x - y);

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 2; j < nums.length; j++) {
            const k = bSearch(nums, i + 1, j - 1, 0 - nums[i] - nums[j]);
            if (k === -1) continue;

            set.add(JSON.stringify([nums[i], nums[k], nums[j]]));
        }
    }

    return [...set.keys()].map((x) => JSON.parse(x));
}

type Comparable = number | string;

function bSearch<T extends Comparable>(src: T[], left: number, right: number, target: T): number {
    let [i, j] = [left, right + 1];

    while (i < j) {
        const m = i + Math.trunc((j - i) / 2);
        if (src[m] < target) {
            i = m + 1;
        } else {
            j = m;
        }
    }

    return (i <= right && src[i] === target) ? i : -1;
}



// fix one and find two sum: time limit exceeded
function solution3(nums: number[]): number[][] {
    const set = new Set<string>;

    for (let i = 0; i < nums.length; i++) {
        const ns = nums.slice();
        ns.splice(i, 1);

        const found = twoSum(ns, -nums[i]);
        if (found.length === 0) continue;

        for (const f of found) {
            const t = f.concat([nums[i]]).toSorted((x, y) => x - y);
            set.add(JSON.stringify(t));
        }
    }

    return [...set.keys()].map((x) => JSON.parse(x));
}
function twoSum(nums: number[], target: number): number[][] {
    const h = new Set<number>();
    const a = [] as number[][];

    for (const x of nums) {
        const y = target - x;
        if (h.has(y)) {
            a.push([y, x]);
        } else {
            h.add(x);
        }
    }

    return a;
}

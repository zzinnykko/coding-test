// https://leetcode.com/problems/kth-largest-element-in-an-array/
function findKthLargest(nums: number[], k: number): number {
    return solution3(nums, k);
}



// sorting: 92 ms
function solution1(nums: number[], k: number): number {
    return nums.toSorted((x, y) => -(x - y)).at(k - 1)!;
}



// heap: 94 ms
function solution2(nums: number[], k: number): number {
    const heap = new MyHeap(nums);

    for (let i = 0; i < k - 1; i++) {
        heap.pop();
    }

    return heap.pop()!;
}
class MyHeap {
    data: number[];

    constructor(src: number[]) {
        this.data = [0];

        for (const x of src) {
            this.insert(x);
        }
    }

    insert(x: number) {
        this.data.push(x);

        let n = this.data.length - 1;
        while (true) {
            const p = Math.trunc(n / 2);
            if (p < 1) break;
            if (this.data[p] >= this.data[n]) break;

            [this.data[p], this.data[n]] = [this.data[n], this.data[p]];
            n = p;
        }
    }

    pop(): number | undefined {
        if (this.data.length < 2) return undefined;

        const popv = this.data[1];
        this.data[1] = this.data[this.data.length - 1];
        this.data.pop();

        let n = 1;
        while (true) {
            const [c1, c2] = [n * 2, n * 2 + 1];
            if (this.data.length - 1 < c1) break;
            if (this.data.length - 1 == c1) {
                if (this.data[n] >= this.data[c1]) break;

                [this.data[c1], this.data[n]] = [this.data[n], this.data[c1]];
                n = c1;
                continue;
            }
            if (this.data[c2] > this.data[c1]) {
                if (this.data[n] >= this.data[c2]) break;

                [this.data[c2], this.data[n]] = [this.data[n], this.data[c2]];
                n = c2;
                continue;
            }
            if (this.data[n] >= this.data[c1]) break;

            [this.data[c1], this.data[n]] = [this.data[n], this.data[c1]];
            n = c1;
        }

        return popv;
    }
}



// select partition: time limit exceeded
function solution3(nums: number[], k: number): number {
    while (true) {
        if (nums.length === 1) {
            return nums[0];
        }

        const t = nums[0];
        const lt = [];
        const gt = [];

        for (const x of nums.slice(1,)) {
            if (x > t) {
                gt.push(x);
            } else {
                lt.push(x);
            }
        }

        if (k === gt.length + 1) {
            nums = [t];
            continue;
        }
        if (k < gt.length + 1) {
            nums = gt;
            continue;
        }

        k = k - (gt.length + 1);
        nums = lt;
    }
}

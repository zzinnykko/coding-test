// https://leetcode.com/problems/container-with-most-water/
function maxArea(height: number[]): number {
    return solution2(height);
}



// brute force: time limit exceeded
function solution1(height: number[]): number {
    let maxa = 0;

    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const area = (j - i) * Math.min(height[i], height[j]);
            maxa = Math.max(maxa, area);
        }
    }

    return maxa;
}



// two pointers: 2 ms
function solution2(height: number[]): number {
    let maxa = 0;
    let [i, j] = [0, height.length - 1];

    while (i < j) {
        const area = (j - i) * Math.min(height[i], height[j]);
        maxa = Math.max(maxa, area);

        if (height[i] < height[j]) {
            i += 1;
        } else {
            j -= 1;
        }
    }

    return maxa;
}

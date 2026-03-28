// https://leetcode.com/problems/pascals-triangle/
function generate(numRows: number): number[][] {
    return solution2(numRows);
}



// iterative dp: 1 ms
function solution1(numRows: number): number[][] {
    if (numRows < 1) return [];
    else if (numRows < 2) return [[1]];

    const a = [[1], [1, 1]];

    for (let i = 3; i <= numRows; i++) {
        const x = [...a.at(-1)!, 0];
        const y = [0, ...a.at(-1)!];
        const z = x.map((el, i) => el + y[i]);

        a.push(z);
    }

    return a;
}



// recursive dp: 3 ms
function solution2(numRows: number): number[][] {
    if (numRows < 1) return [];
    else if (numRows < 2) return [[1]];

    const a = solution2(numRows - 1);
    const x = [...a.at(-1)!, 0];
    const y = [0, ...a.at(-1)!];
    const z = x.map((el, i) => el + y[i]);

    return [...a, z];
}

// https://leetcode.com/problems/rotting-oranges/
function orangesRotting(grid: number[][]): number {
    return solution1(grid);
}



// iterative bfs: 26 ms
function solution1(grid: number[][]): number {
    const qu = [] as [number, number, number][];    // row, col, count

    for (const [r, row] of grid.entries()) {
        for (const [c, x] of row.entries()) {
            if (x === 2) {
                qu.push([r, c, 0]);
            }
        }
    }

    let maxc = 0;
    while (qu.length > 0) {
        let [r, c, count] = qu.shift()!;
        for (const [ur, uc] of [[r - 1, c], [r, c + 1], [r + 1, c], [r, c - 1]]) {
            if (grid[ur]?.[uc] === undefined) continue;
            if (grid[ur][uc] !== 1) continue;

            grid[ur][uc] = 2;
            qu.push([ur, uc, count + 1]);
        }

        maxc = Math.max(maxc, count);
    }

    let allVisited = true;
    for (const [r, row] of grid.entries()) {
        for (const [c, x] of row.entries()) {
            if (x === 1) {
                allVisited = false;
                break;
            }
        }
    }

    return (allVisited) ? maxc : -1;
}

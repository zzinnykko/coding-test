// https://leetcode.com/problems/zigzag-conversion/
function convert(s: string, numRows: number): string {
    return solution2(s, numRows);
}



// write with coords: 31 ms
function solution1(s: string, numRows: number): string {
    if (numRows == 1) return s;

    const h = new Map<[number, number], string>();
    const dir = new Map<number, { r: number, c: number }>([
        [0, { r: 1, c: 0 }],
        [1, { r: -1, c: 1 }],
    ]);

    let d = 0;
    let [r, c] = [0, 0];

    for (const x of (s.match(/./gv) ?? [])) {
        h.set([r, c], x);

        r += dir.get(d)!.r;
        c += dir.get(d)!.c;

        if (r == 0 || r == numRows - 1) {
            d = (d + 1) % 2;
        }
    }

    return Array.from(h.entries())
        .toSorted((x, y) => {
            if (x[0][0] - y[0][0] < 0) return -1;
            if (x[0][0] - y[0][0] > 0) return 1;
            if (x[0][1] - y[0][1] < 0) return -1;
            if (x[0][1] - y[0][1] > 0) return 1;
            return 0;
        })
        .map(([_, v]) => v)
        .join("");
}



// write with no coords: 19 ms
function solution2(s: string, numRows: number): string {
    if (numRows == 1) return s;

    const h = Array.from({ length: numRows }, (_) => [] as string[]);
    let d = 1;

    let r = 0;
    for (const x of (s.match(/./gv) ?? [])) {
        h[r].push(x);

        r += d

        if (r == 0 || r == numRows - 1) {
            d = -d;
        }
    }

    return h
        .map((xs) => xs.join(""))
        .join("");
}

// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
function letterCombinations(digits: string): string[] {
    return solution1(digits);
}



// cartesian production with stack: 1 ms
function solution1(digits: string): string[] {
    const h = new Map<string, string[]>([
        ["2", ["a", "b", "c"]],
        ["3", ["d", "e", "f"]],
        ["4", ["g", "h", "i"]],
        ["5", ["j", "k", "l"]],
        ["6", ["m", "n", "o"]],
        ["7", ["p", "q", "r", "s"]],
        ["8", ["t", "u", "v"]],
        ["9", ["w", "x", "y", "z"]],
    ]);
    const letters = digits.match(/./gv)!.map((x) => h.get(x)!);

    return cartesian1(letters).map((x) => x.join(""));
}
function cartesian1(letters: string[][]): string[][] {
    let a = [[]] as string[][];
    const st = letters.toReversed();

    while (st.length > 0) {
        const rs = st.pop()!;

        const tmp = [];
        for (const xs of a) {
            for (const y of rs) {
                const t = xs.slice();
                t.push(y);
                tmp.push(t);
            }
        }
        a = tmp;
    }

    return a;
}

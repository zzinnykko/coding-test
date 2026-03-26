// https://leetcode.com/problems/roman-to-integer/
function romanToInt(s: string): number {
    return solution2(s);
}



// convert IV to IIII: 11 ms
function solution1(s: string): number {
    s = s
        .replaceAll("IV", "IIII")
        .replaceAll("IX", "VIIII")
        .replaceAll("XL", "XXXX")
        .replaceAll("XC", "LXXXX")
        .replaceAll("CD", "CCCC")
        .replaceAll("CM", "DCCCC");

    const h = new Map([
        ["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1_000]
    ]);

    return (s.match(/./gv) ?? []).reduce((acc, x) => {
        return acc + (h.get(x) ?? 0);
    }, 0);
}


// calculate from right: 19 ms
function solution2(s: string): number {
    const h = new Map([
        ["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1_000]
    ]);

    return (s.match(/./gv) ?? []).reduceRight((acc, x) => {
        if (x === "I") acc += (acc < 5) ? 1 : -1;
        else if (x === "V") acc += 5;
        else if (x === "X") acc += (acc < 50) ? 10 : -10;
        else if (x === "L") acc += 50;
        else if (x === "C") acc += (acc < 500) ? 100 : -100;
        else if (x === "D") acc += 500;
        else if (x === "M") acc += 1_000;

        return acc;
    }, 0);
}

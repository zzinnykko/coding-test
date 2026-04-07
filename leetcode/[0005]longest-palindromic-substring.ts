// https://leetcode.com/problems/longest-palindromic-substring/
function longestPalindrome(s: string): string {
    return solution3(s);
}



// brute force: 1298 ms
function solution1(s: string): string {
    const cs = s.match(/./gv) ?? [];

    for (let size = cs.length; size > 0; size--) {
        for (let i = 0; i + size - 1 < cs.length; i++) {
            const t = cs.slice(i, i + size);
            if (isPalindrome(t)) {
                return t.join("");
            }
        }
    }

    // unreachable
    return "";
}
function isPalindrome(cs: string[]): boolean {
    let [i, j] = [0, cs.length - 1];
    while (i < j) {
        if (cs[i] !== cs[j]) return false;

        i += 1;
        j -= 1;
    }

    return true;
}



// two pointers: 70 ms
function solution2(s: string): string {
    const cs = s.match(/./gv) ?? [];
    let maxs = "";

    for (let i = 0; i < cs.length; i++) {
        const odd = expand(cs, i, i);
        const even = expand(cs, i, i + 1);

        maxs = (odd.length > maxs.length) ? odd : maxs;
        maxs = (even.length > maxs.length) ? even : maxs;
    }

    return maxs;
}
function expand(cs: string[], l: number, r: number): string {
    if (l < 0 || cs.length <= r) {
        return "";
    }

    while (true) {
        if (cs[l] !== cs[r]) break;

        l -= 1;
        r += 1;
        if (l < 0 || cs.length <= r) break;
    }

    return cs.slice(l + 1, r).join("");
}



// iterative dp: 2691 ms
function solution3(s: string): string {
    const cs = s.match(/./gv) ?? [];
    let maxtuple = [0, 0];

    const dp = Array.from({ length: cs.length }, (_) => {
        return Array.from({ length: cs.length }, (_) => false);
    });

    for (let i = cs.length - 1; 0 <= i; i--) {
        for (let j = i; j < cs.length; j++) {
            if (
                (i === j) ||
                (i + 1 === j && cs[i] === cs[j]) ||
                (dp[i + 1][j - 1] && cs[i] === cs[j])
            ) {
                dp[i][j] = true;

                if (maxtuple[1] - maxtuple[0] < j - i) {
                    maxtuple = [i, j];
                }
            }
        }
    }

    return cs.slice(maxtuple[0], maxtuple[1] + 1).join("");
}

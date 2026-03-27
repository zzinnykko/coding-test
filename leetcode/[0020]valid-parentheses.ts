// https://leetcode.com/problems/valid-parentheses/
function isValid(s: string): boolean {
    return solution2(s);
}



// remove valid pairs: 110 ms
function solution1(s: string): boolean {
    let p = "";

    while (p !== s) {
        p = s;
        s = s.replaceAll("()", "").replaceAll("{}", "").replaceAll("[]", "");
    }

    return p === "";
}



// stack: 6 ms
function solution2(s: string): boolean {
    const h = new Map([
        [")", "("], ["}", "{"], ["]", "["]
    ]);
    const st = [];

    for (const x of s.match(/./gv) ?? []) {
        if (h.has(x)) {
            if (st.length === 0 || st.pop() !== h.get(x)) return false;
        } else {
            st.push(x);
        }
    }

    return st.length === 0;
}

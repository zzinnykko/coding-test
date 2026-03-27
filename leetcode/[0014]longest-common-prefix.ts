// https://leetcode.com/problems/longest-common-prefix/
function longestCommonPrefix(strs: string[]): string {
    return solution3(strs);
}



// compare first to others: 0 ms
function solution1(strs: string[]): string {
    if (strs.length === 0) return "";

    let first = strs[0].match(/./gv) ?? [];
    for (const other of strs.slice(1,)) {
        while (!other.startsWith(first.join(""))) {
            first.pop();
        }
    }

    return first.join("");
}



// use zip generator: 10 ms
function solution2(strs: string[]): string {
    let a = "";
    for (const xs of zip(strs)) {
        if (!xs.every((x) => x === xs[0])) break;

        a += xs[0];
    }

    return a;
}
function* zip(strs: string[]): Generator<string[]> {
    const iters = strs
        .map((str) => str.match(/./gv) ?? [])
        .map((xs) => xs[Symbol.iterator]());

    while (true) {
        let pool = [];
        for (const it of iters) {
            const { value, done } = it.next();
            if (done) return;

            pool.push(value);
        }

        yield pool;
    }
}



// trie: 13 ms
class TrieNode {
    isEnd = false;
    children = new Map<string, TrieNode>();
}
function solution3(strs: string[]): string {
    const trie = new TrieNode();

    for (const str of strs) {
        const cs = str.match(/./gv) ?? [];
        let n = trie;

        for (const c of cs) {
            if (!n.children.has(c)) n.children.set(c, new TrieNode());
            n = n.children.get(c)!;
        }

        n.isEnd = true;
    }

    let a = "";
    let n = trie;
    while (!n.isEnd && n.children.size === 1) {
        const c = [...n.children.keys()][0];
        a += c;
        n = n.children.get(c)!;
    }

    return a;
}

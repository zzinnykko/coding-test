// https://leetcode.com/problems/longest-substring-without-repeating-characters/
function lengthOfLongestSubstring(s: string): number {
    return solution2(s);
}



// brute force: time limit exceeded
function solution1(s: string): number {
    const sarr = [...new Intl.Segmenter().segment(s)].map((x) => x.segment);

    for (let size = sarr.length; 0 < size; size--) {
        for (let i = 0; i + size - 1 < sarr.length; i++) {
            const sub = sarr.slice(i, i + size);
            if (new Set(sub).size === sub.length) return size;
        }
    }

    return 0;
}



// duplicate char's prev index: 72 ms
function solution2(s: string): number {
    const sarr = [...new Intl.Segmenter().segment(s)].map((x) => x.segment);
    let maxl = 0;

    let prev = 0;
    for (const [i, x] of sarr.entries()) {
        const idx = sarr.slice(prev, i).indexOf(x);
        if (idx !== -1) {
            prev += idx + 1;
        }

        maxl = Math.max(maxl, i - prev + 1);
    }

    return maxl;
}

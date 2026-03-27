// https://leetcode.com/problems/climbing-stairs/
function climbStairs(n: number): number {
    return solution3(n);
}



// iterative dp: 1 ms
function solution1(n: number): number {
    let [a, b] = [1, 2];

    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }

    return a;
}



// recursive dp: time limit exceeded
function solution2(n: number): number {
    type Fn = (n: number) => number;

    let f: Fn = (n) => (n <= 2) ? n : f(n - 2) + f(n - 1);

    return f(n);
}



// recursive dp with memoization: 0 ms
function solution3(n: number): number {
    type Fn = (n: number) => number;

    let f: Fn = (n) => (n <= 2) ? n : f(n - 2) + f(n - 1);

    const memoize = function (fn: Fn): Fn {
        const h = new Map<number, number>();

        return function (n: number) {
            if (!h.has(n)) {
                h.set(n, fn(n));
            }

            return h.get(n)!;
        }
    }

    f = memoize(f);

    return f(n);
}

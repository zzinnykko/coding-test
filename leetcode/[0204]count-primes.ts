// https://leetcode.com/problems/count-primes/
function countPrimes(n: number): number {
    return solution2(n);
}



// sieve of eratosthenes: 208 ms
function solution1(n: number): number {
    if (n < 2) return 0;

    const primes = Array(n).fill(true);
    primes[0] = false;
    primes[1] = false;

    for (let i = 2; i < n ** 0.5; i++) {
        if (!primes[i]) continue;

        for (let j = i * i; j < n; j += i) {
            primes[j] = false;
        }
    }

    return primes.filter((x) => x).length;
}



// sieve of eratosthenes with generator: time limit exceeded
function solution2(n: number): number {
    let count = 0;
    for (const x of g()) {
        if (!(x < n)) break;

        count += 1;
    }

    return count;
}
function* g(): Generator<number> {
    const h = new Map<number, number[]>();

    let n = 2;
    while (true) {
        if (h.has(n)) {
            for (const x of h.get(n)!) {
                if (!h.has(n + x)) h.set(n + x, []);
                h.get(n + x)!.push(x);
            }
            h.delete(n);
        } else {
            yield n;
            h.set(n * n, [n]);
        }

        n += 1;
    }
}

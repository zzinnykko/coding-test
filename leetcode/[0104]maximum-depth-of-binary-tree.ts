// https://leetcode.com/problems/maximum-depth-of-binary-tree/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
    return solution3(root);
}



// iterative bfs: 4 ms
function solution1(root: TreeNode | null): number {
    if (!root) return 0;

    let maxd = 0;

    const qu = [[root, 1]] as [TreeNode, number][];
    while (qu.length > 0) {
        const [n, d] = qu.shift()!;

        if (n) {
            maxd = Math.max(maxd, d);

            qu.push(
                [n.left!, d + 1], [n.right!, d + 1]
            );
        }
    }

    return maxd;
}



// recursive dfs: 0 ms
function solution2(root: TreeNode | null): number {
    let maxd = 0;

    const f = (n: TreeNode | null, d: number) => {
        if (n) {
            maxd = Math.max(maxd, d);

            f(n.left, d + 1);
            f(n.right, d + 1);
        }
    };

    f(root, 1);

    return maxd;
}



// recursive dfs2: 0 ms
function solution3(root: TreeNode | null): number {
    return (root) ? 1 + Math.max(solution3(root.left), solution3(root.right)) : 0;
}

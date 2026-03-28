// https://leetcode.com/problems/symmetric-tree/

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

function isSymmetric(root: TreeNode | null): boolean {
    return solution2(root);
}



// recursive dfs: 0 ms
function solution1(root: TreeNode | null): boolean {
    if (!root) return true;

    return f(root.left, root.right);
}
function f(left: TreeNode | null, right: TreeNode | null): boolean {
    if (!left && !right) return true;
    else if (!left || !right) return false;
    else if (left.val !== right.val) return false;

    return f(left.left, right.right) && f(left.right, right.left);
}



// iterative bfs: 1 ms
function solution2(root: TreeNode | null): boolean {
    if (!root) return true;

    const qu = [[root.left, root.right]];
    while (qu.length > 0) {
        const [left, right] = qu.shift()!;

        if (!left && !right) { }
        else if (!left || !right) return false;
        else if (left.val !== right.val) return false;
        else {
            qu.push(
                [left.left, right.right], [left.right, right.left]
            );
        }
    }

    return true;
}

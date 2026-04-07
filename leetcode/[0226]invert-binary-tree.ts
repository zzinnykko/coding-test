// https://leetcode.com/problems/invert-binary-tree/

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

function invertTree(root: TreeNode | null): TreeNode | null {
    return solution2(root);
}



// recursive dfs: 0 ms
function solution1(root: TreeNode | null): TreeNode | null {
    if (root) {
        solution1(root.left);
        solution1(root.right);
        [root.left, root.right] = [root.right, root.left];

        return root;
    } else {
        return null;
    }
}



// iterative bfs: 1 ms
function solution2(root: TreeNode | null): TreeNode | null {
    const qu = [root];
    while (qu.length > 0) {
        const n = qu.shift();

        if (n) {
            [n.left, n.right] = [n.right, n.left];

            qu.push(n.left, n.right);
        }
    }

    return root;
}

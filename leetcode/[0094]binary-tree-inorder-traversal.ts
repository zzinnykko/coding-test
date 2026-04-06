// https://leetcode.com/problems/binary-tree-inorder-traversal/

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

function inorderTraversal(root: TreeNode | null): number[] {
    return solution3(root);
}



// iterative: 0 ms
function solution1(root: TreeNode | null): number[] {
    if (!root) return [];

    const a = [];
    const st = [[root, false]] as [TreeNode, boolean][];

    while (st.length > 0) {
        const [n, v] = st.pop()!;

        if (n) {
            if (v) {
                a.push(n.val);
            } else {
                st.push(
                    [n.right!, false], [n, true], [n.left!, false]
                );
            }
        }
    }

    return a;
}



// recursive: 0 ms
function solution2(root: TreeNode | null): number[] {
    const a = [] as number[];

    const f = function (n: TreeNode | null) {
        if (n) {
            f(n.left);
            a.push(n.val);
            f(n.right);
        }
    };

    f(root);

    return a;
}



// recursive2: 0 ms
function solution3(root: TreeNode | null): number[] {
    return (root) ? [...solution3(root.left), root.val, ...solution3(root.right)] : [];
}

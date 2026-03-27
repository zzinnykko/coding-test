// https://leetcode.com/problems/diameter-of-binary-tree/

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

function diameterOfBinaryTree(root: TreeNode | null): number {
    return solution2(root);
}



// recursive post order: 1 ms
function solution1(root: TreeNode | null): number {
    let maxd = 0;

    const f = (n: TreeNode | null): number => {
        if (n) {
            const ld = f(n.left);
            const rd = f(n.right);
            const d = 1 + Math.max(ld, rd);
            maxd = Math.max(maxd, ld + rd);

            return d;
        } else {
            return 0;
        }
    };

    f(root);

    return maxd;
}



// iterative post order: 15 ms
function solution2(root: TreeNode | null): number {
    if (!root) return 0;

    const h = new WeakMap<TreeNode, number>();
    let maxd = 0;

    const st = [[root, false]] as [TreeNode, boolean][];
    while (st.length > 0) {
        const [n, v] = st.pop()!;
        if (n) {
            if (v) {
                const ld = h.get(n.left!) ?? 0;
                const rd = h.get(n.right!) ?? 0;
                const d = 1 + Math.max(ld, rd);
                maxd = Math.max(maxd, ld + rd);

                h.set(n, d);
            } else {
                st.push(
                    [n, true], [n.left!, false], [n.right!, false]
                );
            }
        }
    }

    return maxd;
}

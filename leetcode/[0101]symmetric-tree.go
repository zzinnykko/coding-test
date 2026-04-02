// https://leetcode.com/problems/symmetric-tree/

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isSymmetric(root *TreeNode) bool {
	return solution2(root)
}



// iterative bfs: 0 ms
func solution1(root *TreeNode) bool {
	if root == nil {
		return true
	}

	type LR struct {
		L *TreeNode
		R *TreeNode
	}

	qu := []LR{}
	qu = append(qu, LR{root.Left, root.Right})

	for len(qu) > 0 {
		n := qu[0]
		qu = qu[1:]

		if n.L == nil && n.R == nil {
			// nothing
		} else if n.L == nil || n.R == nil {
			return false
		} else if n.L.Val != n.R.Val {
			return false
		} else {
			qu = append(qu, LR{n.L.Left, n.R.Right}, LR{n.L.Right, n.R.Left})
		}
	}

	return true
}



// recursive: 0 ms
func solution2(root *TreeNode) bool {
	if root == nil {
		return true
	}

	return rec(root.Left, root.Right)
}
func rec(L *TreeNode, R *TreeNode) bool {
	if L == nil && R == nil {
		return true
	} else if L == nil || R == nil {
		return false
	} else if L.Val != R.Val {
		return false
	} else {
		return true && rec(L.Left, R.Right) && rec(L.Right, R.Left)
	}
}

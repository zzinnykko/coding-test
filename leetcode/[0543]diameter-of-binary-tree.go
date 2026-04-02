// https://leetcode.com/problems/diameter-of-binary-tree/

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func diameterOfBinaryTree(root *TreeNode) int {
	return solution2(root)
}



// recursive: 0 ms
func solution1(root *TreeNode) int {
	maxDiameter := 0

	var rec func(*TreeNode) int
	rec = func(n *TreeNode) int {
		if n == nil {
			return 0
		}

		lDepth, rDepth := rec(n.Left), rec(n.Right)
		maxDiameter = max(maxDiameter, lDepth+rDepth)
		return 1 + max(lDepth, rDepth)
	}
	rec(root)

	return maxDiameter
}



// iterative: 2 ms
func solution2(root *TreeNode) int {
	if root == nil {
		return 0
	}

	maxDiameter := 0
	ds := map[*TreeNode]int{}

	type S struct {
		Node        *TreeNode
		ToBeVisited bool
	}
	st := []S{S{root, false}}

	for len(st) > 0 {
		n := st[len(st)-1]
		st = st[:len(st)-1]

		if n.Node != nil {
			if n.ToBeVisited {
				lDepth, rDepth := ds[n.Node.Left], ds[n.Node.Right]
				maxDiameter = max(maxDiameter, lDepth+rDepth)
				ds[n.Node] = 1 + max(lDepth, rDepth)
			} else {
				st = append(
					st, S{n.Node, true}, S{n.Node.Right, false}, S{n.Node.Left, false},
				)
			}
		}
	}

	return maxDiameter
}

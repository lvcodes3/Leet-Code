export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * 530. Minimum Absolute Difference in BST - Easy
 *
 * Given the root of a Binary Search Tree (BST), return the minimum absolute difference between
 * the values of any two different nodes in the tree.
 *
 * Time Complexity: O(N), where N is the number of nodes, as every node is visited once.
 *
 * Space Complexity: O(H), where H is the height of the tree (for the recursive call stack).
 *
 * This solution satisfies the constraints of O(N) time and O(1) additional space (disregarding recursion stack).
 */
export function getMinimumDifferenceInBST(root: TreeNode | null): number {
  let minimumDifference: number = Infinity;

  // stores the value of the last visited node //
  let previous: number | null = null;

  // inorder traversal - ensures the BST is traversed in sorted sort //
  // example: BST [4, 2, 6, 1, 3] produces [1, 2, 3, 4, 6] //
  function inorderTraversal(node: TreeNode | null) {
    if (!node) return;

    // traverse the left subtree //
    inorderTraversal(node.left);

    // process the current node //
    if (previous !== null) {
      const difference = Math.abs(node.val - previous);
      minimumDifference = Math.min(minimumDifference, difference);
    }
    previous = node.val;

    // traverse the right subtree //
    inorderTraversal(node.right);
  }

  inorderTraversal(root);

  return minimumDifference;
}

/**
 * 104. Maximum Depth of Binary Tree - Easy
 *
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 *
 * Time Complexity:
 *
 * Space Complexity:
 */
export function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

import * as BinarySearchTrees from "../BinarySearchTrees";

describe("Binary Search Tree Leet Code Problems", () => {
  // BST #1 //
  const t1n1 = new BinarySearchTrees.TreeNode(4);
  const t1n2 = new BinarySearchTrees.TreeNode(2);
  const t1n3 = new BinarySearchTrees.TreeNode(6);
  const t1n4 = new BinarySearchTrees.TreeNode(1);
  const t1n5 = new BinarySearchTrees.TreeNode(3);
  t1n1.left = t1n2;
  t1n1.right = t1n3;
  t1n2.left = t1n4;
  t1n2.right = t1n5;

  // BST #2 //
  const t2n1 = new BinarySearchTrees.TreeNode(10);
  const t2n2 = new BinarySearchTrees.TreeNode(5);
  const t2n3 = new BinarySearchTrees.TreeNode(15);
  const t2n4 = new BinarySearchTrees.TreeNode(0);
  const t2n5 = new BinarySearchTrees.TreeNode(19);
  t2n1.left = t2n2;
  t2n1.right = t2n3;
  t2n2.left = t2n4;
  t2n3.right = t2n5;

  // BST #3 //
  const t3n1 = null;

  test("Should Get The Minimum Difference Between Any 2 Nodes in the BST", () => {
    expect(BinarySearchTrees.getMinimumDifferenceInBST(t1n1)).toBe(1);

    expect(BinarySearchTrees.getMinimumDifferenceInBST(t2n1)).toBe(4);

    expect(BinarySearchTrees.getMinimumDifferenceInBST(t3n1)).toBe(Infinity);
  });

  test("Maximum Depth of Binary Tree", () => {
    expect(BinarySearchTrees.maxDepth(t1n1)).toBe(3);
    expect(BinarySearchTrees.maxDepth(t2n1)).toBe(3);
  });
});

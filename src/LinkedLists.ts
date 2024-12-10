export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * 21. Merge Two Sorted Lists - Easy
 *
 * You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into
 * one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 *
 * Time Complexity: O(M + N), where M is the num of nodes in list1 and N is the num of nodes in list 2.
 *
 * Space Complexity: O(1), no additional data structures or memory used.
 */
export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // one or both lists are null //
  if (!list1) return list2;
  if (!list2) return list1;

  // init head //
  let head: ListNode;
  if (list1.val <= list2.val) {
    head = list1;
    list1 = list1.next;
  } else {
    head = list2;
    list2 = list2.next;
  }

  // init current pointer //
  let currNode = head;

  // traverse both lists and merge //
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      currNode.next = list1;
      list1 = list1.next;
    } else {
      currNode.next = list2;
      list2 = list2.next;
    }
    currNode = currNode.next;
  }

  // attach remaining elements of non-empty list //
  if (list1 !== null) {
    currNode.next = list1;
  } else {
    currNode.next = list2;
  }

  return head;
}

/**
 * 141. Linked List Cycle - Easy
 *
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by
 * continuously following the next pointer. Internally, pos is used to denote the index of the node
 * that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 *
 * Floyd's Cycle Detection (two-pointer technique)
 *
 * Time Complexity: O(N)
 *
 * Space Complexity: O(1)
 */
export function hasCycle(head: ListNode | null): boolean {
  if (head === null) return false;

  let slowPointer: ListNode | null = head;
  let fastPointer: ListNode | null = head;

  while (fastPointer !== null && fastPointer.next !== null) {
    // move slow pointer one step //
    slowPointer = slowPointer!.next;
    // move fast pointer two steps //
    fastPointer = fastPointer.next.next;

    // cycle detected //
    if (slowPointer === fastPointer) {
      return true;
    }
  }

  return false;
}

/**
 * Helper Functions
 */
export function displayList(head: ListNode | null): string {
  let currNode = head;
  let outputString = "";

  while (currNode) {
    outputString += `${currNode.val} -> `;
    currNode = currNode.next;
  }

  outputString += "null";

  return outputString;
}

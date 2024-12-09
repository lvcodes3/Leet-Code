/**
 * 21. Merge Two Sorted Lists
 * Easy
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists into one sorted list. The list should be made by
 * splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 */
// class ListNode {
//   val: number;
//   next: ListNode | null;

//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

// function mergeTwoLists(
//   list1: ListNode | null,
//   list2: ListNode | null
// ): ListNode | null {
//   // one or both lists are null //
//   if (!list1) return list2;
//   if (!list2) return list1;

//   // init head //
//   let head: ListNode;
//   if (list1.val <= list2.val) {
//     head = list1;
//     list1 = list1.next;
//   } else {
//     head = list2;
//     list2 = list2.next;
//   }

//   // init current pointer //
//   let currNode = head;

//   // traverse both lists and merge //
//   while (list1 !== null && list2 !== null) {
//     if (list1.val <= list2.val) {
//       currNode.next = list1;
//       list1 = list1.next;
//     } else {
//       currNode.next = list2;
//       list2 = list2.next;
//     }
//     currNode = currNode.next;
//   }

//   // attach remaining elements of non-empty list //
//   if (list1 !== null) {
//     currNode.next = list1;
//   } else {
//     currNode.next = list2;
//   }

//   return head;
// }

// function displayList(head: ListNode | null): void {
//   let currNode = head;
//   let outputString = "";

//   while (currNode) {
//     outputString += `${currNode.val} -> `;
//     currNode = currNode.next;
//   }

//   outputString += "null";

//   console.log(outputString);
// }

// // list 1 //
// let l1n1 = new ListNode(1);
// let l1n2 = new ListNode(2);
// let l1n3 = new ListNode(5);
// let l1n4 = new ListNode(9);
// let l1n5 = new ListNode(12);
// l1n1.next = l1n2;
// l1n2.next = l1n3;
// l1n3.next = l1n4;
// l1n4.next = l1n5;

// // list 2 //
// let l2n1 = new ListNode(0);
// let l2n2 = new ListNode(4);
// let l2n3 = new ListNode(10);
// l2n1.next = l2n2;
// l2n2.next = l2n3;

// displayList(mergeTwoLists(l1n1, l2n1)); // Expected: 0 -> 1 -> 2 -> 4 -> 5 -> 9 -> 10 -> 12 -> null

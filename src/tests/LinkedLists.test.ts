import * as LinkedList from "../LinkedLists";

describe("Linked Lists Leet Code Problems", () => {
  // SLL #1 //
  let l1n1 = new LinkedList.ListNode(1);
  let l1n2 = new LinkedList.ListNode(2);
  let l1n3 = new LinkedList.ListNode(5);
  let l1n4 = new LinkedList.ListNode(9);
  let l1n5 = new LinkedList.ListNode(12);
  l1n1.next = l1n2;
  l1n2.next = l1n3;
  l1n3.next = l1n4;
  l1n4.next = l1n5;

  // SLL #2 //
  let l2n1 = new LinkedList.ListNode(0);
  let l2n2 = new LinkedList.ListNode(4);
  let l2n3 = new LinkedList.ListNode(10);
  l2n1.next = l2n2;
  l2n2.next = l2n3;

  // SLL #3 (has cycle) //
  let l3n1 = new LinkedList.ListNode(3);
  let l3n2 = new LinkedList.ListNode(2);
  let l3n3 = new LinkedList.ListNode(0);
  let l3n4 = new LinkedList.ListNode(-4);
  l3n1.next = l3n2;
  l3n2.next = l3n3;
  l3n3.next = l3n4;
  l3n4.next = l3n2;

  test("Merge Two Linked Lists", () => {
    expect(LinkedList.displayList(LinkedList.mergeTwoLists(l1n1, l2n1))).toBe(
      "0 -> 1 -> 2 -> 4 -> 5 -> 9 -> 10 -> 12 -> null"
    );
  });

  test("Cycle in a Linked List", () => {
    expect(LinkedList.hasCycle(l1n1)).toBeFalsy();

    expect(LinkedList.hasCycle(l3n1)).toBeTruthy();

    expect(LinkedList.hasCycle(new LinkedList.ListNode(1))).toBeFalsy();
  });
});

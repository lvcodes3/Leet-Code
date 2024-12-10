import * as LinkedList from "../LinkedLists";

describe("Strings Leet Code Problems", () => {
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

  test("Index Of The First Occurence In A String", () => {
    expect(LinkedList.displayList(LinkedList.mergeTwoLists(l1n1, l2n1))).toBe(
      "0 -> 1 -> 2 -> 4 -> 5 -> 9 -> 10 -> 12 -> null"
    );
  });
});

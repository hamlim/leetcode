import { expect, test } from "bun:test";

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let carry = 0;
  let previousNode = new ListNode();
  let headNode = previousNode;

  while (l1 || l2 || carry) {
    let val1 = 0;
    let val2 = 0;
    if (l1) {
      val1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      val2 = l2.val;
      l2 = l2.next;
    }
    let sum = val1 + val2 + carry;
    carry = sum > 9 ? 1 : 0;
    sum = sum > 9 ? sum - 10 : sum;
    let curr = new ListNode(sum);
    previousNode.next = curr;
    previousNode = curr;
  }
  return headNode.next;
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  toString() {
    let str = `${this.val}`;
    let next = this.next;
    while (next) {
      str += `->${next.val}`;
      next = next.next;
    }
    return str;
  }
}

test("first", () => {
  let one = new ListNode(2, new ListNode(4, new ListNode(3)));
  let two = new ListNode(5, new ListNode(6, new ListNode(4)));

  expect(addTwoNumbers(one, two)?.toString()).toBe("7->0->8");
});

test("second", () => {
  let one = new ListNode(0);
  let two = new ListNode(0);

  expect(addTwoNumbers(one, two)?.toString()).toBe("0");
});

test("third", () => {
  let one = new ListNode(
    9,
    new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))),
  );
  let two = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

  expect(addTwoNumbers(one, two)?.toString()).toBe("8->9->9->9->0->0->0->1");
});

/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

  let dummy = new ListNode(0)
  dummy.next = head
  const k = findNthFromEnd(dummy, n + 1)
  k.next = k.next.next
  return dummy.next

  function findNthFromEnd(head: ListNode | null, k: number) {
    let p1: ListNode = head
    for (let i = 0; i < k; i++) {
      p1 = p1.next
    }
    let p2: ListNode = head
    while (p1) {
      p1 = p1.next
      p2 = p2.next
    }
    return p2
  }
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * [82] 删除排序链表中的重复元素 II
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null
  const prev = new ListNode(0, head)
  let slow = prev, fast = prev.next
  while (fast && fast.next) {
    if (fast.val === fast.next.val) {
      const temp = fast.val
      while (fast && temp === fast.val) {
        fast = fast.next
      }
      slow.next = fast
    } else {
      fast = fast.next
      slow = slow.next
    }
  }
  return prev.next
};
// @lc code=end


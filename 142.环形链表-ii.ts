/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
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

function detectCycle(head: ListNode | null): ListNode | null {
    let slow = head, fast = head
    while(fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
      if(slow == fast) break;
    }
    if(!fast || !fast.next) return null

    slow = head
    while(slow !== fast) {
      fast = fast.next
      slow = slow.next
    }
    return slow
};
// @lc code=end


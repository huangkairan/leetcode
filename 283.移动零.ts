/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  function removeElement(nums: number[], val: number): number {
    let slow = 0, fast = 0
    while (fast < nums.length) {
      if (nums[fast] !== val) {
        nums[slow] = nums[fast]
        slow++
      }
      fast++
    }
    return slow
  }

  let size = removeElement(nums, 0)
  for (; size < nums.length; size++) {
    nums[size] = 0
  }
};
// @lc code=end


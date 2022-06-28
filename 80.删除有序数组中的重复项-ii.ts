/*
 * @lc app=leetcode.cn id=80 lang=typescript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  if (!nums.length) return 0
  let slow = 0, fast = 0, count = 0
  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      slow++
      nums[slow] = nums[fast]
    } else if (slow < fast && count < 2) {
      slow++
      nums[slow] = nums[fast]
    }
    fast++
    count++
    if (fast < nums.length && nums[fast] != nums[fast - 1]) {
      // 遇到不同的元素
      count = 0;
    }
  }
  return slow + 1
};
// @lc code=end


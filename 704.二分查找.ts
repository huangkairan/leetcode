/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    }
  }
  return -1
};
// @lc code=end

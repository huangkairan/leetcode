/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const copy = [...nums].sort((a, b) => a - b)
  let start = 0
  let end = copy.length - 1
  while (start < end) {
    const res = copy[start] + copy[end]
    if (res < target) {
      start++
    } else if (res > target) {
      end--
    } else {
      return [nums.indexOf(copy[start]), nums.lastIndexOf(copy[end])]
    }
  }
};
// @lc code=end


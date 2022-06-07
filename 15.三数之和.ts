/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  if(!nums || nums.length < 3) {
    return []
  }
  const copy = [...nums].sort((a, b) => a - b)
  const res = []
  for (let i = 0; i < copy.length; i++) {
    if(copy[i] > 0) break;
    if(copy[i] === copy[i-1]) continue;
    let left = i + 1
    let right = copy.length - 1
    while(left < right) {
      const val = copy[i] + copy[left] + copy[right]
      if(val < 0) {
        left++
      } else if(val > 0) {
        right--
      } else {
        res.push([copy[i], copy[left], copy[right]])
        while(left < right && copy[left] === copy[left+1]) left++
        while(left < right && copy[right] === copy[right-1]) right--
        left++
        right--
      }
    }
  }
  return res
};
// @lc code=end

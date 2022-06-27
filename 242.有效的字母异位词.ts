/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const dict = {};
  for (let i of s) {
    if (dict[i]) dict[i]++
    else dict[i] = 1
  }
  for (let i of t) {
    if (dict[i]) dict[i]--
    else return false
  }
  return Object.values(dict).filter(i => i !== 0).length === 0
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  let res = ''
  function palindrome(left: number, right: number) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--
      right++
    }
    const str = s.slice(left + 1, right + 1 - 1)
    if (res.length < str.length) res = str
  }

  for (let i = 0; i < s.length; i++) {
    palindrome(i, i)
    palindrome(i, i + 1)
  }
  return res
};
// @lc code=end

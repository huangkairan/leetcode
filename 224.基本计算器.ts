/*
 * @lc app=leetcode.cn id=224 lang=typescript
 *
 * [224] 基本计算器
 */
// @lc code=start
function calculate(s: string): number {
  let sign: 1 | -1 = 1
  let res = 0
  const stack: number[] = []
  const len = s.length

  for (let i = 0; i < len; i++) {
    const char = s[i]
    if (isNumber(char)) {
      let val = Number(char);
      while (hasNext(s, i) && isNumber(s[i + 1])) {
        i += 1
        val = val * 10 + Number(s[i])
      }
      res = res + sign * val;
    } else if (char === '+') {
      sign = 1
    } else if (char === '-') {
      sign = -1
    } else if (char === '(') {
      stack.push(res)
      res = 0
      stack.push(sign)
      sign = 1
    } else if (char === ')') {
      const leftSign = stack.pop()
      const midVal = stack.pop()
      res = midVal + leftSign * res;
      // i+=1
    }
  }
  return res

  function isNumber(char: string): boolean {
    return ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(char)
  }
  function hasNext(char: string, index: number) {
    return char[index + 1]
  }
};
// @lc code=end


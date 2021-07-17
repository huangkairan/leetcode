function combinationSum2(candidates: number[], target: number): number[][] {
  const res = [];
  const path = [];
  candidates.sort();
  const backtrack = (row: number, sum: number) => {
    if (sum > target) return;
    if (sum === target) {
      return res.push([...path]);
    }
    let prev = -1;
    for (let i = row; i < candidates.length; i++) {
      const cur = candidates[i];
      if (cur > target - sum || prev === cur) continue;
      path.push(cur);
      prev = cur;
      sum += cur;
      backtrack(i + 1, sum);
      path.pop();
      sum -= cur;
    }
  }

  backtrack(0, 0);
  return res;
};
function combinationSum(candidates: number[], target: number): number[][] {
  const res = [];
  const path = [];
  
  const backtrack = (row: number, sum: number) => {
    if(sum > target) return;
    if(sum === target) {
      return res.push([...path]);
    }
    for(let i = row; i< candidates.length; i ++) {
      const cur = candidates[i];
      if(cur > target - sum) continue;
      path.push(cur);
      sum+= cur;
      backtrack(i, sum);
      path.pop();
      sum-= cur;
    }
  }

  backtrack(0,0);
  return res;
};


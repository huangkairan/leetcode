function permuteUnique(nums: number[]): number[][] {
  const res = [];
  const used = [];
  nums.sort();
  backtrack([]);
  return res;

  function backtrack( path: number[]) {
    if (path.length === nums.length) {
      return res.push(path.slice());
    }

    for(let i=0; i<nums.length; i++) {
      if(used[i]) {
        continue;
      }
      if(nums[i] === nums[i-1] && !used[i-1]) {
        continue;
      }
      path.push(nums[i]);
      used[i] = true;
      backtrack(path);
      path.pop();
      used[i] = false;
    }
  }
};

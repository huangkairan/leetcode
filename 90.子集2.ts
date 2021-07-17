function subsetsWithDup(nums: number[]): number[][] {
  const res = [];
  nums.sort();
  backtrack(0,[]);
  return res;
  function backtrack(index: number, path: number[]) {
    res.push(path.slice());
    for(let i = index; i<nums.length; i++) {
      if( i>index && nums[i] === nums[i-1]) continue;
      path.push(nums[i]);
      backtrack(i+1,path);
      path.pop();
    }
  }
};
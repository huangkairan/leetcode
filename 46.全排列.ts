function permute(nums: number[]): number[][] {
  let res = [];
  const backtrack = (nums: number[], path: number[]) => {
    if (path.length === nums.length) {
      return res.push(path);
    }
    for (let i = 0; i < nums.length; i++) {
      if (path.includes(nums[i])) {
        continue;
      }
      path.push(nums[i]);
      const newPath = [...path];
      backtrack(nums, newPath);
      path.pop();
    }
  }
  backtrack(nums, []);
  return res;
};
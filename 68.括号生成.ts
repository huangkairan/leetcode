function generateParenthesis(n: number): string[] {
  let res = [];

  const backtrack = (lLeft: number, rLeft: number, path: string) => {
    if(n * 2 === path.length) {
      return res.push(path);
    }
    if(lLeft > 0) {
      backtrack(lLeft - 1, rLeft, path + '(');
    }
    if(lLeft < rLeft) {
      backtrack(lLeft, rLeft -1, path + ')');
    }
  }
  backtrack(n, n, '');
  return res;
};
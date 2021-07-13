function combine(n: number, k: number): number[][] {
  const res = [];

  const back = (start, cur) => {
    if (cur.length == k) {
      res.push(cur.slice()); 
      return;
    }
    for (let i = start; i <= n; i++) {
      cur.push(i);
      back(i + 1, cur);
      cur.pop();
    }
  };

  back(1, []);
  return res;
};
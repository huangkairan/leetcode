function totalNQueens(n: number): number {
  let res = 0;
  const board = new Array(n);
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill('.');
  }

  const isValid = (row, col) => {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] == 'Q' &&
          (j == col || i + j === row + col || i - j === row - col)) {
          return false;
        }
      }
    }
    return true;
  };

  const backtrack = (row) => {
    if (row == n) {
      res++;
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        board[row][col] = "Q";
        backtrack(row + 1);
        board[row][col] = '.';
      }
    }
  };
  backtrack(0);
  return res;
};
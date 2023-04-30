const findEmptyCell = (board: number[][]): [number, number] => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        return [row, col];
      }
    }
  }
  return [-1, -1];
};

const isValid = (board: number[][], row: number, col: number, num: number): boolean => {
  // Check if num is already in the row
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num) {
      return false;
    }
  }

  // Check if num is already in the column
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === num) {
      return false;
    }
  }

  // Check if num is already in the 3x3 box
  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  for (let i = boxRow; i < boxRow + 3; i++) {
    for (let j = boxCol; j < boxCol + 3; j++) {
      if (board[i][j] === num) {
        return false;
      }
    }
  }

  // If num is not already in row, column, or box, it is valid
  return true;
};

export const solveBoard = (board: number[][]): boolean => {
  // Find the next empty cell
  const emptyCell = findEmptyCell(board);
  const row = emptyCell[0];
  const col = emptyCell[1];

  // If there are no empty cells, the puzzle is solved
  if (row === -1 && col === -1) return true;

  // Try each number from 1 to 9
  for (let num = 1; num <= 9; num++) {
    if (isValid(board, row, col, num)) {
      board[row][col] = num;

      // Recursively solve the puzzle
      if (solveBoard(board)) {
        return true;
      }

      // If the recursive call doesn't solve the puzzle, backtrack
      board[row][col] = 0;
    }
  }

  // If no number works, backtrack
  return false;
};

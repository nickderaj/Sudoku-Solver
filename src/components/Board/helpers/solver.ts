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

// check for validity
const checkRows = (board: number[][]): [boolean, { row: number; col: number } | null] => {
  for (let row = 0; row < 9; row++) {
    const rowValues = new Set();
    for (let col = 0; col < 9; col++) {
      const value = board[row][col];
      if (value === 0) {
        continue; // Empty space, skip
      }
      if (rowValues.has(value)) {
        return [false, { row, col }]; // Duplicate value in row
      }
      rowValues.add(value);
    }
  }
  return [true, null];
};

const checkColumns = (board: number[][]): [boolean, { row: number; col: number } | null] => {
  for (let col = 0; col < 9; col++) {
    const colValues = new Set();
    for (let row = 0; row < 9; row++) {
      const value = board[row][col];
      if (value === 0) {
        continue; // Empty space, skip
      }
      if (colValues.has(value)) {
        return [false, { row, col }]; // Duplicate value in column
      }
      colValues.add(value);
    }
  }
  return [true, null];
};

export const checkSubGrids = (board: number[][]): [boolean, { row: number; col: number } | null] => {
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const subgridValues = new Set();
      for (let row = i; row < i + 3; row++) {
        for (let col = j; col < j + 3; col++) {
          const value = board[row][col];
          if (value === 0) {
            continue; // Empty space, skip
          }
          if (subgridValues.has(value)) {
            return [false, { row, col }]; // Duplicate value in sub-grid
          }
          subgridValues.add(value);
        }
      }
    }
  }
  return [true, null];
};

export const invalidSudoku = (board: number[][]) => {
  const [validRows, rowCell] = checkRows(board);
  if (!validRows) return rowCell;

  const [validCols, colCell] = checkColumns(board);
  if (!validCols) return colCell;

  const [validSubGrids, subGridCell] = checkSubGrids(board);
  if (!validSubGrids) return subGridCell;

  // Board is valid
  return null;
};

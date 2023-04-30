import Button from '@/elements/buttons/Button';
import { useState } from 'react';
import { EMPTY_BOARD, SOLVABLE_BOARD, UNSOLVABLE_BOARD } from 'src/constants/board.constants';
import Board from './Board';
import { invalidSudoku, solveBoard } from './helpers/solver';

const BoardInput: React.FC = () => {
  const [board, setBoard] = useState<number[][]>(EMPTY_BOARD);
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const [highlighted, setHighlighted] = useState<number[]>([]);

  const onCellChange = (row: number, col: number, value: number) => {
    if (value === undefined || value === null || Number.isNaN(value)) {
      value = 0;
    } else if (value < 0) {
      value = 0;
    } else if (value > 9) {
      return;
    }
    const newBoard = board.map((rowArr, rowIndex) => {
      if (rowIndex === row) {
        return rowArr.map((cellVal, colIndex) => {
          if (colIndex === col) {
            return value;
          } else {
            return cellVal;
          }
        });
      } else {
        return rowArr;
      }
    });
    setBoard(newBoard);
    setHighlighted([]);
  };

  const handleSolve = () => {
    if (isLocked) return;
    setIsLocked(true);

    // 1. Create a deep copy
    const newBoard = [...JSON.parse(JSON.stringify(board))];

    // 2. Check if valid board
    const invalidCells = invalidSudoku(newBoard);
    if (invalidCells !== null) {
      setHighlighted([invalidCells.row, invalidCells.col]);
      setIsLocked(false);
      return alert('Puzzle is invalid.');
    }

    // 3. Solve board
    if (solveBoard(newBoard)) {
      setBoard(newBoard);
    } else {
      alert('Puzzle is unsolvable.');
      setIsLocked(false);
    }
    setHighlighted([]);
  };

  const handleClear = () => {
    setIsLocked(false);
    setHighlighted([]);
    setBoard(EMPTY_BOARD);
  };

  const handleSolvable = () => {
    setIsLocked(false);
    setHighlighted([]);
    setBoard(SOLVABLE_BOARD);
  };

  const handleUnsolvable = () => {
    setIsLocked(false);
    setHighlighted([]);
    setBoard(UNSOLVABLE_BOARD);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Board board={board} onCellChange={onCellChange} isLocked={isLocked} highlighted={highlighted} />
      <div className="flex mt-4 gap-2">
        <Button onClick={handleClear} title="Clear" variant="secondary" />
        <Button onClick={handleSolve} title="Solve" />
      </div>
      <p className="mt-4 text-xl font-cairo">Templates:</p>
      <div className="flex mt-2 gap-2">
        <Button onClick={handleUnsolvable} title="Unsolvable" variant="red" />
        <Button onClick={handleSolvable} title="Solvable" variant="green" />
      </div>
    </div>
  );
};

export default BoardInput;

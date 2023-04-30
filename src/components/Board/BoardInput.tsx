import Button from '@/elements/buttons/Button';
import { useState } from 'react';
import { EMPTY_BOARD } from 'src/constants/board.constants';
import Board from './Board';
import { solveBoard } from './helpers/solver';

const BoardInput: React.FC = () => {
  const [board, setBoard] = useState<number[][]>(EMPTY_BOARD);
  const [isSolved, setIsSolved] = useState<boolean>(false);

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
  };

  const handleSolve = () => {
    const newBoard = solveBoard(board);
    console.log(newBoard);
    if (newBoard) {
      setBoard(newBoard);
      setIsSolved(true);
    }
  };

  const handleClear = () => {
    setIsSolved(false);
    setBoard(EMPTY_BOARD);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Board board={board} onCellChange={onCellChange} isSolved={isSolved} />
      <div className="flex mt-4 gap-2">
        <Button onClick={handleClear} title="Clear" variant="secondary" />
        <Button onClick={handleSolve} title="Solve" />
      </div>
    </div>
  );
};

export default BoardInput;

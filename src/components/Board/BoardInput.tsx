import { useState } from 'react';
import { EMPTY_BOARD } from 'src/constants/board.constants';
import Board from './Board';

const BoardInput: React.FC = () => {
  const [board, setBoard] = useState(EMPTY_BOARD);
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

  return <Board board={board} onCellChange={onCellChange} />;
};

export default BoardInput;

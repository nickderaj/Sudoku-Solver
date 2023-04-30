import { useState } from 'react';
import Board from './Board';
import { EMPTY_BOARD } from 'src/constants/board.constants';

const BoardInput: React.FC = () => {
  const [board, setBoard] = useState(EMPTY_BOARD);

  return <Board board={board} />;
};

export default BoardInput;

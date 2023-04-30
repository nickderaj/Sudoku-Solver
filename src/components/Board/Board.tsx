import InputCell from './InputCell';

type BoardProps = {
  board: number[][];
  onCellChange: (row: number, col: number, value: number) => void;
  isLocked: boolean;
};

const Board: React.FC<BoardProps> = ({ board, onCellChange, isLocked }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, row: number, col: number) => {
    const value = parseInt(event.target.value, 10);
    onCellChange(row, col, value);
  };

  const renderCell = (row: number, col: number) => {
    const value = board[row][col];

    return <InputCell row={row} col={col} cell={value} handleChange={handleChange} locked={isLocked} />;
  };

  const renderRow = (row: number) => {
    return (
      <div className="flex">
        <div className="border-l border-r border-black flex">
          {renderCell(row, 0)}
          {renderCell(row, 1)}
          {renderCell(row, 2)}
        </div>
        {renderCell(row, 3)}
        {renderCell(row, 4)}
        {renderCell(row, 5)}
        <div className="border-l border-r border-black flex">
          {renderCell(row, 6)}
          {renderCell(row, 7)}
          {renderCell(row, 8)}
        </div>
      </div>
    );
  };

  return (
    <div className="border">
      <div className="border-t border-b border-black">
        {renderRow(0)}
        {renderRow(1)}
        {renderRow(2)}
      </div>
      {renderRow(3)}
      {renderRow(4)}
      {renderRow(5)}
      <div className="border-t border-b border-black">
        {renderRow(6)}
        {renderRow(7)}
        {renderRow(8)}
      </div>
    </div>
  );
};

export default Board;

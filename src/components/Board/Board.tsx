type BoardProps = {
  board: number[][];
};

const Board: React.FC<BoardProps> = ({ board }) => {
  const renderCell = (row: number, col: number) => {
    const value = board[row][col];
    if (value === 0) {
      return <div className="w-[30px] h-[30px] border text-center font-xl" />;
    } else {
      return <div className="w-[30px] h-[30px] border text-center font-xl">{value}</div>;
    }
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

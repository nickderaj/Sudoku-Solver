type InputProps = {
  row: number;
  col: number;
  cell?: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>, row: number, col: number) => void;
  locked: boolean;
  highlighted: number[];
};

const InputCell: React.FC<InputProps> = ({ row, col, cell, handleChange, locked, highlighted }) => {
  const highlightedRow = highlighted[0] || null;
  const highlightedCol = highlighted[1] || null;
  const isHighlighted = highlightedRow === row && highlightedCol === col;

  return (
    <input
      key={col}
      type="number"
      min={1}
      max={9}
      disabled={locked}
      value={!cell || cell === 0 ? '' : cell}
      onChange={(event) => handleChange(event, row, col)}
      className={`w-[30px] h-[30px] border text-center font-xl appearance-none ${isHighlighted ? 'bg-rose-200' : ''}`}
    />
  );
};

export default InputCell;

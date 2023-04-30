type InputProps = {
  row: number;
  col: number;
  cell?: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>, row: number, col: number) => void;
  locked: boolean;
};

const InputCell: React.FC<InputProps> = ({ row, col, cell, handleChange, locked }) => {
  return (
    <input
      key={col}
      type="number"
      min={1}
      max={9}
      disabled={locked}
      value={!cell || cell === 0 ? '' : cell}
      onChange={(event) => handleChange(event, row, col)}
      className="w-[30px] h-[30px] border text-center font-xl appearance-none"
    />
  );
};

export default InputCell;

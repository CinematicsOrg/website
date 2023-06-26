interface LabelledInputProps {
  label: string;
  onclick: () => void;
}

const LabelledInput = ({ label }: LabelledInputProps) => {
  return (
    <div className="text-[black]">
      <label htmlFor="" className="mb-[8px]">
        {label}
      </label>
      <input type="text" className="h-[45px] mb-[45px]" />
    </div>
  );
};

export default LabelledInput;

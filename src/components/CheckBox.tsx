interface CheckBoxProps {
  labelName: string;
  value: string;
  name: string;
}

const CheckBox = ({ labelName, value, name }: CheckBoxProps) => {
  return (
    <div className="flex items-center text-[16px] leading-[30px] font-bold text-inter mb-[5px] md:mb-[8px]">
      <input
        type="checkbox"
        name={name}
        value={value}
        className="w-[30px] h-[30px]"
      />
      <label htmlFor={name} className="p-[10px]">
        {labelName}
      </label>
    </div>
  );
};

export default CheckBox;

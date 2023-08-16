import { ChangeEvent, FocusEventHandler } from 'react';

interface CheckBoxProps {
  labelName: string;
  value: string;
  name: string;
  changed: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  error?: string | boolean;
  checked?: boolean;
}

const CheckBox = ({
  labelName,
  value,
  name,
  changed,
  onBlur,
  error,
  checked,
}: CheckBoxProps) => {
  return (
    <div className="mb-[5px] md:mb-[8px]">
      <div className="flex items-center text-[16px] leading-[30px] font-bold text-inter ">
        <input
          type="checkbox"
          name={name}
          value={value}
          onChange={changed}
          onBlur={onBlur}
          checked={checked}
          className="w-[30px] h-[30px]"
        />
        <label htmlFor={name} className="p-[10px]">
          {labelName}
        </label>
      </div>
      <span className="text-[red]  text-xs lg:text-sm">{error}</span>
    </div>
  );
};

export default CheckBox;

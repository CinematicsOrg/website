import { ChangeEvent, FocusEventHandler, HTMLInputTypeAttribute } from 'react';

interface FormInputProps {
  type: HTMLInputTypeAttribute;
  name: string;
  value: string | ReadonlyArray<string> | number;
  changed?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  classDef?: string;
  id?: string;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  error?: string | boolean;
}

const FormInput = ({
  type,
  name,
  placeholder,
  classDef,
  value,
  changed,
  id,
  onBlur,
  error,
}: FormInputProps) => {
  return (
    <div className="mb-[16px] md:mb-[45px]">
      <input
        id={id}
        onBlur={onBlur}
        type={type}
        name={name}
        onChange={changed}
        value={value}
        placeholder={placeholder ? placeholder : undefined}
        className={`h-[45px]  text-[black] dark:text-[white] text-[20px] p-2 ${classDef}`}
      />
      <span className="text-[red] text-xs lg:text-sm">{error}</span>
    </div>
  );
};

export default FormInput;

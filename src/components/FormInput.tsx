import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

interface FormInputProps {
  type: HTMLInputTypeAttribute;
  name: string;
  value: string | ReadonlyArray<string> | number;
  changed?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  classDef?: string;
  id?: string;
}

const FormInput = ({
  type,
  name,
  placeholder,
  classDef,
  value,
  changed,
  id,
}: FormInputProps) => {
  return (
    <div>
      <input
        id={id}
        type={type}
        name={name}
        onChange={changed}
        value={value}
        placeholder={placeholder ? placeholder : undefined}
        className={`h-[45px] mb-[16px] md:mb-[45px] text-[black] text-[20px] p-2 ${classDef}`}
      />
    </div>
  );
};

export default FormInput;

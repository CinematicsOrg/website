interface LabelProps {
  label: string;
  htmlFor?: string;
}

const Label = ({ label, htmlFor }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-[8px] text-[16px] leading-[24px] font-bold"
    >
      {label}
    </label>
  );
};

export default Label;

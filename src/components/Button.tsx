export type ButtonProps = {
  children: React.ReactNode;
  clicked?: () => void;
  style?: string;
  disabled?: boolean;
  shouldSubmit?: boolean;
};

const Button = ({
  children,
  clicked,
  style,
  shouldSubmit,
  disabled,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={shouldSubmit ? 'submit' : undefined}
      onClick={clicked}
      className={`flex items-center py-2 px-6 md:py-5 md:px-10 hover:shadow-lg hover:cursor-pointer justify-center text-[16px] md:text-[24px]  text-[white] font-medium transition duration-300 ${style} ${
        disabled ? 'bg-[gray] hover:bg-[grey]' : 'bg-dred hover:bg-dredLight'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;

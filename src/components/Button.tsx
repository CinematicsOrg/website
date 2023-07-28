export type ButtonProps = {
  children: React.ReactNode;
  clicked?: () => void;
  style?: string;
  shouldSubmit?: boolean;
};

const Button = ({ children, clicked, style, shouldSubmit }: ButtonProps) => {
  return (
    <button
      type={shouldSubmit ? 'submit' : undefined}
      onClick={clicked}
      className={`flex items-center py-2 px-6 md:py-5 md:px-10 hover:shadow-lg hover:cursor-pointer justify-center text-[16px] md:text-[24px] bg-dred hover:bg-dredLight text-[white] font-medium transition duration-300 ${style}`}
    >
      {children}
    </button>
  );
};

export default Button;

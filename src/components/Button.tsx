export type ButtonProps = {
  children: React.ReactNode;
  clicked?: () => void;
  style?: string;
};

const Button = ({ children, clicked, style }: ButtonProps) => {
  return (
    <button
      onClick={clicked}
      className={`flex items-center py-5 px-10 hover:px-11 hover:shadow-lg hover:cursor-pointer justify-center text-[20px] bg-dred hover:bg-dredLight text-[white]  transition duration-300 ${style}`}
    >
      {children}
    </button>
  );
};

export default Button;

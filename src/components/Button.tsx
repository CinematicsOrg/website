export type ButtonProps = {
  children: React.ReactNode;
  clicked?: () => void;
};

const Button = ({ children, clicked }: ButtonProps) => {
  return (
    <button
      onClick={clicked}
      className={`flex items-center py-5 px-10 hover:px-11 justify-center text-[20px] bg-dred hover:bg-dredLight text-[white]  transition duration-300`}
    >
      {children}
    </button>
  );
};

export default Button;

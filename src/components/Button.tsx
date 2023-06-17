export type ButtonProps = {
  style: string;
  children: React.ReactNode;
};

const Button = ({ style, children }: ButtonProps) => {
  return <button className={style}>{children}</button>;
};

export default Button;

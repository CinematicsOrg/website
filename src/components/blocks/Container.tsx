export type ContainerProps = {
  children?: React.ReactNode;
  backgroundPath?: string;
  height?: string;
};

const Container = ({ backgroundPath, children, height }: ContainerProps) => {
  const backgroundStyle = backgroundPath
    ? { backgroundImage: `url(${backgroundPath})` }
    : { backgroundColor: 'gray' };

  const containerStyle = height ? { height } : {};

  return (
    <div
      className="w-full bg-cover bg-center"
      style={{ ...backgroundStyle, ...containerStyle }}
    >
      {children}
    </div>
  );
};

export default Container;

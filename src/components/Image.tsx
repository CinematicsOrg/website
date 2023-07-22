interface ImageProps {
  content?: string;
  classDef?: string;
  paragraphClassDef?: string;
  clicked?: () => void;
}

const Image = ({
  classDef,
  content,
  paragraphClassDef,
  clicked,
}: ImageProps) => {
  return (
    <div
      onClick={clicked}
      className={`grid content-end bg-cover bg-center ${classDef} h-full`}
    >
      <div>
        <p className={paragraphClassDef}>{content}</p>
      </div>
    </div>
  );
};

export default Image;

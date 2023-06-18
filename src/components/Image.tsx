interface ImageProps {
  content?: string;
  classDef?: string;
  paragraphClassDef?: string;
}

const Image = ({ classDef, content, paragraphClassDef }: ImageProps) => {
  return (
    <div className={`grid content-end bg-cover bg-center ${classDef} h-full`}>
      <div>
        <p className={paragraphClassDef}>{content}</p>
      </div>
    </div>
  );
};

export default Image;

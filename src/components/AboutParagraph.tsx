interface AboutParagraphProps {
  content: string;
  classDef?: string;
}

const AboutParagraph = ({ content, classDef }: AboutParagraphProps) => {
  return <div className={`${classDef}`}>{content}</div>;
};

export default AboutParagraph;

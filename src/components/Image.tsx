import { IServiceContent } from '../utils/interface';

interface ImageProps {
  content?: string;
  classDef?: string;
  paragraphClassDef?: string;
  clicked?: () => void;
  paginationClassDef?: string;
  currentIndex?: number;
  imageList?: IServiceContent[];
  paginationClicked?: (index: number) => void;
}

const Image = ({
  classDef,
  content,
  paragraphClassDef,
  clicked,
  paginationClassDef,
  imageList,
  currentIndex,
  paginationClicked,
}: ImageProps) => {
  const paginationContent = imageList
    ? imageList.map((_, index) => {
        return (
          <div
            onClick={() => paginationClicked && paginationClicked(index)}
            key={index}
            className={`rounded-full mx-[2px] ${
              index === currentIndex ? 'bg-[red]' : 'bg-[white]'
            } w-[10px] h-[10px]`}
          ></div>
        );
      })
    : null;
  return (
    <div
      onClick={clicked}
      className={`grid content-end bg-cover bg-center ${classDef} h-[221px] md:h-full mb-[10px] md:mb-0`}
    >
      <div className="items-center">
        <p className={`${paragraphClassDef} text-[24px] lg:text-[32px]`}>
          {content}
        </p>
        {imageList ? (
          <div className={`flex justify-center ${paginationClassDef}`}>
            {paginationContent}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Image;

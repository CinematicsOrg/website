import Image from '../Image';

interface HomeImagesProps {
  ImageList: string[];
}

const HomeImages = ({ ImageList }: HomeImagesProps) => {
  const content = ImageList.map((images) => {
    return <Image classDef={images} />;
  });
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-7 h-[791px] my-[54px]">
      {content}
    </div>
  );
};

export default HomeImages;

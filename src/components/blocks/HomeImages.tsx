import Image from '../Image';

interface HomeImagesProps {
  ImageList: string[];
}

const HomeImages = ({ ImageList }: HomeImagesProps) => {
  const content = ImageList.map((image) => {
    return <Image key={image} classDef={image} />;
  });
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 md:gap-7 md:h-[791px] md:my-[54px]">
      {content}
    </div>
  );
};

export default HomeImages;

import { useEffect, useState } from 'react';
import Image from '../Image';
import { useNavigate } from 'react-router-dom';
import { ILink, IServiceContent } from '../../utils/interface';

interface ServiceImageRotationProps {
  imageList: (IServiceContent & ILink & { img?: string; content?: string })[];
}

const ServiceImageRotation = ({ imageList }: ServiceImageRotationProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleImageClicked = (path?: string) => {
    if (path) {
      navigate(`${path}`);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex, imageList]);

  const handlePaginationClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <Image
        paragraphClassDef={`text-center font-bold`}
        classDef={`${imageList[currentIndex].img} ${
          imageList[currentIndex].clickPath
            ? 'hover:cursor-pointer hover:shadow-2xl'
            : ''
        }`}
        content={imageList[currentIndex].content}
        key={imageList[currentIndex].content}
        clicked={() =>
          handleImageClicked(
            imageList[currentIndex].clickPath
              ? imageList[currentIndex].clickPath
              : imageList[currentIndex].path
          )
        }
        imageList={imageList}
        currentIndex={currentIndex}
        paginationClicked={handlePaginationClick}
        paginationClassDef="mb-[14px]"
      />
    </div>
  );
};

export default ServiceImageRotation;

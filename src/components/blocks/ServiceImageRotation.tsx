import { useEffect, useState } from 'react';
import Image from '../Image';
import { serviceList } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';

const ServiceImageRotation = () => {
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
        prevIndex === serviceList.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const handlePaginationClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <Image
        paragraphClassDef={`text-center font-bold`}
        classDef={`${serviceList[currentIndex].img} ${
          serviceList[currentIndex].clickPath
            ? 'hover:cursor-pointer hover:shadow-2xl'
            : ''
        }`}
        content={serviceList[currentIndex].content}
        key={serviceList[currentIndex].content}
        clicked={() => handleImageClicked(serviceList[currentIndex].clickPath)}
        imageList={serviceList}
        currentIndex={currentIndex}
        paginationClicked={handlePaginationClick}
        paginationClassDef="mb-[14px]"
      />
    </div>
  );
};

export default ServiceImageRotation;

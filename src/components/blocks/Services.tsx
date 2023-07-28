import { useNavigate } from 'react-router-dom';
import Image from '../Image';
import { serviceList } from '../../utils/constants';

const Services = () => {
  const navigate = useNavigate();

  const handleImageClicked = (path?: string) => {
    if (path) {
      navigate(`${path}`);
    }
  };

  const content = serviceList.map((services) => {
    return (
      <Image
        paragraphClassDef={`text-center mb-4 font-bold`}
        classDef={`${services.img} ${
          services.clickPath ? 'hover:cursor-pointer hover:shadow-2xl' : ''
        }`}
        content={services.content}
        key={services.content}
        clicked={() => handleImageClicked(services.clickPath)}
      />
    );
  });

  return (
    <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-3 md:gap-7 md:h-contdef text-[white] text-[24px]">
      {content}
    </div>
  );
};

export default Services;

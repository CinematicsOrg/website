import { useNavigate } from 'react-router-dom';
import Image from '../Image';
import { galleryLinks } from '../../utils/constants';

const GalleryServices = () => {
  const navigate = useNavigate();

  const handleImageClicked = (path?: string) => {
    if (path) {
      navigate(`${path}`);
    }
  };

  const content = galleryLinks.slice(1).map((services, index) => {
    return (
      <Image
        paragraphClassDef={`text-center mb-4 font-bold`}
        classDef={`${services.img} ${
          services.clickPath ? 'hover:cursor-pointer hover:shadow-2xl' : ''
        }`}
        content={services.content}
        key={index}
        clicked={() => handleImageClicked(services.clickPath)}
      />
    );
  });

  // return (
  //   <div className="grid grid-cols-2 grid-rows-[1fr,1fr,1fr] gap-7 h-contdef text-white text-24px">
  //     <div className="col-span-1 row-span-1 bg-[url('/images/cinematics_corporate.png')]">
  //       {/* Item 1 */}
  //     </div>
  //     <div className="col-span-1 row-span-2 bg-[url('/images/cinematics_wedding.png')]">
  //       {/* Item 2 */}
  //     </div>
  //     <div className="col-span-1 row-span-1 bg-[url('/images/cinematics_360.png')]">
  //       {/* Item 3 */}
  //     </div>
  //     <div className="col-span-1 row-span-1 bg-[url('/images/cinematics_reality.png')]">
  //       {/* Item 4 */}
  //     </div>
  //     <div className="col-span-1 row-span-2 bg-[url('/images/cinematics_photobooth.png')]">
  //       {/* Item 5 */}
  //     </div>
  //   </div>
  // );

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-[1fr,1fr,1fr] md:gap-7 md:h-contdef text-[white] text-[24px]">
      {content}
    </div>
  );
};

export default GalleryServices;

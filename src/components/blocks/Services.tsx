import Image from '../Image';

const serviceList = [
  {
    img: `bg-[url('images/cinematics_corporate.png')]`,
    content: 'Corporate Event Videography',
  },
  {
    img: `col-span-2 bg-[url('/images/cinematics_wedding.png')]`,
    content: 'Wedding Videos',
  },
  {
    img: `bg-[url('/images/cinematics_product.png')]`,
    content: 'Product Activation',
  },
  {
    img: `bg-[url('/images/cinematics_documentary.png')]`,
    content: 'Documentary',
  },
  { img: `bg-[url('/images/cinematics_360.png')]`, content: '360 Videobooth' },
  {
    img: `col-span-2 bg-[url('/images/cinematics_photobooth.png')]`,
    content: 'Photobooth & Videobooth',
  },
  {
    img: `bg-[url('/images/cinematics_reality.png')]`,
    content: 'Reality Tv Show',
  },
];

const Services = () => {
  const content = serviceList.map((services) => {
    return (
      <Image
        paragraphClassDef="text-center mb-4 font-bold"
        classDef={services.img}
        content={services.content}
      />
    );
  });

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-7 h-contdef text-[white] text-[24px]">
      {content}
    </div>
  );
};

export default Services;

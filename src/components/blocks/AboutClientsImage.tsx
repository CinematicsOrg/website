import Image from '../Image';

const ImageList = [
  `bg-[url('images/cinematics_cocacola.png')]`,
  `bg-[url('/images/cinematics_visa.png')]`,
  `bg-[url('/images/cinematics_pepsi.png')]`,
  `bg-[url('/images/cinematics_hp.png')]`,
  `bg-[url('/images/cinematics_martell.png')]`,
  `bg-[url('/images/cinematics_mtn.png')]`,
  `bg-[url('/images/cinematics_facebook.png')]`,
  `bg-[url('/images/cinematics_google.png')]`,
  `bg-[url('/images/cinematics_stanbic.png')]`,
  `bg-[url('/images/cinematics_standardchartered.png')]`,
  `bg-[url('/images/cinematics_gtb.png')]`,
  `bg-[url('/images/cinematics_firstbank.png')]`,
  `bg-[url('/images/cinematics_budweiser.png')]`,
  `bg-[url('/images/cinematics_lancome.png')]`,
  `bg-[url('/images/cinematics_trace.png')]`,
  `bg-[url('/images/cinematics_bet9ja.png')]`,
];

const AboutClientsImage = () => {
  const content = ImageList.map((image) => {
    return <Image key={image} classDef={`${image}`} />;
  });
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-7 h-[720px] my-[80px]">
      {content}
    </div>
  );
};

export default AboutClientsImage;

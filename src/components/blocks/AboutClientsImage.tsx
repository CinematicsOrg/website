import Image from '../Image';

const ImageList = [
  `bg-[url('/images/cinematics_cocacola.png')]`,
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

const SmallScreenImageList = [
  `bg-[url('/images/cinematics_cocacola_small.png')]`,
  `bg-[url('/images/cinematics_visa_small.png')]`,
  `bg-[url('/images/cinematics_pepsi_small.png')]`,
  `bg-[url('/images/cinematics_hp_small.png')]`,
  `bg-[url('/images/cinematics_martell_small.png')]`,
  `bg-[url('/images/cinematics_mtn_small.png')]`,
  `bg-[url('/images/cinematics_facebook_small.png')]`,
  `bg-[url('/images/cinematics_google_small.png')]`,
  `bg-[url('/images/cinematics_stanbic_small.png')]`,
  `bg-[url('/images/cinematics_standardchartered_small.png')]`,
  `bg-[url('/images/cinematics_gtb_small.png')]`,
  `bg-[url('/images/cinematics_firstbank_small.png')]`,
  `bg-[url('/images/cinematics_budweiser_small.png')]`,
  `bg-[url('/images/cinematics_lancome_small.png')]`,
  `bg-[url('/images/cinematics_trace_small.png')]`,
  `bg-[url('/images/cinematics_bet9ja_small.png')]`,
];

const AboutClientsImage = () => {
  const content = ImageList.map((image) => {
    return <Image key={image} classDef={`${image}`} />;
  });
  const contentForSmallScreens = SmallScreenImageList.map((image) => {
    return <Image key={image} classDef={`${image}`} />;
  });
  return (
    <div>
      <div className="hidden md:grid grid-cols-4 grid-rows-4 gap-7 h-[720px] my-[80px]">
        {content}
      </div>
      <div className="md:hidden grid grid-cols-2 grid-rows-2 gap-4 my-[20px] ">
        {contentForSmallScreens}
      </div>
    </div>
  );
};

export default AboutClientsImage;

const ImageList = [
  `/images/cinematics_cocacola.png`,
  `/images/cinematics_visa.png`,
  `/images/cinematics_pepsi.png`,
  `/images/cinematics_hp.png`,
  `/images/cinematics_martell.png`,
  `/images/cinematics_mtn.png`,
  `/images/cinematics_facebook.png`,
  `/images/cinematics_google.png`,
  `/images/cinematics_stanbic.png`,
  `/images/cinematics_standardchartered.png`,
  `/images/cinematics_gtb.png`,
  `/images/cinematics_firstbank.png`,
  `/images/cinematics_budweiser.png`,
  `/images/cinematics_lancome.png`,
  `/images/cinematics_trace.png`,
  `/images/cinematics_bet9ja.png`,
];

const AboutClientsImage = () => {
  const content = ImageList.map((image) => {
    return (
      <div key={image}>
        <img src={image} alt="Image" />
      </div>
    );
  });

  return (
    <div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 my-[20px] md:grid-cols-4 md:grid-rows-4 md:gap-7 md:my-[80px]">
        {content}
      </div>
      <div className="md:hidden grid grid-cols-2 grid-rows-2 gap-4 my-[20px] ">
        {}
      </div>
    </div>
  );
};

export default AboutClientsImage;

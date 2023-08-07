import Navbar from '../components/Navbar';
import Footer from '../components/blocks/Footer';

const Gallery = () => {
  return (
    <div className="bg-[white] text-[black]">
      <Navbar />
      <div className="px-[79px]">
        <div className="my-[64px] relative">
          <img
            src="/images/cinematics_gallery_top.png"
            alt="Gallery"
            className="z-20"
          />
          <div className="absolute z-40 bottom-[-29px] left-[35%] text-[16px] leading-[24px] shadow-sm bg-[white] text-center w-[332px] text-[#667085] border-[1px] border-none rounded px-[13px] py-[17px] font-inter">
            GALLERY
          </div>
        </div>
      </div>

      <div className="text-[white]">
        <Footer />
      </div>
    </div>
  );
};

export default Gallery;

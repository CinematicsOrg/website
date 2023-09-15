import { Link } from 'react-router-dom';
import GalleryNavbar from '../components/GalleryNavbar';
import Navbar from '../components/Navbar';
import YoutubeVideo from '../components/YoutubeVideo';
import Footer from '../components/blocks/Footer';
import { IYoutubeLinks } from '../utils/interface';
import Button from '../components/Button';

interface GalleryProps {
  youtubeList: IYoutubeLinks[];
}

const Gallery = ({ youtubeList }: GalleryProps) => {
  const content = youtubeList.map((i, index) => {
    return <YoutubeVideo key={index} videoSource={i.src} title={i.title} />;
  });
  return (
    <div className="bg-[white] text-[black]">
      <div className="sticky top-0 z-[10000]">
        <Navbar />
      </div>
      <div className="px-[16px] md:px-[79px]">
        <div className="my-[10vw] relative">
          <img
            src="/images/cinematics_gallery_top.png"
            alt="Gallery"
            className="z-20"
          />
          <div className="absolute z-40 bottom-[-14px] md:bottom-[-29px] left-[35%] text-[16px] leading-[24px] shadow-sm bg-[white] text-center w-[30%] text-[#667085] border-[1px] border-none rounded px-2 md:px-[13px] py-[3px] md:py-[17px] font-inter">
            GALLERY
          </div>
        </div>
        <GalleryNavbar />
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 my-[10px] md:my-[60px]">
          {content}
        </div>
        <div className="md:flex justify-center mt-[32px] mb-[60px]">
          <Link to="/book/#book">
            <Button style="w-[100%]">Book Now</Button>
          </Link>
        </div>
      </div>

      <div className="text-[white]">
        <Footer />
      </div>
    </div>
  );
};

export default Gallery;

import Navbar from '../components/Navbar';
import YoutubeVideo from '../components/YoutubeVideo';
import Footer from '../components/blocks/Footer';

const youtubeList = [
  {
    src: 'https://www.youtube.com/embed/x9JoMRNaZbg',
    title: `Layole’s Lounge`,
    description:
      'Step into the grand opening of Layoles Lounge through our captivating gallery. Witness the excitement, elegance, and anticipation that filled the air as this remarkable venue came to life.',
  },
  {
    src: 'https://www.youtube.com/embed/ZC7tUzBE6Nk',
    title: `Breathe Academy`,
    description:
      'Step into the grand opening of Layoles Lounge through our captivating gallery. Witness the excitement, elegance, and anticipation that filled the air as this remarkable venue came to life.',
  },
  {
    src: 'https://www.youtube.com/embed/xoAU85wS1x0',
    title: `Layole’s Lounge`,
    description:
      'Step into the grand opening of Layoles Lounge through our captivating gallery. Witness the excitement, elegance, and anticipation that filled the air as this remarkable venue came to life.',
  },
  {
    src: 'https://www.youtube.com/embed/ShjyUIk5WWo',
    title: `Breathe Academy`,
    description:
      'Step into the grand opening of Layoles Lounge through our captivating gallery. Witness the excitement, elegance, and anticipation that filled the air as this remarkable venue came to life.',
  },
];

const Gallery = () => {
  const content = youtubeList.map((i, index) => {
    return (
      <YoutubeVideo
        key={index}
        videoSource={i.src}
        title={i.title}
        description={i.description}
      />
    );
  });
  return (
    <div className="bg-[white] text-[black]">
      <Navbar />
      <div className="px-[79px]">
        <div className="my-[10vw] relative">
          <img
            src="/images/cinematics_gallery_top.png"
            alt="Gallery"
            className="z-20"
          />
          <div className="absolute z-40 bottom-[-29px] left-[35%] text-[16px] leading-[24px] shadow-sm bg-[white] text-center w-[30%] text-[#667085] border-[1px] border-none rounded px-[13px] py-[17px] font-inter">
            GALLERY
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 my-[60px]">{content}</div>
      </div>

      <div className="text-[white]">
        <Footer />
      </div>
    </div>
  );
};

export default Gallery;
